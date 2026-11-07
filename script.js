const campaigns = {
  rg: {
    category: "Campanhas sazonais · Moda e varejo",
    name: "R&G Moda e Enxoval",
    logo: "assets/brands/rg.png",
    description:
      "Carna RG, A RG Mandou Flores e Banco do Geraldinho mostram como uma mesma marca pode criar campanhas para ocasiões e pontos de contato diferentes: peças, Reels e ações presenciais.",
    role: "Minha atuação: direção criativa, planejamento de conteúdo, copywriting e edição de artes e vídeos.",
    media: [
      {
        type: "image",
        src: "assets/work/rg-carna.jpg",
        alt: "Peça da campanha Carna RG",
        label: "Carna RG",
      },
      {
        type: "video",
        src: "assets/video/rg-carna.mp4",
        poster: "assets/work/rg-carna.jpg",
        alt: "Vídeo da campanha Carna RG",
        label: "Vídeo",
      },
      {
        type: "image",
        src: "assets/work/rg-flores.jpg",
        alt: "Peça da campanha A RG Mandou Flores",
        label: "Flores",
      },
      {
        type: "video",
        src: "assets/video/rg-flores.mp4",
        poster: "assets/work/rg-flores.jpg",
        alt: "Vídeo da campanha A RG Mandou Flores",
        label: "Vídeo",
      },
    ],
  },
  feijuca: {
    category: "Evento beneficente · Identidade & audiovisual",
    name: "Feijuca Querubina",
    logo: "assets/brands/feijuca.png",
    description:
      "Uma campanha visual para divulgar o evento beneficente, as atrações e o kit oficial. A identidade se desdobra em artes, vídeos e material para telão.",
    role: "Minha atuação: coordenação criativa e produção das artes e dos vídeos desta seleção.",
    media: [
      {
        type: "image",
        src: "assets/work/feijuca.jpg",
        alt: "Arte de divulgação da Feijuca Querubina",
        label: "Evento",
      },
      {
        type: "image",
        src: "assets/work/feijuca-atracoes.jpg",
        alt: "Arte com atrações da Feijuca Querubina",
        label: "Atrações",
      },
      {
        type: "image",
        src: "assets/work/feijuca-kit.jpg",
        alt: "Peça da campanha do kit oficial da Feijuca Querubina",
        label: "Kit",
      },
      {
        type: "image",
        src: "assets/work/feijuca-resenha.jpg",
        alt: "Arte de divulgação da Resenha Querubina",
        label: "Resenha",
      },
      {
        type: "video",
        src: "assets/video/feijuca.mp4",
        poster: "assets/work/feijuca.jpg",
        alt: "Vídeo da campanha Feijuca Querubina",
        label: "Vídeo",
      },
      {
        type: "video",
        src: "assets/video/feijuca-evento.mp4",
        poster: "assets/work/feijuca-atracoes.jpg",
        alt: "Vídeo de divulgação da Feijuca Querubina",
        label: "Vídeo do evento",
      },
    ],
  },
  skyfit: {
    category: "Ativação presencial · Campanha",
    name: "Skyfit",
    logo: "assets/brands/skyfit.png",
    description:
      "O mascote do Desafio Skyrats participou de uma ação presencial com alunos e equipe. A seleção reúne as artes e os registros dessa ativação.",
    role: "Minha atuação: desenvolvimento da campanha e da ativação, criação e edição das artes e dos vídeos do Desafio Skyrats.",
    media: [
      {
        type: "image",
        src: "assets/work/sky-rats.jpg",
        alt: "Mascote e peça do Desafio Skyrats",
        label: "Desafio",
      },
      {
        type: "image",
        src: "assets/work/sky-rats-acao.jpg",
        alt: "Registro da ativação na academia Skyfit",
        label: "Ação",
      },
      ...Array.from({ length: 8 }, (_, index) => ({
        type: "image",
        src: `assets/work/skyfit-acao-${String(index + 1).padStart(2, "0")}.jpg`,
        alt: `Registro ${index + 1} da ativação Desafio Skyrats na Skyfit`,
        label: `Registro ${String(index + 1).padStart(2, "0")}`,
      })),
    ],
  },
  bertenha: {
    category: "Conteúdo audiovisual · Materiais de construção",
    name: "Bertenha Material de Construção",
    logo: "assets/brands/bertenha.png",
    description:
      "Três vídeos para a Bertenha: duas edições de Luísa Visita e um vídeo de apresentação da marca.",
    role: "Minha atuação: produção de conteúdo em vídeo para a marca.",
    media: [
      {
        type: "video",
        src: "assets/video/luisa-visita.mp4",
        poster: "assets/work/luisa-visita.jpg",
        alt: "Vídeo Luísa Visita para Bertenha Material de Construção",
        label: "Luísa Visita · 01",
      },
      {
        type: "video",
        src: "assets/video/bertenha-luisa-visita-estendida.mp4",
        poster: "assets/work/luisa-visita.jpg",
        alt: "Edição mais longa de Luísa Visita para Bertenha Material de Construção",
        label: "Luísa Visita · 02",
      },
      {
        type: "video",
        src: "assets/video/bertenha-marca.mp4",
        poster: "assets/work/bertenha-marca-poster.jpg",
        alt: "Vídeo de apresentação da Bertenha Material de Construção",
        label: "Vídeo de marca",
      },
    ],
  },
  abc: {
    category: "Evento · Conteúdo audiovisual e artes",
    name: "ABC da Construção",
    logo: "assets/brands/abc.png",
    description:
      "A ABC da Construção queria se tornar mais conhecida na cidade. Pesquisei o que estava em alta nos perfis dos moradores e os conteúdos mais compartilhados para criar uma campanha conectada a esse repertório. Também editei um vídeo de inauguração.",
    role: "Minha atuação: desenvolvimento da campanha, direção criativa, criação de conteúdo e artes e edição de vídeos.",
    media: [
      {
        type: "video",
        src: "assets/video/abc-01.mp4",
        poster: "assets/work/abc-01-poster.jpg",
        alt: "Vídeo 1 de apresentação do ABC Dance",
        label: "Vídeo 01",
      },
      {
        type: "image",
        src: "assets/work/abc-02.jpg",
        alt: "Arte 2 de divulgação do ABC Dance",
        label: "Convite 02",
      },
      {
        type: "image",
        src: "assets/work/abc-03.jpg",
        alt: "Arte 3 com o professor Fabiano Freitas no ABC Dance",
        label: "Professor 03",
      },
      {
        type: "video",
        src: "assets/video/abc-04.mp4",
        poster: "assets/work/abc-04-poster.jpg",
        alt: "Vídeo 4 com registros do ABC Dance",
        label: "Vídeo 04",
      },
      {
        type: "image",
        src: "assets/work/abc-05.jpg",
        alt: "Arte 5 de agradecimento do ABC Dance em Igarapava",
        label: "Agradecimento 05",
      },
    ],
  },
  fanfest: {
    category: "Evento esportivo · Campanha",
    name: "FanFest",
    logo: "assets/brands/fanfest.png",
    description:
      "O projeto surgiu para criar uma FanFest durante a Copa do Mundo. A proposta reuniu planejamento, divulgação e conteúdos sobre os jogos, a programação e as atrações do evento.",
    role: "Minha atuação: desenvolvimento criativo, planejamento, participação na mobilização do evento, criação da campanha de divulgação e edição das artes e conteúdos.",
    media: [
      {
        type: "image",
        src: "assets/work/fanfest-01.jpg",
        alt: "Arte 1 de apresentação da FanFest e dos jogos do Brasil",
        label: "FanFest 01",
      },
      {
        type: "image",
        src: "assets/work/fanfest-02.jpg",
        alt: "Arte 2 com programação da FanFest e quadras cobertas",
        label: "Programação 02",
      },
      {
        type: "image",
        src: "assets/work/fanfest-03.jpg",
        alt: "Arte 3 do espaço para marcas na FanFest",
        label: "Espaço de marcas 03",
      },
      {
        type: "image",
        src: "assets/work/fanfest-04.jpg",
        alt: "Arte 4 de pagode durante a FanFest",
        label: "Pagode 04",
      },
      {
        type: "image",
        src: "assets/work/fanfest-05.jpg",
        alt: "Arte 5 do torneio de beach tennis da FanFest",
        label: "Beach tennis 05",
      },
    ],
  },
};

