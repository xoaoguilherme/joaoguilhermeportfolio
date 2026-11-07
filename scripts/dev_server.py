"""Serve the local portfolio preview without caching edited files."""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from email.utils import formatdate
import os
import re


ROOT = Path(__file__).resolve().parent.parent


class PreviewHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        self._range = None
        requested_range = self.headers.get("Range")
        path = Path(self.translate_path(self.path))
        if not requested_range or not path.is_file():
            return super().send_head()

        match = re.fullmatch(r"bytes=(\d*)-(\d*)", requested_range)
        if not match or not any(match.groups()):
            self.send_error(400, "Invalid byte range")
            return None

        size = path.stat().st_size
        first, last = match.groups()
        if first:
            start = int(first)
            end = min(int(last), size - 1) if last else size - 1
        else:
            suffix_length = int(last)
            start = max(0, size - suffix_length)
            end = size - 1
        if start >= size or start > end:
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.send_header("Content-Length", "0")
            self.end_headers()
            return None

        file = path.open("rb")
        self._range = (start, end)
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(str(path)))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Last-Modified", formatdate(os.fstat(file.fileno()).st_mtime, usegmt=True))
        self.end_headers()
        file.seek(start)
        return file

    def copyfile(self, source, outputfile):
        if self._range is None:
            return super().copyfile(source, outputfile)
        remaining = self._range[1] - self._range[0] + 1
        while remaining:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()


if __name__ == "__main__":
    handler = partial(PreviewHandler, directory=str(ROOT))
    ThreadingHTTPServer(("127.0.0.1", 5317), handler).serve_forever()
