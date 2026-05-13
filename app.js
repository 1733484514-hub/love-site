const CONFIG = {
  password: "20260311",
  lovers: ["张逸凡", "戴怡萱"],
  startDate: "2026-03-11T00:00:00+08:00",
  declaration: "我会一直陪你，和生活温柔对抗到底。",
};

function uid() {
  return globalThis.crypto?.randomUUID?.() || `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

const safeStorage = window.loveStorageFallback || {
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  },
  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  },
};

const tracks = [
  {
    id: "zhen-de-ma",
    title: "真的吗",
    artist: "莫文蔚",
    tag: "我们的歌",
    src: "./music/mo-wen-wei-zhen-de-ma.mp3",
    cover: "./assets/cover-zhen-de-ma-photo.jpg",
    quote: "这首歌放在我们故事的开头。",
    memory: "2026 年 3 月 11 日，我们在一起",
    lyrics: [
      [0, "这一首，留给开始的那一天"],
      [5, "把心动认真放进日历"],
      [10, "从 2026.03.11 开始"],
      [16, "以后每次播放都想起你"],
      [23, "我们的故事继续往前"],
    ],
  },
  {
    id: "yong-bei-ji-chang-qing-ge",
    title: "用背脊唱情歌",
    artist: "Gareth.T / 汤令山",
    tag: "我们的歌",
    src: "./music/gareth-t-yong-bei-ji-chang-qing-ge.mp3",
    cover: "./assets/cover-yong-bei-ji-photo.jpg",
    quote: "这首歌放在想念变得很近的时候。",
    memory: "总会在伤心时候听的歌曲",
    lyrics: [
      [0, "你总能看到我的背脊"],
      [8, "因为我一直向你低头"],
      [16, "眼泪若嫌多"],
      [23, "用背脊唱情歌"],
      [31, "闹到从后脑"],
      [38, "可以望穿我"],
      [45, "心里痛什么"],
    ],
  },
];

const memories = [
  {
    date: "2026.03.11",
    title: "我们在一起的那一天",
    tag: "初识",
    image: "./assets/gallery-cafe.png",
    text: "从 2026 年 3 月 11 日开始，日历里多了一个只属于我们的坐标。",
    track: "zhen-de-ma",
  },
  {
    date: "2024.08.09",
    title: "雨天共撑一把伞",
    tag: "日常",
    image: "./assets/gallery-rain.png",
    text: "雨声把街道变得很慢，我们走得也很慢，好像世界只剩下伞下那一点距离。",
    track: "yong-bei-ji-chang-qing-ge",
  },
  {
    date: "2025.02.14",
    title: "一起看海边日落",
    tag: "旅行",
    image: "./assets/gallery-seaside.png",
    text: "海风很亮，日落很近，你回头笑的时候，我突然觉得以后可以很长。",
    track: "zhen-de-ma",
  },
];

const galleryItems = [
  { title: "在一起的那天", date: "2026.03.11", category: "约会", image: "./assets/gallery-cafe.png", caption: "从这一天开始，歌也有了特别的意义。" },
  { title: "海边日落", date: "2025.02.14", category: "旅行", image: "./assets/gallery-seaside.png", caption: "一起等到天色变软。" },
  { title: "周末小窝", date: "2025.03.22", category: "日常", image: "./assets/gallery-home.png", caption: "普通日子被你变得很暖。" },
  { title: "雨天散步", date: "2024.08.09", category: "日常", image: "./assets/gallery-rain.png", caption: "雨停之前，我们都不急着回家。" },
  { title: "城市夜色", date: "2025.06.01", category: "节日", image: "./assets/gallery-city.png", caption: "人群很亮，我只看向你。" },
  { title: "路上的风", date: "2025.10.03", category: "旅行", image: "./assets/gallery-sunset.png", caption: "下一次出发也要一起。" },
];

const anniversaries = [
  { name: "恋爱周年", date: "2026-03-11", type: "yearly", detail: "把这一天留给拥抱、晚餐和我们的歌。" },
  { name: "在一起纪念日", date: "2026-03-11", type: "yearly", detail: "2026 年 3 月 11 日，值得每年认真回放。" },
  { name: "生日惊喜", date: "2026-09-12", type: "once", detail: "准备一首新歌和一段很长的祝福。" },
];

const datePlans = [
  { title: "周年晚餐", date: "2027.03.11", status: "准备中", detail: "订一家安静的小店，播放莫文蔚《真的吗》和汤令山《用背脊唱情歌》。" },
  { title: "周末音乐夜", date: "2026.06.06", status: "待完成", detail: "把喜欢的歌排成歌单，互相唱一首。" },
  { title: "短途旅行", date: "2026.10.03", status: "想一起", detail: "带相机和耳机，去看一次很慢的日落。" },
];

const defaultMessages = [
  {
    id: uid(),
    author: "张逸凡",
    text: "今天听到一段旋律，很像你笑起来的时候。",
    track: "zhen-de-ma",
    createdAt: "2026-05-13T09:20:00+08:00",
  },
  {
    id: uid(),
    author: "戴怡萱",
    text: "晚安。明天也要把喜欢说得更认真一点。",
    track: "yong-bei-ji-chang-qing-ge",
    createdAt: "2026-05-13T22:08:00+08:00",
  },
];

const defaultWishes = [
  { id: uid(), text: "一起去海边看一次完整日落", done: false, createdAt: "2026-05-13" },
  { id: uid(), text: "录一首只属于我们的合唱", done: false, createdAt: "2026-05-13" },
  { id: uid(), text: "把第一次旅行做成相册", done: true, createdAt: "2026-05-13" },
];

const moods = ["开心", "想念", "甜蜜", "安静", "疲惫", "需要抱抱"];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const els = {
  passwordGate: $("#passwordGate"),
  gateForm: $("#gateForm"),
  passwordInput: $("#passwordInput"),
  gateError: $("#gateError"),
  siteShell: $("#siteShell"),
  lockButton: $("#lockButton"),
  loveDays: $("#loveDays"),
  loveHours: $("#loveHours"),
  loveMinutes: $("#loveMinutes"),
  loveSeconds: $("#loveSeconds"),
  nextAnniversaryDays: $("#nextAnniversaryDays"),
  nextAnniversaryName: $("#nextAnniversaryName"),
  startDateLabel: $("#startDateLabel"),
  todayTrackLabel: $("#todayTrackLabel"),
  todayTrackQuote: $("#todayTrackQuote"),
  upcomingLabel: $("#upcomingLabel"),
  upcomingDetail: $("#upcomingDetail"),
  heroPlayButton: $("#heroPlayButton"),
  audio: $("#audioPlayer"),
  playerCover: $("#playerCover"),
  trackTag: $("#trackTag"),
  trackTitle: $("#trackTitle"),
  trackArtist: $("#trackArtist"),
  playButton: $("#playButton"),
  miniPlayButton: $("#miniPlayButton"),
  prevButton: $("#prevButton"),
  nextButton: $("#nextButton"),
  modeButton: $("#modeButton"),
  progressRange: $("#progressRange"),
  volumeRange: $("#volumeRange"),
  currentTime: $("#currentTime"),
  durationTime: $("#durationTime"),
  lyricList: $("#lyricList"),
  linkedMemory: $("#linkedMemory"),
  trackList: $("#trackList"),
  miniCover: $("#miniCover"),
  miniTitle: $("#miniTitle"),
  miniLyric: $("#miniLyric"),
  timelineList: $("#timelineList"),
  galleryFilters: $("#galleryFilters"),
  galleryGrid: $("#galleryGrid"),
  photoDialog: $("#photoDialog"),
  dialogClose: $("#dialogClose"),
  dialogImage: $("#dialogImage"),
  dialogDate: $("#dialogDate"),
  dialogTitle: $("#dialogTitle"),
  dialogCaption: $("#dialogCaption"),
  messageForm: $("#messageForm"),
  messageAuthor: $("#messageAuthor"),
  messageTrack: $("#messageTrack"),
  messageText: $("#messageText"),
  messageList: $("#messageList"),
  wishForm: $("#wishForm"),
  wishInput: $("#wishInput"),
  wishList: $("#wishList"),
  dateGrid: $("#dateGrid"),
  moodForm: $("#moodForm"),
  moodOptions: $("#moodOptions"),
  moodText: $("#moodText"),
  moodLog: $("#moodLog"),
  toast: $("#toast"),
};

let currentTrackIndex = Number(safeStorage.getItem("love-current-track") || 0);
let playMode = safeStorage.getItem("love-play-mode") || "list";
let activeGalleryFilter = "全部";
let activeMood = moods[0];
let toastTimer = null;

const store = {
  get(key, fallback) {
    try {
      const value = safeStorage.getItem(key);
      return value ? JSON.parse(value) ?? fallback : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    safeStorage.setItem(key, JSON.stringify(value));
  },
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function formatDuration(value) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function formatDateTime(value) {
  const date = new Date(value);
  return date.toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function showToast(text) {
  clearTimeout(toastTimer);
  els.toast.textContent = text;
  els.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}

function revealSite() {
  els.passwordGate.classList.add("is-hidden");
  els.siteShell.classList.remove("is-hidden");
  renderAll();
  updateTimer();
}

function lockSite() {
  safeStorage.removeItem("love-site-auth");
  els.siteShell.classList.add("is-hidden");
  els.passwordGate.classList.remove("is-hidden");
  els.passwordInput.value = "";
  els.passwordInput.focus();
}

function getNextAnniversary() {
  const now = new Date();
  const candidates = anniversaries.map((item) => {
    const base = new Date(`${item.date}T00:00:00+08:00`);
    let candidate = new Date(base);
    if (item.type === "yearly") {
      candidate = new Date(now.getFullYear(), base.getMonth(), base.getDate());
      if (candidate < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
        candidate = new Date(now.getFullYear() + 1, base.getMonth(), base.getDate());
      }
    }
    return { ...item, candidate };
  }).filter((item) => item.candidate >= new Date(now.getFullYear(), now.getMonth(), now.getDate()));

  candidates.sort((a, b) => a.candidate - b.candidate);
  return candidates[0];
}

function updateTimer() {
  const start = new Date(CONFIG.startDate);
  const now = new Date();
  const diff = Math.max(0, now - start);
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minuteMs = 60 * 1000;

  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const minutes = Math.floor((diff % hourMs) / minuteMs);
  const seconds = Math.floor((diff % minuteMs) / 1000);

  els.loveDays.textContent = days;
  els.loveHours.textContent = String(hours).padStart(2, "0");
  els.loveMinutes.textContent = String(minutes).padStart(2, "0");
  els.loveSeconds.textContent = String(seconds).padStart(2, "0");
  els.startDateLabel.textContent = start.toLocaleDateString("zh-CN").replaceAll("/", ".");

  const next = getNextAnniversary();
  if (next) {
    const daysLeft = Math.max(0, Math.ceil((next.candidate - now) / dayMs));
    els.nextAnniversaryDays.textContent = daysLeft;
    els.nextAnniversaryName.textContent = `距离${next.name}`;
    els.upcomingLabel.textContent = next.name;
    els.upcomingDetail.textContent = next.detail;
  }
}

function getTrackById(id) {
  return tracks.find((track) => track.id === id) || tracks[0];
}

function normalizeTrackId(id) {
  if (id === "our-theme" || id === "roadside-sun") return "zhen-de-ma";
  if (id === "midnight-note") return "yong-bei-ji-chang-qing-ge";
  return id;
}

function migrateLegacyData() {
  const messages = store.get("love-messages", null);
  if (!Array.isArray(messages)) return;
  const migrated = messages.map((message) => ({
    ...message,
    author: message.author === "林屿" ? "张逸凡" : message.author === "星河" ? "戴怡萱" : message.author,
    track: normalizeTrackId(message.track),
  }));
  store.set("love-messages", migrated);
}

function renderTrack() {
  currentTrackIndex = Math.max(0, Math.min(currentTrackIndex, tracks.length - 1));
  const track = tracks[currentTrackIndex];
  const wasPlaying = !els.audio.paused && !els.audio.ended;

  if (!els.audio.src.endsWith(track.src.replace("./", ""))) {
    els.audio.src = track.src;
    els.audio.load();
  }

  els.playerCover.src = track.cover;
  els.playerCover.alt = `${track.title}封面`;
  els.trackTag.textContent = track.tag;
  els.trackTitle.textContent = track.title;
  els.trackArtist.textContent = track.artist;
  els.linkedMemory.textContent = `关联回忆：${track.memory}`;
  els.todayTrackLabel.textContent = track.title;
  els.todayTrackQuote.textContent = track.quote;
  els.miniCover.src = track.cover;
  els.miniTitle.textContent = track.title;
  els.miniLyric.textContent = track.quote;
  safeStorage.setItem("love-current-track", String(currentTrackIndex));

  renderLyrics();
  renderTrackList();
  updatePlayButtons();

  if (wasPlaying) {
    playAudio();
  }
}

function renderLyrics() {
  const track = tracks[currentTrackIndex];
  els.lyricList.innerHTML = track.lyrics.map(([time, text], index) => (
    `<div class="lyric-line" data-lyric-index="${index}" data-time="${time}">${escapeHTML(text)}</div>`
  )).join("");
  updateActiveLyric();
}

function updateActiveLyric() {
  const track = tracks[currentTrackIndex];
  const time = els.audio.currentTime || 0;
  let activeIndex = 0;
  track.lyrics.forEach(([lyricTime], index) => {
    if (time >= lyricTime) activeIndex = index;
  });
  $$(".lyric-line").forEach((node, index) => {
    node.classList.toggle("is-active", index === activeIndex);
  });
  const active = track.lyrics[activeIndex];
  if (active) {
    els.miniLyric.textContent = active[1];
  }
}

function updatePlayButtons() {
  const isPlaying = !els.audio.paused && !els.audio.ended;
  document.body.classList.toggle("is-playing", isPlaying);
  els.playButton.textContent = isPlaying ? "Ⅱ" : "▶";
  els.miniPlayButton.textContent = isPlaying ? "Ⅱ" : "▶";
  els.modeButton.textContent = playMode === "repeat" ? "1" : playMode === "shuffle" ? "⇄" : "↻";
  els.modeButton.title = playMode === "repeat" ? "单曲循环" : playMode === "shuffle" ? "随机播放" : "顺序播放";
}

function playAudio() {
  const result = els.audio.play();
  if (result?.catch) {
    result.catch(() => showToast("点击播放按钮后，浏览器才会允许音乐响起"));
  }
}

function togglePlay() {
  if (els.audio.paused || els.audio.ended) {
    playAudio();
  } else {
    els.audio.pause();
  }
}

function selectTrack(index, shouldPlay = true) {
  currentTrackIndex = index;
  renderTrack();
  if (shouldPlay) playAudio();
}

function nextTrack() {
  if (playMode === "shuffle") {
    let next = currentTrackIndex;
    while (next === currentTrackIndex && tracks.length > 1) {
      next = Math.floor(Math.random() * tracks.length);
    }
    selectTrack(next, true);
    return;
  }
  selectTrack((currentTrackIndex + 1) % tracks.length, true);
}

function prevTrack() {
  selectTrack((currentTrackIndex - 1 + tracks.length) % tracks.length, true);
}

function renderTrackList() {
  els.trackList.innerHTML = tracks.map((track, index) => `
    <article class="track-card">
      <img src="${track.cover}" alt="${escapeHTML(track.title)}封面" />
      <div>
        <strong>${escapeHTML(track.title)}</strong>
        <p>${escapeHTML(track.tag)} · ${escapeHTML(track.memory)}</p>
      </div>
      <button class="icon-button" data-track-index="${index}" title="播放${escapeHTML(track.title)}" aria-label="播放${escapeHTML(track.title)}">${index === currentTrackIndex && !els.audio.paused ? "Ⅱ" : "▶"}</button>
    </article>
  `).join("");
}

function renderTimeline() {
  els.timelineList.innerHTML = memories.map((memory) => {
    const track = getTrackById(memory.track);
    return `
      <article class="timeline-item">
        <img src="${memory.image}" alt="${escapeHTML(memory.title)}" />
        <div class="timeline-copy">
          <span class="timeline-meta">${memory.date} · ${escapeHTML(memory.tag)}</span>
          <h3>${escapeHTML(memory.title)}</h3>
          <p>${escapeHTML(memory.text)}</p>
          <button class="tiny-action" data-memory-track="${track.id}">播放 ${escapeHTML(track.title)}</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderGalleryFilters() {
  const categories = ["全部", ...new Set(galleryItems.map((item) => item.category))];
  els.galleryFilters.innerHTML = categories.map((category) => (
    `<button class="${category === activeGalleryFilter ? "is-active" : ""}" data-filter="${category}">${category}</button>`
  )).join("");
}

function renderGallery() {
  const items = activeGalleryFilter === "全部"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeGalleryFilter);
  els.galleryGrid.innerHTML = items.map((item, index) => `
    <button class="gallery-card" data-gallery-index="${galleryItems.indexOf(item)}">
      <img src="${item.image}" alt="${escapeHTML(item.title)}" />
      <span class="gallery-caption">
        <strong>${escapeHTML(item.title)}</strong>
        <small>${item.date} · ${escapeHTML(item.category)}</small>
      </span>
    </button>
  `).join("");
}