const rgStories = [
  {
    type: "image",
    src: "assets/work/rg-story-1.jpg",
    alt: "Story 1 da campanha Banco do Geraldinho",
  },
  {
    type: "video",
    src: "assets/video/rg-geraldinho.mp4",
    poster: "assets/work/rg-story-2-poster.jpg",
    alt: "Story 2 da campanha Banco do Geraldinho em vídeo",
  },
  {
    type: "image",
    src: "assets/work/rg-story-3.jpg",
    alt: "Story 3 da campanha Banco do Geraldinho",
  },
  {
    type: "image",
    src: "assets/work/rg-story-4.jpg",
    alt: "Story 4 da campanha Banco do Geraldinho",
  },
  {
    type: "image",
    src: "assets/work/rg-story-5.jpg",
    alt: "Story 5 da campanha Banco do Geraldinho",
  },
  {
    type: "image",
    src: "assets/work/rg-story-6.jpg",
    alt: "Story 6 da campanha Banco do Geraldinho",
  },
  {
    type: "image",
    src: "assets/work/rg-story-7.jpg",
    alt: "Story 7 do Banco do Geraldinho: conjunto de batizado",
  },
  {
    type: "image",
    src: "assets/work/rg-story-8.jpg",
    alt: "Story 8 do Banco do Geraldinho: roupão infantil",
  },
  {
    type: "image",
    src: "assets/work/rg-story-9.jpg",
    alt: "Story 9 do Banco do Geraldinho: tapete",
  },
  {
    type: "image",
    src: "assets/work/rg-story-10.jpg",
    alt: "Story 10 do Banco do Geraldinho: pantufas",
  },
  {
    type: "image",
    src: "assets/work/rg-story-11.jpg",
    alt: "Story 11 do Banco do Geraldinho: roupão infantil",
  },
  {
    type: "image",
    src: "assets/work/rg-story-12.jpg",
    alt: "Story 12 do Banco do Geraldinho: jogo de cama",
  },
  {
    type: "video",
    src: "assets/video/rg-story-13.mp4",
    poster: "assets/work/rg-story-13-poster.jpg",
    alt: "Story 13 do Banco do Geraldinho: último dia da ação",
  },
  {
    type: "video",
    src: "assets/video/rg-story-14.mp4",
    poster: "assets/work/rg-story-14-poster.jpg",
    alt: "Story 14 do Banco do Geraldinho: convite final à ação",
  },
];

