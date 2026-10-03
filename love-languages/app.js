(function () {
  const ORDER = ["words", "acts", "gifts", "time", "touch"];

  const screens = {
    intro: document.getElementById("screen-intro"),
    quiz: document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results"),
  };

  const els = {
    start: document.getElementById("btn-start"),
    retake: document.getElementById("btn-retake"),
    question: document.getElementById("question-text"),
    choiceA: document.getElementById("choice-a"),
    choiceB: document.getElementById("choice-b"),
    choiceAText: document.getElementById("choice-a-text"),
    choiceBText: document.getElementById("choice-b-text"),
    progressFill: document.getElementById("progress-fill"),
    progressCurrent: document.getElementById("progress-current"),
    progressBar: document.querySelector(".progress"),
    topLanguages: document.getElementById("top-languages"),
    breakdown: document.getElementById("breakdown"),
  };

  /** Session-only state — never written to storage */
  let state = createState();
  let accepting = true;

  function createState() {
    return {
      index: 0,
      scores: { words: 0, acts: 0, gifts: 0, time: 0, touch: 0 },
      order: shuffle([...QUESTIONS.keys()]),
    };
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => {
      const active = key === name;
      el.classList.toggle("is-active", active);
      if (active) {
        el.removeAttribute("hidden");
      } else {
        el.setAttribute("hidden", "");
      }
    });
  }

  function startQuiz() {
    state = createState();
    accepting = true;
    showScreen("quiz");
    renderQuestion();
  }

  function currentQuestion() {
    return QUESTIONS[state.order[state.index]];
  }

  function renderQuestion() {
    const q = currentQuestion();
    const n = state.index + 1;

    els.question.textContent = q.prompt;
    els.choiceAText.textContent = q.a.text;
    els.choiceBText.textContent = q.b.text;
    els.progressCurrent.textContent = String(n);
    els.progressFill.style.width = `${(n / QUESTIONS.length) * 100}%`;
    els.progressBar.setAttribute("aria-valuenow", String(n));

    els.choiceA.classList.remove("is-selected");
    els.choiceB.classList.remove("is-selected");

  }

  function choose(side) {
    if (!accepting) return;
    accepting = false;

    const q = currentQuestion();
    const pick = side === "a" ? q.a : q.b;
    state.scores[pick.lang] += 1;

    const btn = side === "a" ? els.choiceA : els.choiceB;
    btn.classList.add("is-selected");

    window.setTimeout(() => {
      state.index += 1;
      if (state.index >= QUESTIONS.length) {
        showResults();
      } else {
        accepting = true;
        renderQuestion();
      }
    }, 220);
  }

  function rankedScores() {
    const total = QUESTIONS.length;
    return ORDER.map((key) => ({
      key,
      count: state.scores[key],
      pct: Math.round((state.scores[key] / total) * 100),
      ...LANGUAGE_INFO[key],
    })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }

  function showResults() {
    const ranked = rankedScores();
    const topTwo = ranked.slice(0, 2);
    const max = ranked[0].count || 1;

    els.topLanguages.innerHTML = topTwo
      .map(
        (lang, i) => `
        <li class="lang-card">
          <p class="lang-card__rank">${i === 0 ? "Primary" : "Secondary"}</p>
          <h3 class="lang-card__name">${lang.name}</h3>
          <p class="lang-card__score">${lang.pct}% of your choices · ${lang.count} of ${QUESTIONS.length}</p>
          <p class="lang-card__desc">${lang.description}</p>
        </li>`
      )
      .join("");

    els.breakdown.innerHTML = ranked
      .map(
        (lang) => `
        <div class="bar-row">
          <span class="bar-row__label">${lang.short}</span>
          <div class="bar-row__track" aria-hidden="true">
            <div class="bar-row__fill" data-width="${(lang.count / max) * 100}"></div>
          </div>
          <span class="bar-row__value">${lang.pct}%</span>
        </div>`
      )
      .join("");

    showScreen("results");

    requestAnimationFrame(() => {
      els.breakdown.querySelectorAll(".bar-row__fill").forEach((fill) => {
        fill.style.width = `${fill.dataset.width}%`;
      });
    });
  }

  els.start.addEventListener("click", startQuiz);
  els.retake.addEventListener("click", startQuiz);
  els.choiceA.addEventListener("click", () => choose("a"));
  els.choiceB.addEventListener("click", () => choose("b"));

  document.addEventListener("keydown", (event) => {
    if (!screens.quiz.classList.contains("is-active") || !accepting) return;
    const key = event.key.toLowerCase();
    if (key === "a" || key === "1") choose("a");
    if (key === "b" || key === "2") choose("b");
  });
})();