function openPhoto(index) {
  const item = galleryItems[index];
  if (!item) return;
  els.dialogImage.src = item.image;
  els.dialogImage.alt = item.title;
  els.dialogDate.textContent = `${item.date} · ${item.category}`;
  els.dialogTitle.textContent = item.title;
  els.dialogCaption.textContent = item.caption;
  if (typeof els.photoDialog.showModal === "function") {
    els.photoDialog.showModal();
  } else {
    showToast(item.caption);
  }
}

function renderMessageOptions() {
  els.messageTrack.innerHTML = `<option value="">不附带</option>` + tracks.map((track) => (
    `<option value="${track.id}">${track.title}</option>`
  )).join("");
}

function renderMessages() {
  const messages = store.get("love-messages", defaultMessages);
  els.messageList.innerHTML = messages.map((message) => {
    const track = message.track ? getTrackById(message.track) : null;
    return `
      <article class="message-card">
        <div class="message-head">
          <strong>${escapeHTML(message.author)}</strong>
          <span>${formatDateTime(message.createdAt)}</span>
          <button class="icon-button" data-remove-message="${message.id}" title="删除留言" aria-label="删除留言">×</button>
        </div>
        <p>${escapeHTML(message.text)}</p>
        ${track ? `<button class="tiny-action message-song" data-message-track="${track.id}">播放 ${escapeHTML(track.title)}</button>` : ""}
      </article>
    `;
  }).join("");
  store.set("love-messages", messages);
}