const navigableAssetVersion = "20261107-14";
const navigableAsset = (path) => `${path}?v=${navigableAssetVersion}`;

const websites = {
  buscador: {
    type: "Plataforma de talentos",
    name: "Buscador de Gigantes",
    description:
      "Um espaço do Colégio Viva para apresentar oportunidades e aproximar profissionais do processo de cadastro.",
    points: [
      "Apresentação do programa",
      "Vagas e áreas de atuação",
      "Caminho para o cadastro",
    ],
    url: "https://buscadordegigantes.com.br",
    shortUrl: "buscadordegigantes.com.br",
    desktop: "assets/sites/buscador-desktop.png",
    mobile: "assets/sites/buscador-mobile.png",
  },
  trofeu: {
    type: "Narrativa cultural & votação",
    name: "Troféu Tia Odete",
    description:
      "Uma experiência para contar a história do troféu, apresentar as pessoas indicadas e orientar a votação.",
    points: [
      "História e contexto cultural",
      "Busca de pessoas indicadas",
      "Jornada de votação",
    ],
    url: "https://trofeu-tia-odete.pages.dev",
    shortUrl: "trofeutiaodete.com.br",
    desktop: "assets/sites/trofeu-desktop.png",
    mobile: "assets/sites/trofeu-mobile.png",
  },
  foour: {
    type: "Site de apresentação de serviços",
    name: "Foour Lead",
    description:
      "Estratégia, social media, tráfego, sites e SEO apresentados como frentes conectadas em uma mesma narrativa.",
    points: [
      "Apresentação do serviço 4D",
      "Abas para explorar as frentes",
      "Contato orientado à conversa",
    ],
    url: "https://foourlead.pages.dev",
    shortUrl: "foourlead.com.br",
    desktop: "assets/sites/foour-desktop.png",
    mobile: "assets/sites/foour-mobile.png",
  },
};

const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)")
  .matches;
const workMedia = document.getElementById("work-media");
const workTabs = [...document.querySelectorAll(".work-choice")];
const siteTabs = [...document.querySelectorAll(".site-tab")];
let currentProject = "rg";
let currentMediaIndex = 0;

function animateChange(element, enabled, { axis = "y", distance = 10, duration = 300 } = {}) {
  if (!enabled || !motionAllowed || !element.animate) return;
  element.getAnimations().forEach((animation) => animation.cancel());
  const offset = axis === "x" ? `translateX(${distance}px)` : `translateY(${distance}px)`;
  element.animate(
    [
      { opacity: 0.72, transform: offset },
      { opacity: 1, transform: "translate(0, 0)" },
    ],
    { duration, easing: "cubic-bezier(.16,1,.3,1)" },
  );
}

function attachVideoControls(video, container, { autoplay = false, silent = false } = {}) {
  video.controls = false;
  video.muted = true;
  const controls = document.createElement("div");
  controls.className = "work-video-controls";
  const play = document.createElement("button");
  play.type = "button";
  play.textContent = "▶";
  play.setAttribute("aria-label", "Reproduzir vídeo");
  const sound = document.createElement("button");
  sound.type = "button";
  sound.textContent = silent ? "Sem áudio" : "Som";
  sound.setAttribute("aria-label", silent ? "Vídeo sem áudio" : "Ativar som");
  sound.disabled = silent;
  const progress = document.createElement("input");
  progress.type = "range";
  progress.min = "0";
  progress.max = "100";
  progress.value = "0";
  progress.disabled = true;
  progress.setAttribute("aria-label", "Avançar vídeo");
  const togglePlay = () => {
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };
  play.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);
  if (!silent) {
    sound.addEventListener("click", () => {
      video.muted = !video.muted;
      sound.textContent = video.muted ? "Som" : "Mudo";
      sound.setAttribute("aria-label", video.muted ? "Ativar som" : "Silenciar vídeo");
    });
  }
  const updateSeekAvailability = () => {
    progress.disabled = !Number.isFinite(video.duration) || video.duration <= 0;
  };
  video.addEventListener("loadedmetadata", updateSeekAvailability);
  updateSeekAvailability();
  progress.addEventListener("input", () => {
    if (Number.isFinite(video.duration))
      video.currentTime = (Number(progress.value) / 100) * video.duration;
  });
  video.addEventListener("timeupdate", () => {
    if (Number.isFinite(video.duration) && video.duration > 0)
      progress.value = String((video.currentTime / video.duration) * 100);
  });
  video.addEventListener("play", () => {
    play.textContent = "Ⅱ";
    play.setAttribute("aria-label", "Pausar vídeo");
  });
  video.addEventListener("pause", () => {
    play.textContent = "▶";
    play.setAttribute("aria-label", "Reproduzir vídeo");
  });
  video.addEventListener("ended", () => { progress.value = "0"; });
  controls.append(play, progress, sound);
  container.append(controls);
  if (autoplay && motionAllowed && !document.hidden) video.play().catch(() => {});
}

function selectMedia(index, animate = true) {
  const direction = index < currentMediaIndex ? -1 : 1;
  currentMediaIndex =
    (index + campaigns[currentProject].media.length) %
    campaigns[currentProject].media.length;
  const item = campaigns[currentProject].media[currentMediaIndex];
  const element = document.createElement(
    item.type === "video" ? "video" : "img",
  );
  if (item.type === "video") {
    element.preload = "metadata";
    element.playsInline = true;
    element.poster = navigableAsset(item.poster);
    element.muted = true;
    element.setAttribute("aria-label", item.alt);
    const source = document.createElement("source");
    source.src = navigableAsset(item.src);
    source.type = "video/mp4";
    element.append(source);
  } else {
    element.src = navigableAsset(item.src);
    element.alt = item.alt;
  }
  workMedia.style.setProperty(
    "--media-poster",
    `url("${navigableAsset(item.type === "video" ? item.poster : item.src)}")`,
  );
  workMedia.classList.toggle("is-landscape", item.fit === "contain");
  workMedia.querySelector("video")?.pause();
  workMedia.replaceChildren(element);
  if (item.type === "video") attachVideoControls(element, workMedia, { autoplay: true });
  document.getElementById("work-count").textContent =
    `${String(currentMediaIndex + 1).padStart(2, "0")} / ${String(campaigns[currentProject].media.length).padStart(2, "0")}`;
  animateChange(workMedia, animate, { axis: "x", distance: 9 * direction, duration: 210 });
}