function renderWishes() {
  const wishes = store.get("love-wishes", defaultWishes);
  els.wishList.innerHTML = wishes.map((wish) => `
    <article class="wish-item ${wish.done ? "is-done" : ""}">
      <div class="wish-row">
        <label>
          <input type="checkbox" data-wish-id="${wish.id}" ${wish.done ? "checked" : ""} />
          ${escapeHTML(wish.text)}
        </label>
        <button class="icon-button" data-remove-wish="${wish.id}" title="删除愿望" aria-label="删除愿望">×</button>
      </div>
      <span>${wish.done ? "已完成" : "还在期待"} · ${wish.createdAt}</span>
    </article>
  `).join("");
  store.set("love-wishes", wishes);
}

function renderDates() {
  els.dateGrid.innerHTML = datePlans.map((plan) => `
    <article class="date-card">
      <div class="date-head">
        <time>${plan.date}</time>
        <span>${plan.status}</span>
      </div>
      <h3>${escapeHTML(plan.title)}</h3>
      <p>${escapeHTML(plan.detail)}</p>
    </article>
  `).join("");
}

function renderMoodOptions() {
  els.moodOptions.innerHTML = moods.map((mood) => (
    `<button type="button" class="${mood === activeMood ? "is-active" : ""}" data-mood="${mood}">${mood}</button>`
  )).join("");
}