function selectProject(key, animate = true) {
  const project = campaigns[key];
  if (!project) return;
  closeStory(false);
  currentProject = key;
  workTabs.forEach((tab) => {
    const active = tab.dataset.project === key;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active)
      document
        .getElementById("work-panel")
        .setAttribute("aria-labelledby", tab.id);
  });
  document.getElementById("work-category").textContent = project.category;
  document.getElementById("work-name").textContent = project.name;
  document.getElementById("work-phone-name").textContent = project.name;
  document.getElementById("work-caption-name").textContent = project.name;
  document.getElementById("work-avatar").src = project.logo;
  document.getElementById("work-description").textContent = project.description;
  document.getElementById("work-role").textContent = project.role;
  document.getElementById("phone-stories").hidden = key !== "rg";
  selectMedia(0, animate);
  animateChange(document.querySelector(".work-detail"), animate, { duration: 320 });
}

const storyViewer = document.getElementById("story-viewer");
const storyMedia = document.getElementById("story-media");
const storyProgress = document.getElementById("story-progress");
const storyOpen = document.getElementById("story-open");
const storyVideoActions = document.getElementById("story-video-actions");
const storyPlay = document.getElementById("story-play");
const storySound = document.getElementById("story-sound");
let storyIndex = 0;
let storyTimer = null;

function closeStory(returnFocus = true) {
  if (storyViewer.hidden) return;
  clearTimeout(storyTimer);
  storyMedia.querySelector("video")?.pause();
  storyMedia.replaceChildren();
  storyViewer.hidden = true;
  document.querySelector(".phone-screen").inert = false;
  if (returnFocus) storyOpen.focus();
}

function showStory(index) {
  clearTimeout(storyTimer);
  storyMedia.querySelector("video")?.pause();
  storyIndex = Math.max(0, Math.min(index, rgStories.length - 1));
  const item = rgStories[storyIndex];
  storyMedia.style.setProperty(
    "--story-poster",
    `url("${navigableAsset(item.type === "video" ? item.poster : item.src)}")`,
  );
  const media = document.createElement(item.type === "video" ? "video" : "img");
  storyVideoActions.hidden = item.type !== "video";
  if (item.type === "video") {
    media.src = navigableAsset(item.src);
    media.poster = navigableAsset(item.poster);
    media.playsInline = true;
    media.preload = "metadata";
    media.muted = true;
    media.setAttribute("aria-label", item.alt);
    media.addEventListener("ended", () => advanceStory(1));
    media.addEventListener("play", () => {
      storyPlay.textContent = "Ⅱ";
      storyPlay.setAttribute("aria-label", "Pausar vídeo");
    });
    media.addEventListener("pause", () => {
      storyPlay.textContent = "▶";
      storyPlay.setAttribute("aria-label", "Reproduzir vídeo");
    });
    storyPlay.textContent = "▶";
    storyPlay.setAttribute("aria-label", "Reproduzir vídeo");
    storySound.textContent = "Som";
    storySound.setAttribute("aria-label", "Ativar som");
  } else {
    media.src = navigableAsset(item.src);
    media.alt = item.alt;
    if (motionAllowed) storyTimer = setTimeout(() => advanceStory(1), 6500);
  }
  storyMedia.replaceChildren(media);
  if (item.type === "video" && motionAllowed) media.play().catch(() => {});
  storyProgress.replaceChildren(
    ...rgStories.map((_, i) => {
      const segment = document.createElement("span");
      segment.className = `story-segment${i < storyIndex ? " is-done" : ""}${i === storyIndex ? " is-current" : ""}`;
      return segment;
    }),
  );
  document.getElementById("story-count").textContent =
    `${storyIndex + 1} / ${rgStories.length}`;
  document.getElementById("story-prev").disabled = storyIndex === 0;
}

function advanceStory(direction) {
  if (storyIndex + direction >= rgStories.length) closeStory();
  else showStory(storyIndex + direction);
}

storyOpen.addEventListener("click", () => {
  if (currentProject !== "rg") return;
  workMedia.querySelector("video")?.pause();
  document.querySelector(".phone-screen").inert = true;
  storyViewer.hidden = false;
  showStory(0);
  document.getElementById("story-close").focus();
});
document
  .getElementById("story-close")
  .addEventListener("click", () => closeStory());
document
  .getElementById("story-prev")
  .addEventListener("click", () => advanceStory(-1));
document
  .getElementById("story-next")
  .addEventListener("click", () => advanceStory(1));
storyPlay.addEventListener("click", () => {
  const video = storyMedia.querySelector("video");
  if (!video) return;
  if (video.paused) video.play().catch(() => {});
  else video.pause();
});
storySound.addEventListener("click", () => {
  const video = storyMedia.querySelector("video");
  if (!video) return;
  video.muted = !video.muted;
  storySound.textContent = video.muted ? "Som" : "Mudo";
  storySound.setAttribute(
    "aria-label",
    video.muted ? "Ativar som" : "Silenciar",
  );
});
storyViewer.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeStory();
  if (event.key === "ArrowRight" && !event.target.closest("video")) {
    event.preventDefault();
    advanceStory(1);
  }
  if (event.key === "ArrowLeft" && !event.target.closest("video")) {
    event.preventDefault();
    advanceStory(-1);
  }
  if (event.key === "Tab") {
    const focusable = [
      ...storyViewer.querySelectorAll("button:not(:disabled):not([hidden])"),
    ].filter((button) => !button.closest("[hidden]"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
storyMedia.addEventListener("click", (event) => {
  if (event.target.closest("video")) {
    storyPlay.click();
    return;
  }
  const midpoint =
    storyMedia.getBoundingClientRect().left + storyMedia.clientWidth / 2;
  advanceStory(event.clientX < midpoint ? -1 : 1);
});

document
  .getElementById("work-prev")
  .addEventListener("click", (event) =>
    selectMedia(currentMediaIndex - 1, event.detail !== 0),
  );
document
  .getElementById("work-next")
  .addEventListener("click", (event) =>
    selectMedia(currentMediaIndex + 1, event.detail !== 0),
  );
document.getElementById("work-panel").addEventListener("keydown", (event) => {
  if (
    !storyViewer.hidden ||
    event.target.closest("video") ||
    !["ArrowLeft", "ArrowRight"].includes(event.key)
  )
    return;
  event.preventDefault();
  selectMedia(currentMediaIndex + (event.key === "ArrowRight" ? 1 : -1), false);
});
let workSwipeStart = null;
workMedia.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" || event.target.closest("video")) return;
  workSwipeStart = { x: event.clientX, y: event.clientY };
});
workMedia.addEventListener("pointerup", (event) => {
  if (!workSwipeStart) return;
  const dx = event.clientX - workSwipeStart.x;
  const dy = event.clientY - workSwipeStart.y;
  workSwipeStart = null;
  if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
  selectMedia(currentMediaIndex + (dx < 0 ? 1 : -1));
});

workTabs.forEach((tab) =>
  tab.addEventListener("click", (event) =>
    selectProject(tab.dataset.project, event.detail !== 0),
  ),
);
document.querySelector(".work-choices").addEventListener("keydown", (event) => {
  if (
    ![
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
    ].includes(event.key)
  )
    return;
  event.preventDefault();
  const index = workTabs.indexOf(document.activeElement);
  const next =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? workTabs.length - 1
        : (index +
            (["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1) +
            workTabs.length) %
          workTabs.length;
  workTabs[next].focus();
  selectProject(workTabs[next].dataset.project, false);
});

function selectWebsite(key, animate = true) {
  const site = websites[key];
  siteTabs.forEach((tab) => {
    const active = tab.dataset.site === key;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active)
      document
        .getElementById("site-panel")
        .setAttribute("aria-labelledby", tab.id);
  });
  document.getElementById("site-type").textContent = site.type;
  document.getElementById("site-name").textContent = site.name;
  document.getElementById("site-description").textContent = site.description;
  document.getElementById("site-url").textContent = site.shortUrl;
  document.getElementById("site-link").href = site.url;
  document.getElementById("site-desktop").src = site.desktop;
  document.getElementById("site-desktop").alt =
    `Página inicial do ${site.name} em desktop`;
  document.getElementById("site-mobile").src = site.mobile;
  document.getElementById("site-mobile").alt =
    `Página inicial do ${site.name} em celular`;
  document.getElementById("site-points").replaceChildren(
    ...site.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    }),
  );
  animateChange(document.getElementById("site-panel"), animate, { distance: 14, duration: 340 });
}