function renderMoodLog() {
  const logs = store.get("love-mood-log", []);
  els.moodLog.innerHTML = logs.length ? logs.map((item) => `
    <article class="mood-entry">
      <time>${formatDateTime(item.createdAt)}</time>
      <h3>${escapeHTML(item.mood)}</h3>
      <p>${escapeHTML(item.text)}</p>
    </article>
  `).join("") : `
    <article class="mood-entry">
      <time>今天</time>
      <h3>${activeMood}</h3>
      <p>这里会保存你们写下的心情。</p>
    </article>
  `;
}

function renderAll() {
  renderTrack();
  renderTimeline();
  renderGalleryFilters();
  renderGallery();
  renderMessageOptions();
  renderMessages();
  renderWishes();
  renderDates();
  renderMoodOptions();
  renderMoodLog();
}

function bindEvents() {
  els.gateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (els.passwordInput.value.trim() === CONFIG.password) {
    safeStorage.setItem("love-site-auth", "yes");
      els.gateError.textContent = "";
      revealSite();
    } else {
      els.gateError.textContent = "暗号不对，再靠近一点试试。";
    }
  });

  els.lockButton.addEventListener("click", lockSite);
  els.heroPlayButton.addEventListener("click", () => selectTrack(0, true));
  els.playButton.addEventListener("click", togglePlay);
  els.miniPlayButton.addEventListener("click", togglePlay);
  els.prevButton.addEventListener("click", prevTrack);
  els.nextButton.addEventListener("click", nextTrack);

  els.modeButton.addEventListener("click", () => {
    playMode = playMode === "list" ? "repeat" : playMode === "repeat" ? "shuffle" : "list";
    safeStorage.setItem("love-play-mode", playMode);
    updatePlayButtons();
    showToast(els.modeButton.title);
  });

  els.trackList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-track-index]");
    if (!button) return;
    selectTrack(Number(button.dataset.trackIndex), true);
  });

  els.timelineList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-memory-track]");
    if (!button) return;
    const index = tracks.findIndex((track) => track.id === button.dataset.memoryTrack);
    selectTrack(index, true);
    document.querySelector("#music").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.galleryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeGalleryFilter = button.dataset.filter;
    renderGalleryFilters();
    renderGallery();
  });

  els.galleryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-index]");
    if (!button) return;
    openPhoto(Number(button.dataset.galleryIndex));
  });

  els.dialogClose.addEventListener("click", () => els.photoDialog.close());

  els.audio.addEventListener("play", () => {
    updatePlayButtons();
    renderTrackList();
  });
  els.audio.addEventListener("pause", () => {
    updatePlayButtons();
    renderTrackList();
  });
  els.audio.addEventListener("loadedmetadata", () => {
    els.progressRange.max = Number.isFinite(els.audio.duration) ? els.audio.duration : 100;
    els.durationTime.textContent = formatDuration(els.audio.duration);
  });
  els.audio.addEventListener("timeupdate", () => {
    if (!els.progressRange.matches(":active")) {
      els.progressRange.value = els.audio.currentTime || 0;
    }
    els.currentTime.textContent = formatDuration(els.audio.currentTime);
    updateActiveLyric();
  });
  els.audio.addEventListener("ended", () => {
    if (playMode === "repeat") {
      els.audio.currentTime = 0;
      playAudio();
    } else {
      nextTrack();
    }
  });
  els.audio.addEventListener("error", () => showToast("这首歌暂时没有加载成功"));

  els.progressRange.addEventListener("input", () => {
    els.audio.currentTime = Number(els.progressRange.value);
  });

  els.volumeRange.addEventListener("input", () => {
    els.audio.volume = Number(els.volumeRange.value);
    safeStorage.setItem("love-volume", String(els.audio.volume));
  });

  els.messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = els.messageText.value.trim();
    if (!text) {
      showToast("先写一句想说的话");
      return;
    }
    const messages = store.get("love-messages", defaultMessages);
    messages.unshift({
      id: uid(),
      author: els.messageAuthor.value,
      text,
      track: els.messageTrack.value,
      createdAt: new Date().toISOString(),
    });
    store.set("love-messages", messages);
    els.messageText.value = "";
    renderMessages();
    showToast("这句话已经留下来了");
  });

  els.messageList.addEventListener("click", (event) => {
    const trackButton = event.target.closest("[data-message-track]");
    if (trackButton) {
      const index = tracks.findIndex((track) => track.id === trackButton.dataset.messageTrack);
      selectTrack(index, true);
      return;
    }
    const removeButton = event.target.closest("[data-remove-message]");
    if (removeButton) {
      const messages = store.get("love-messages", defaultMessages).filter((item) => item.id !== removeButton.dataset.removeMessage);
      store.set("love-messages", messages);
      renderMessages();
    }
  });

  els.wishForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = els.wishInput.value.trim();
    if (!text) {
      showToast("写下一个想一起完成的事");
      return;
    }
    const wishes = store.get("love-wishes", defaultWishes);
    wishes.unshift({
      id: uid(),
      text,
      done: false,
      createdAt: new Date().toLocaleDateString("zh-CN").replaceAll("/", "."),
    });
    store.set("love-wishes", wishes);
    els.wishInput.value = "";
    renderWishes();
  });

  els.wishList.addEventListener("change", (event) => {
    const input = event.target.closest("[data-wish-id]");
    if (!input) return;
    const wishes = store.get("love-wishes", defaultWishes).map((wish) => (
      wish.id === input.dataset.wishId ? { ...wish, done: input.checked } : wish
    ));
    store.set("love-wishes", wishes);
    renderWishes();
  });

  els.wishList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-wish]");
    if (!removeButton) return;
    const wishes = store.get("love-wishes", defaultWishes).filter((wish) => wish.id !== removeButton.dataset.removeWish);
    store.set("love-wishes", wishes);
    renderWishes();
  });

  els.moodOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mood]");
    if (!button) return;
    activeMood = button.dataset.mood;
    renderMoodOptions();
  });

  els.moodForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = els.moodText.value.trim();
    const logs = store.get("love-mood-log", []);
    logs.unshift({
      id: uid(),
      mood: activeMood,
      text: text || "今天也想和你靠近一点。",
      createdAt: new Date().toISOString(),
    });
    store.set("love-mood-log", logs.slice(0, 12));
    els.moodText.value = "";
    renderMoodLog();
    showToast("今日心情已保存");
  });
}

function init() {
  bindEvents();
  els.audio.volume = Number(safeStorage.getItem("love-volume") || 0.72);
  els.volumeRange.value = els.audio.volume;
  currentTrackIndex = Number.isFinite(currentTrackIndex) ? currentTrackIndex : 0;
  migrateLegacyData();
  renderTrack();
  setInterval(updateTimer, 1000);

  if (safeStorage.getItem("love-site-auth") === "yes") {
    revealSite();
  } else {
    els.passwordInput.focus();
  }
}

init();