const siteRotationInterval = 12000;
const desktopSites = window.matchMedia("(min-width: 601px)");
const reducedSiteMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let siteRotationTimer;
let sitesInView = false;
let siteRotationStopped = false;

function scheduleSiteRotation() {
  window.clearTimeout(siteRotationTimer);
  if (
    siteRotationStopped ||
    !sitesInView ||
    !desktopSites.matches ||
    reducedSiteMotion.matches ||
    document.hidden
  ) return;

  siteRotationTimer = window.setTimeout(() => {
    const currentIndex = siteTabs.findIndex((tab) => tab.classList.contains("is-active"));
    const nextTab = siteTabs[(currentIndex + 1) % siteTabs.length];
    selectWebsite(nextTab.dataset.site);
    scheduleSiteRotation();
  }, siteRotationInterval);
}

function stopSiteRotation() {
  siteRotationStopped = true;
  window.clearTimeout(siteRotationTimer);
}

if ("IntersectionObserver" in window) {
  const siteRotationObserver = new IntersectionObserver(
    ([entry]) => {
      sitesInView = entry.isIntersecting;
      scheduleSiteRotation();
    },
    { threshold: 0.2 },
  );
  siteRotationObserver.observe(document.getElementById("sites"));
}
desktopSites.addEventListener("change", scheduleSiteRotation);
reducedSiteMotion.addEventListener("change", scheduleSiteRotation);
document.addEventListener("visibilitychange", scheduleSiteRotation);

siteTabs.forEach((tab) =>
  tab.addEventListener("click", (event) => {
    stopSiteRotation();
    selectWebsite(tab.dataset.site, event.detail !== 0);
  }),
);
document.querySelector(".sites-tabs").addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  stopSiteRotation();
  const index = siteTabs.indexOf(document.activeElement);
  const next =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? siteTabs.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + siteTabs.length) %
          siteTabs.length;
  siteTabs[next].focus();
  selectWebsite(siteTabs[next].dataset.site, false);
});

window.matchMedia("(max-width: 600px)").addEventListener("change", (event) => {
  if (event.matches) selectWebsite("buscador", false);
});

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  header.classList.remove("menu-open");
}
menuToggle.addEventListener("click", (event) => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  header.classList.toggle("menu-pointer", event.detail !== 0);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  header.classList.toggle("menu-open", open);
});
document
  .querySelectorAll(".main-nav a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" || event.key.startsWith("Arrow"))
    document.documentElement.classList.add("keyboard-navigation");
  if (event.key === "Escape") closeMenu();
});
document.addEventListener(
  "pointerdown",
  () => document.documentElement.classList.remove("keyboard-navigation"),
  { passive: true },
);
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 20),
  { passive: true },
);
document.getElementById("year").textContent = String(new Date().getFullYear());

document.querySelectorAll("#motion .more-card-media").forEach((container) => {
  const video = container.querySelector("video");
  attachVideoControls(video, container, { silent: true });
  video.addEventListener("play", () => {
    document.querySelectorAll("#motion video").forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

selectProject("rg", false);

if (motionAllowed && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-enhanced");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
  );
  function registerReveals() {
    document.querySelectorAll(".reveal:not(.is-visible):not(.will-reveal)").forEach((element) => {
      if (!element.getClientRects().length) return;
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92) {
        element.classList.add("is-visible");
        return;
      }
      const order = [...element.closest("section").querySelectorAll(".reveal")].indexOf(element);
      element.style.setProperty("--reveal-delay", `${Math.min(order * 55, 165)}ms`);
      element.classList.add("will-reveal");
      revealObserver.observe(element);
    });
  }
  registerReveals();
  document.addEventListener("focusin", (event) => {
    event.target.closest(".will-reveal")?.classList.add("is-visible");
  });
  window.matchMedia("(max-width: 600px)").addEventListener("change", registerReveals);
}
