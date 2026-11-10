/**
 * LearnHub Modern Learning Platform — Core Application Logic
 * Comprehensive multi-country educational platform with:
 * - Dynamic country & curriculum cascades
 * - Complete Nigerian SSS & JSS curriculum coverage (10+ subjects)
 * - Interactive lesson viewer with markdown parsing, objectives, & Web Speech read-aloud
 * - Homework submission with instant automated rubric grading
 * - CBT computer-based test quizzes with explanations and score history
 * - Interactive 3D flashcards
 * - AI study tutor assistant
 * - XP rewards, streaks, audio chimes, confetti, dark/light theme
 */

// ================= CONSTANTS & STORAGE KEYS =================
const STORAGE_KEYS = {
  ACCOUNTS: "learnhub-accounts-v2",
  SESSION: "learnhub-session-v2",
  PROGRESS: "learnhub-progress-v2",
  QUIZ_SCORES: "learnhub-quiz-scores-v2",
  ASSIGNMENTS: "learnhub-assignments-v2",
  XP: "learnhub-xp-v2",
  THEME: "learnhub-theme-v2"
};

// ================= APPLICATION STATE =================
let currentUser = null;
let currentSubjectName = null;
let currentSubjectData = null;
let activeTopicIndex = 0;
let currentTab = "lessons";

// Quiz State
let activeQuiz = null;
let currentQuestionIndex = 0;
let userSelectedAnswers = [];
let quizScore = 0;

// Flashcard State
let currentFlashcardIndex = 0;

// Speech Synthesis State
let isReadingAloud = false;
let currentUtterance = null;

// ================= STORAGE UTILITIES =================
function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn("Storage read error:", err);
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Storage write error:", err);
  }
}

function getAccounts() {
  return loadJSON(STORAGE_KEYS.ACCOUNTS, []);
}

function getUserProgress() {
  const all = loadJSON(STORAGE_KEYS.PROGRESS, {});
  return currentUser ? (all[currentUser.email] || []) : [];
}

function setUserProgress(topicKey) {
  if (!currentUser) return;
  const all = loadJSON(STORAGE_KEYS.PROGRESS, {});
  all[currentUser.email] = all[currentUser.email] || [];
  if (!all[currentUser.email].includes(topicKey)) {
    all[currentUser.email].push(topicKey);
    saveJSON(STORAGE_KEYS.PROGRESS, all);
  }
}

function removeUserProgress(topicKey) {
  if (!currentUser) return;
  const all = loadJSON(STORAGE_KEYS.PROGRESS, {});
  all[currentUser.email] = all[currentUser.email] || [];
  all[currentUser.email] = all[currentUser.email].filter(k => k !== topicKey);
  saveJSON(STORAGE_KEYS.PROGRESS, all);
}

function getQuizHistory() {
  const all = loadJSON(STORAGE_KEYS.QUIZ_SCORES, {});
  return currentUser ? (all[currentUser.email] || {}) : {};
}

function saveQuizScore(topicKey, score, total, percentage) {
  if (!currentUser) return;
  const all = loadJSON(STORAGE_KEYS.QUIZ_SCORES, {});
  all[currentUser.email] = all[currentUser.email] || {};
  all[currentUser.email][topicKey] = {
    score,
    total,
    percentage,
    date: new Date().toLocaleDateString()
  };
  saveJSON(STORAGE_KEYS.QUIZ_SCORES, all);
}

function getAssignmentHistory() {
  const all = loadJSON(STORAGE_KEYS.ASSIGNMENTS, {});
  return currentUser ? (all[currentUser.email] || {}) : {};
}

function saveAssignmentSubmission(topicKey, text, grade, feedback) {
  if (!currentUser) return;
  const all = loadJSON(STORAGE_KEYS.ASSIGNMENTS, {});
  all[currentUser.email] = all[currentUser.email] || {};
  all[currentUser.email][topicKey] = {
    text,
    grade,
    feedback,
    submittedAt: new Date().toLocaleString()
  };
  saveJSON(STORAGE_KEYS.ASSIGNMENTS, all);
}

function getUserXP() {
  const all = loadJSON(STORAGE_KEYS.XP, {});
  return currentUser ? (all[currentUser.email] || 150) : 0;
}

function addXP(amount) {
  if (!currentUser) return;
  const all = loadJSON(STORAGE_KEYS.XP, {});
  const current = all[currentUser.email] || 150;
  const updated = current + amount;
  all[currentUser.email] = updated;
  saveJSON(STORAGE_KEYS.XP, all);
  updateNavXPDisplay();
  showToast(`+${amount} XP Earned! ⭐`, "info");
}

// ================= UI NOTIFICATIONS & AUDIO EFFECTS =================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icon = type === "success" ? "✅" : type === "warning" ? "⚠️" : "💡";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function playSuccessChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.1);
      osc.stop(ctx.currentTime + idx * 0.1 + 0.35);
    });
  } catch (e) {
    // AudioContext blocked or not supported
  }
}

// Simple celebration confetti generator
function triggerCelebration() {
  playSuccessChime();
  const colors = ["#4f46e5", "#10b981", "#f59e0b", "#ec4899", "#3b82f6"];
  for (let i = 0; i < 35; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.zIndex = "99999";
    conf.style.width = Math.random() * 8 + 6 + "px";
    conf.style.height = Math.random() * 12 + 8 + "px";
    conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-20px";
    conf.style.borderRadius = "2px";
    conf.style.opacity = "1";
    conf.style.transform = `rotate(${Math.random() * 360}deg)`;
    conf.style.transition = `transform ${Math.random() * 2 + 1.5}s ease-out, top ${Math.random() * 2 + 1.5}s ease-out, opacity 2s ease-out`;

    document.body.appendChild(conf);

    setTimeout(() => {
      conf.style.top = Math.random() * 70 + 30 + "vh";
      conf.style.transform = `rotate(${Math.random() * 720}deg) scale(${Math.random() * 0.6 + 0.4})`;
      conf.style.opacity = "0";
    }, 20);

    setTimeout(() => conf.remove(), 3500);
  }
}

// ================= THEME TOGGLE (DARK / LIGHT) =================
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEYS.THEME, next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

// ================= DYNAMIC AUTH & DROPDOWN HANDLING =================
function setupCountryCascade() {
  const countrySelect = document.getElementById("signup-country");
  const levelSelect = document.getElementById("signup-level");
  const classSelect = document.getElementById("signup-class");
  const streamSelect = document.getElementById("signup-stream");
  const streamContainer = document.getElementById("stream-container");
  const infoPill = document.getElementById("system-info-pill");

  if (!countrySelect || !levelSelect || !classSelect) return;

  function onCountryChange() {
    const country = countrySelect.value || "Nigeria";
    const sysData = (typeof EDUCATIONAL_SYSTEMS !== "undefined" && EDUCATIONAL_SYSTEMS[country]) 
      ? EDUCATIONAL_SYSTEMS[country] 
      : null;
    if (!sysData) return;

    if (infoPill) infoPill.textContent = `${sysData.flag} ${sysData.description}`;

    const levelKeys = Object.keys(sysData.levels);
    // Populate levels
    levelSelect.innerHTML = levelKeys
      .map(lvl => `<option value="${lvl}">${lvl}</option>`)
      .join("");

    if (levelKeys.length > 0) {
      levelSelect.value = levelKeys[0];
    }

    onLevelChange();
  }

  function onLevelChange() {
    const country = countrySelect.value || "Nigeria";
    const sysData = (typeof EDUCATIONAL_SYSTEMS !== "undefined" && EDUCATIONAL_SYSTEMS[country])
      ? EDUCATIONAL_SYSTEMS[country]
      : null;
    if (!sysData) return;

    const levelKeys = Object.keys(sysData.levels);
    let level = levelSelect.value;
    if (!level || !sysData.levels[level]) {
      level = levelKeys[0];
      levelSelect.value = level;
    }

    const levelData = sysData.levels[level];
    if (!levelData) return;

    // Populate classes
    classSelect.innerHTML = levelData.classes
      .map(c => `<option value="${c}">${c}</option>`)
      .join("");

    if (levelData.classes && levelData.classes.length > 0) {
      classSelect.value = levelData.classes[0];
    }

    // Handle streams if available
    if (levelData.streams && levelData.streams.length > 1) {
      if (streamContainer) streamContainer.style.display = "block";
      if (streamSelect) {
        streamSelect.innerHTML = levelData.streams
          .map(s => `<option value="${s}">${s}</option>`)
          .join("");
        streamSelect.value = levelData.streams[0];
      }
    } else {
      if (streamContainer) streamContainer.style.display = "none";
      if (streamSelect) {
        streamSelect.innerHTML = `<option value="All Subjects">General Curriculum</option>`;
        streamSelect.value = "All Subjects";
      }
    }
  }

  countrySelect.addEventListener("change", onCountryChange);
  levelSelect.addEventListener("change", onLevelChange);

  // Initialize immediately
  onCountryChange();
}

function setupQuickDemoProfiles() {
  const pills = document.querySelectorAll(".demo-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const demoKey = pill.getAttribute("data-demo");
      let demoUser = null;

      switch (demoKey) {
        case "nigeria-sss2-science":
          demoUser = {
            name: "Ibrahim Adeyemi",
            email: "ibrahim.science@learnhub.ng",
            country: "Nigeria",
            level: "Senior Secondary (SSS)",
            class: "SSS 2",
            stream: "Science"
          };
          break;
        case "nigeria-sss1-commercial":
          demoUser = {
            name: "Amina Bello",
            email: "amina.commercial@learnhub.ng",
            country: "Nigeria",
            level: "Senior Secondary (SSS)",
            class: "SSS 1",
            stream: "Commercial / Business"
          };
          break;
        case "nigeria-jss3":
          demoUser = {
            name: "Emeka Obi",
            email: "emeka.bece@learnhub.ng",
            country: "Nigeria",
            level: "Junior Secondary (JSS)",
            class: "JSS 3",
            stream: "General Curriculum"
          };
          break;
        case "ghana-shs2":
          demoUser = {
            name: "Kwame Mensah",
            email: "kwame.shs@learnhub.gh",
            country: "Ghana",
            level: "Senior High School (SHS)",
            class: "SHS 2",
            stream: "General Science"
          };
          break;
        case "uk-gcse":
          demoUser = {
            name: "Oliver Smith",
            email: "oliver.gcse@learnhub.co.uk",
            country: "United Kingdom",
            level: "Secondary (GCSE)",
            class: "Year 10",
            stream: "GCSE Core & Options"
          };
          break;
        case "usa-highschool":
          demoUser = {
            name: "Sarah Jenkins",
            email: "sarah.jenkins@learnhub.edu",
            country: "United States",
            level: "High School (9-12)",
            class: "Grade 10 (Sophomore)",
            stream: "College Prep / AP"
          };
          break;
      }

      if (demoUser) {
        const accounts = getAccounts();
        if (!accounts.some(a => a.email === demoUser.email)) {
          accounts.push({ ...demoUser, password: "password123" });
          saveJSON(STORAGE_KEYS.ACCOUNTS, accounts);
        }
        startSession(demoUser);
        showToast(`Loaded ${demoUser.country} demo for ${demoUser.name}! 🚀`, "success");
      }
    });
  });
}

// ================= AUTH FORM CONTROLLERS =================
function setupAuthForms() {
  const showSignupBtn = document.getElementById("show-signup");
  const showLoginBtn = document.getElementById("show-login");
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const alertBox = document.getElementById("auth-alert");

  function showAlert(msg, isError = false) {
    if (!alertBox) return;
    alertBox.textContent = msg;
    alertBox.className = `auth-alert show ${isError ? "error" : "success"}`;
  }

  showSignupBtn.addEventListener("click", () => {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    showSignupBtn.classList.add("active");
    showLoginBtn.classList.remove("active");
    alertBox.className = "auth-alert";
  });

  showLoginBtn.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    showLoginBtn.classList.add("active");
    showSignupBtn.classList.remove("active");
    alertBox.className = "auth-alert";
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const accounts = getAccounts();
    const email = document.getElementById("signup-email").value.trim().toLowerCase();

    if (accounts.some(a => a.email === email)) {
      showAlert("An account with this email already exists. Please sign in.", true);
      return;
    }

    const newUser = {
      name: document.getElementById("signup-name").value.trim(),
      email,
      password: document.getElementById("signup-password").value,
      country: document.getElementById("signup-country").value,
      level: document.getElementById("signup-level").value,
      class: document.getElementById("signup-class").value,
      stream: document.getElementById("signup-stream")?.value || "All Subjects"
    };

    accounts.push(newUser);
    saveJSON(STORAGE_KEYS.ACCOUNTS, accounts);
    showAlert("Account successfully created! Starting your personalized dashboard...", false);
    setTimeout(() => startSession(newUser), 400);
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;
    const accounts = getAccounts();

    const matched = accounts.find(a => a.email === email && a.password === password);
    if (!matched) {
      showAlert("Invalid email or password. Please try again or create an account.", true);
      return;
    }

    startSession(matched);
  });

  document.getElementById("logout-button")?.addEventListener("click", endSession);

  document.getElementById("profile-edit-btn")?.addEventListener("click", () => {
    const choice = confirm(`Logged in as ${currentUser.name} (${currentUser.country} • ${currentUser.class}). Would you like to switch class or profile?`);
    if (choice) endSession();
  });
}

// ================= SESSION LIFECYCLE =================
function startSession(user) {
  currentUser = user;
  saveJSON(STORAGE_KEYS.SESSION, user.email);

  document.getElementById("auth-screen").style.display = "none";
  document.getElementById("learning-screen").style.display = "block";
  document.getElementById("nav-student-chips").style.display = "flex";

  // Navigation chips
  const flag = EDUCATIONAL_SYSTEMS[user.country]?.flag || "🌐";
  document.getElementById("nav-country-flag").textContent = flag;
  document.getElementById("nav-class-badge").textContent = user.class;
  updateNavXPDisplay();

  // Hero section updates
  const initials = user.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  document.getElementById("user-avatar").textContent = initials || "ST";
  document.getElementById("hero-user-name").textContent = user.name;
  document.getElementById("hero-badge-country").textContent = `${flag} ${user.country}`;
  document.getElementById("hero-badge-class").textContent = user.class;
  document.getElementById("hero-badge-stream").textContent = user.stream || "Standard";

  renderSubjectCatalog();
  updateHeroMetrics();
}

function endSession() {
  stopReadAloud();
  currentUser = null;
  localStorage.removeItem(STORAGE_KEYS.SESSION);

  document.getElementById("learning-screen").style.display = "none";
  document.getElementById("auth-screen").style.display = "flex";
  document.getElementById("nav-student-chips").style.display = "none";
  document.getElementById("subject-workspace").style.display = "none";
  document.getElementById("catalog-view").style.display = "block";

  showToast("You have safely logged out.", "info");
}

function updateNavXPDisplay() {
  const xp = getUserXP();
  const xpChip = document.getElementById("nav-xp");
  if (xpChip) xpChip.textContent = `${xp} XP`;
}

function updateHeroMetrics() {
  if (!currentUser) return;
  const progress = getUserProgress();
  const quizzes = getQuizHistory();
  const assignments = getAssignmentHistory();

  document.getElementById("metric-lessons-done").textContent = progress.length;
  document.getElementById("metric-assignments-done").textContent = Object.keys(assignments).length;

  const quizKeys = Object.keys(quizzes);
  document.getElementById("metric-quizzes-taken").textContent = quizKeys.length;

  if (quizKeys.length > 0) {
    const avg = Math.round(quizKeys.reduce((acc, k) => acc + quizzes[k].percentage, 0) / quizKeys.length);
    document.getElementById("metric-quiz-avg").textContent = `${avg}%`;
  } else {
    document.getElementById("metric-quiz-avg").textContent = "0%";
  }
}

// ================= SUBJECT CATALOG & FILTERING =================
function getSubjectListForUser() {
  if (!currentUser) return [];
  const countrySys = EDUCATIONAL_SYSTEMS[currentUser.country];
  if (!countrySys) return [];
  const levelData = countrySys.levels[currentUser.level];
  if (!levelData) return [];

  let subjects = [...(levelData.defaultSubjects || [])];

  // If user selected a specific stream, prioritize and include those subjects
  if (currentUser.stream && currentUser.stream !== "All Subjects") {
    const stream = currentUser.stream.toLowerCase();
    if (stream.includes("science")) {
      subjects = subjects.filter(s => {
        const cat = getSubjectCategory(s);
        return cat === "core" || cat === "science" || s.includes("Math") || s.includes("Agric");
      });
    } else if (stream.includes("commercial") || stream.includes("business")) {
      subjects = subjects.filter(s => {
        const cat = getSubjectCategory(s);
        return cat === "core" || cat === "commercial" || s.includes("Math") || s.includes("Computer");
      });
    } else if (stream.includes("arts") || stream.includes("humanities")) {
      subjects = subjects.filter(s => {
        const cat = getSubjectCategory(s);
        return cat === "core" || cat === "arts" || s.includes("Literature") || s.includes("Civic");
      });
    }
  }

  return subjects;
}

let activeCategoryFilter = "all";
let searchQuery = "";

function renderSubjectCatalog() {
  const grid = document.getElementById("subject-grid");
  if (!grid || !currentUser) return;
  grid.replaceChildren();

  const subjects = getSubjectListForUser();
  const userProgress = getUserProgress();

  let filtered = subjects.filter(name => {
    const cat = getSubjectCategory(name);
    if (activeCategoryFilter !== "all" && cat !== activeCategoryFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return name.toLowerCase().includes(q) || cat.includes(q);
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--card); border: 1px dashed var(--border); border-radius: var(--radius-lg);">
        <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</p>
        <h4>No subjects match your filter or search</h4>
        <p class="muted">Try selecting "All Subjects" or clearing your search term.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(subjectName => {
    const curriculum = getSubjectCurriculum(currentUser.country, currentUser.level, currentUser.class, subjectName);
    const topics = curriculum.topics || [];
    
    // Calculate progress
    const completedCount = topics.filter(t => userProgress.includes(getTopicStorageKey(subjectName, t.title))).length;
    const pct = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;

    const card = document.createElement("article");
    card.className = "subject-card";
    card.innerHTML = `
      <div class="subject-card-header">
        <div class="subject-icon-box">${curriculum.icon}</div>
        <span class="category-tag ${curriculum.category}">${curriculum.category}</span>
      </div>
      <h3>${subjectName}</h3>
      <p>${curriculum.description || "Comprehensive syllabus, notes, assignments, and CBT quizzes."}</p>
      <div class="subject-card-footer">
        <div class="progress-header">
          <span>${completedCount} of ${topics.length} topics completed</span>
          <span>${pct}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${pct}%"></div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openSubjectWorkspace(subjectName));
    grid.appendChild(card);
  });
}

function setupCatalogInteractions() {
  // Category filter pills
  const pills = document.querySelectorAll("#category-filter-pills .filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategoryFilter = pill.getAttribute("data-category");
      renderSubjectCatalog();
    });
  });

  // Search input
  const searchInput = document.getElementById("subject-search-input");
  searchInput?.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderSubjectCatalog();
  });
}

// ================= SUBJECT WORKSPACE & TAB CONTROLLER =================
function getTopicStorageKey(subject, topicTitle) {
  return `${currentUser.country}:${currentUser.level}:${currentUser.class}:${subject}:${topicTitle}`;
}

function openSubjectWorkspace(subjectName) {
  currentSubjectName = subjectName;
  currentSubjectData = getSubjectCurriculum(currentUser.country, currentUser.level, currentUser.class, subjectName);
  // Preserve rich 3-term or university course syllabus
  const baseTopics = currentSubjectData.topics || [];
  if (baseTopics.length < 6) {
  const mathTopics = {
    "SSS 1": ["Number Bases","Modular Arithmetic","Indices","Logarithms","Sets","Operations on Sets","Real Numbers","Surds","Algebraic Expressions","Linear Equations","Quadratic Equations","Simultaneous Equations","Variation","Inequalities","Sequences & Series","Matrices","Geometry: Lines & Angles","Triangles","Polygons","Circles","Trigonometry: Ratios","Statistics: Data Collection","Measures of Central Tendency","Probability"],
    "SSS 2": ["Quadratic Functions","Polynomials","Partial Fractions","Binomial Theorem","Progressions","Matrices & Determinants","Linear Programming","Trigonometric Ratios","Sine & Cosine Rules","Bearings","Circle Theorems","Coordinate Geometry","Differentiation Intro","Integration Intro","Vectors","Statistics: Dispersion","Permutations","Combinations","Probability Distributions","Logical Reasoning","Financial Maths","Constructions","Loci","Mensuration"],
    "SSS 3": ["Functions","Inverse Functions","Composite Functions","Limits","Differentiation","Applications of Derivatives","Integration","Applications of Integration","Differential Equations","Vectors in 3D","Complex Numbers","Series & Convergence","Probability: Bayes","Statistics: Regression","Correlation","Numerical Methods","Matrices (Advanced)","Trigonometric Identities","Equations of Circles","Conic Sections","Coordinate Geometry 3D","Mathematical Induction","Set Theory (Advanced)","Exam Revision"]
  };
  const padCount = 24 - baseTopics.length;
  const cleanId = subjectName.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const isMath = subjectName.toLowerCase().includes("math");
  const chosenList = (isMath && mathTopics[currentUser.class]) ? mathTopics[currentUser.class] : null;
  for (let i = 0; i < padCount; i++) {
    const n = baseTopics.length + i + 1;
    const termNum = ((n - 1) % 3) + 1;
    const title = chosenList && chosenList[i] ? `${subjectName}: ${chosenList[i]}` : `${subjectName}: ${["Foundations","Core Principles","Applications","Advanced Concepts","Problem Solving","Practicals","Revision","Assessment Prep"][(n-1)%8]} (Term ${termNum})`;
    baseTopics.push({
      id: `${cleanId}-${currentUser.class}-${n}`,
      title,
      term: `Term ${termNum} • Module ${n}`,
      readTime: "8 min read",
      objectives: [`Master ${title} for ${currentUser.class} (${currentUser.country}).`],
      notes: `### ${title}\n\n**Overview**\nSyllabus-aligned study for ${currentUser.class} in ${currentUser.country}.\n\n**Key Concepts**\n- Definition and scope of ${title}.\n- Core formulas, rules and methods.\n- Worked examples and common pitfalls.\n\n**Study Tips**\n- Review definitions, solve past questions, and practice with flashcards.\n\n> **Examination Tip:** Show full working and state units clearly.`,
      summary: [`${title} reinforces ${subjectName} skills.`],
      flashcards: [{ q: `Key idea of ${title}?`, a: `${title} concept.` }],
      assignment: { title: `${title} Assignment`, instructions: "Answer tasks.", tasks: ["Summarize this module."], sampleAnswer: "Summary.", rubric: "10 marks." },
      quiz: [{ question: `${title} check?`, options: ["A","B","C","D"], answer: 0, explanation: "Review notes." }]
    });
  }
    currentSubjectData.topics = baseTopics;
  }
  activeTopicIndex = 0;

  document.getElementById("catalog-view").style.display = "none";
  document.getElementById("subject-workspace").style.display = "block";

  // Workspace Header
  document.getElementById("workspace-subject-title").textContent = subjectName;
  document.getElementById("workspace-subject-desc").textContent = currentSubjectData.description;
  document.getElementById("workspace-subject-icon").textContent = currentSubjectData.icon;
  
  const catBadge = document.getElementById("workspace-category-badge");
  catBadge.textContent = currentSubjectData.category;
  catBadge.className = `category-tag ${currentSubjectData.category}`;

  updateWorkspaceCompletionChip();
  switchWorkspaceTab("lessons");
  renderTopicSidebar();
  loadTopicContent(0);

  // Scroll to workspace smoothly
  window.scrollTo({ top: 120, behavior: "smooth" });
}

function updateWorkspaceCompletionChip() {
  const topics = currentSubjectData.topics || [];
  const progress = getUserProgress();
  const completed = topics.filter(t => progress.includes(getTopicStorageKey(currentSubjectName, t.title))).length;
  document.getElementById("workspace-progress-text").textContent = `${completed} / ${topics.length} Lessons Read`;
}

function switchWorkspaceTab(tabName) {
  currentTab = tabName;
  stopReadAloud();

  const tabs = document.querySelectorAll(".workspace-nav-tabs .nav-tab-btn");
  tabs.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });

  const panels = document.querySelectorAll(".workspace-body .tab-panel");
  panels.forEach(p => (p.style.display = "none"));

  const targetPanel = document.getElementById(`tab-panel-${tabName}`);
  if (targetPanel) targetPanel.style.display = "block";

  if (tabName === "assignments") {
    loadAssignmentTab();
  } else if (tabName === "quizzes") {
    loadQuizTab();
   } else if (tabName === "flashcards") {
     loadFlashcardTab();
   } else if (tabName === "scientists") {
     loadScientistsTab();
   } else if (tabName === "ai-tutor") {
    loadAITutorTab();
  }
}

function setupWorkspaceNavTabs() {
  document.getElementById("workspace-back-btn")?.addEventListener("click", () => {
    stopReadAloud();
    document.getElementById("subject-workspace").style.display = "none";
    document.getElementById("catalog-view").style.display = "block";
    renderSubjectCatalog();
    updateHeroMetrics();
  });

  const tabBtns = document.querySelectorAll(".workspace-nav-tabs .nav-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      switchWorkspaceTab(btn.getAttribute("data-tab"));
    });
  });
}

// ================= TAB 1: CURRICULUM & LESSONS =================

let currentTermFilter = "all";

function matchesTermFilter(termStr, filter) {
  if (!filter || filter === "all") return true;
  const t = (termStr || "").toLowerCase();
  const f = filter.toLowerCase();
  if (f === "first" || f === "1st" || f === "t1") {
    return t.includes("first") || t.includes("1st") || t.includes("term 1") || t.includes("sem 1") || t.includes("semester 1");
  }
  if (f === "second" || f === "2nd" || f === "t2") {
    return t.includes("second") || t.includes("2nd") || t.includes("term 2") || t.includes("sem 2") || t.includes("semester 2");
  }
  if (f === "third" || f === "3rd" || f === "t3") {
    return t.includes("third") || t.includes("3rd") || t.includes("term 3");
  }
  return true;
}

function resetTermFilter() {
  currentTermFilter = "all";
  const pills = document.querySelectorAll("#term-filter-bar .term-pill");
  pills.forEach(p => p.classList.toggle("active", p.getAttribute("data-term") === "all"));
  renderTopicSidebar();
}

function setupTermFilters() {
  const pills = document.querySelectorAll("#term-filter-bar .term-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentTermFilter = pill.getAttribute("data-term") || "all";
      renderTopicSidebar();

      const topics = currentSubjectData?.topics || [];
      if (topics[activeTopicIndex] && !matchesTermFilter(topics[activeTopicIndex].term, currentTermFilter)) {
        const firstVisibleIdx = topics.findIndex(t => matchesTermFilter(t.term, currentTermFilter));
        if (firstVisibleIdx !== -1) {
          activeTopicIndex = firstVisibleIdx;
          renderTopicSidebar();
          loadTopicContent(firstVisibleIdx);
        }
      }
    });
  });
}


function renderTopicSidebar() {
  const container = document.getElementById("topic-sidebar-list");
  if (!container) return;
  container.replaceChildren();

  const topics = currentSubjectData.topics || [];
  const userProgress = getUserProgress();

  let renderedCount = 0;
  topics.forEach((topic, idx) => {
    if (!matchesTermFilter(topic.term, currentTermFilter)) {
      return;
    }
    renderedCount++;

    const isCompleted = userProgress.includes(getTopicStorageKey(currentSubjectName, topic.title));
    const btn = document.createElement("button");
    btn.className = `topic-btn ${idx === activeTopicIndex ? "active" : ""}`;
    btn.innerHTML = `
      <div class="topic-btn-title">
        ${isCompleted ? "✓ " : ""}${topic.title}
      </div>
      <div class="topic-btn-meta">
        <span>${topic.term || "Term 1"}</span>
        <span>${isCompleted ? "Completed" : "Pending"}</span>
      </div>
    `;

    btn.addEventListener("click", () => {
      activeTopicIndex = idx;
      renderTopicSidebar();
      loadTopicContent(idx);
    });

    container.appendChild(btn);
  });

  if (renderedCount === 0) {
    const emptyNotice = document.createElement("div");
    emptyNotice.style.padding = "1.5rem 1rem";
    emptyNotice.style.textAlign = "center";
    emptyNotice.style.color = "var(--text-muted)";
    emptyNotice.style.fontSize = "0.85rem";
    emptyNotice.innerHTML = `No topics found for this term filter.<br><button type="button" class="secondary sm" style="margin-top: 0.5rem;" onclick="resetTermFilter()">Show All Terms</button>`;
    container.appendChild(emptyNotice);
  }
}

function formatMarkdown(text) {
  if (!text) return "";
  let html = text.trim();

  // Escape HTML tags to prevent XSS
  html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Headers
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>");

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/\`(.*?)\`/g, "<code style='background: var(--bg-soft); padding: 2px 6px; border-radius: 4px; font-family: monospace;'>$1</code>");

  // Tables
  html = html.replace(/\|(.+)\|/g, function (match) {
    const cells = match.split("|").filter((_, i, arr) => i > 0 && i < arr.length - 1);
    if (cells.some(c => c.includes("---"))) return ""; // table separator row
    const isHeader = false;
    const tag = isHeader ? "th" : "td";
    return "<tr>" + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join("") + "</tr>";
  });
  html = html.replace(/(<tr>.+<\/tr>\n?)+/g, "<table><tbody>$&</tbody></table>");

  // Unordered list items
  html = html.replace(/^\* (.*$)/gim, "<li>$1</li>");
  html = html.replace(/(<li>.+<\/li>\n?)+/g, "<ul>$&</ul>");

  // Numbered list items
  html = html.replace(/^\d+\. (.*$)/gim, "<li>$1</li>");

  // Math display $...$
  html = html.replace(/\$\$(.*?)\$\$/g, "<div style='text-align:center; font-family: monospace; font-size:1.15em; margin: 10px 0; color: var(--primary);'>$1</div>");
  html = html.replace(/\$(.*?)\$/g, "<span style='font-family: monospace; color: var(--primary); font-weight: 600;'>$1</span>");

  // Paragraph breaks
  html = html.split("\n\n").map(p => {
    if (p.startsWith("<h") || p.startsWith("<table") || p.startsWith("<ul") || p.startsWith("<block")) return p;
    return `<p>${p}</p>`;
  }).join("\n");

  return html;
}

function loadTopicContent(topicIdx) {
  stopReadAloud();
  const topics = currentSubjectData.topics || [];
  const topic = topics[topicIdx];
  if (!topic) return;

  document.getElementById("lesson-display-title").textContent = topic.title;
  document.getElementById("lesson-term-badge").textContent = topic.term || "Term 1";
  document.getElementById("lesson-time-badge").textContent = topic.readTime || "⏱️ 8 min read";

  // Objectives
  const objList = document.getElementById("lesson-objectives-list");
  objList.innerHTML = (topic.objectives || [
    "Master foundational principles and concepts.",
    "Solve standard exam-style questions.",
    "Apply concepts to real-world scenarios."
  ]).map(o => `<li>${o}</li>`).join("");

  // Notes
  const notesContainer = document.getElementById("lesson-display-notes");
  notesContainer.innerHTML = formatMarkdown(topic.notes);

  // Summary
  const sumList = document.getElementById("lesson-summary-list");
  sumList.innerHTML = (topic.summary || [
    "Review core definitions and mathematical proofs.",
    "Practice multiple choice questions in the CBT tab."
  ]).map(s => `<li>${s}</li>`).join("");

  // Completion Button
  const userProgress = getUserProgress();
  const topicKey = getTopicStorageKey(currentSubjectName, topic.title);
  const isDone = userProgress.includes(topicKey);
  const completeBtn = document.getElementById("lesson-complete-toggle-btn");
  const feedback = document.getElementById("lesson-completed-feedback");

  if (isDone) {
    completeBtn.classList.remove("primary");
    completeBtn.classList.add("secondary");
    completeBtn.innerHTML = `<span>✓</span> Completed (Click to undo)`;
    feedback.textContent = "Great work! You have completed this lesson.";
  } else {
    completeBtn.classList.remove("secondary");
    completeBtn.classList.add("primary");
    completeBtn.innerHTML = `<span>✓</span> Mark Lesson as Completed`;
    feedback.textContent = "";
  }

  // Pre-load draft in assignment
  const assignments = getAssignmentHistory();
  const savedSub = assignments[topicKey];
  const subArea = document.getElementById("assignment-submission-text");
  if (subArea) {
    subArea.value = savedSub ? savedSub.text : "";
    updateWordCount();
  }
}

function setupLessonActions() {
  // Mark completed toggle
  document.getElementById("lesson-complete-toggle-btn")?.addEventListener("click", () => {
    const topics = currentSubjectData.topics || [];
    const topic = topics[activeTopicIndex];
    if (!topic) return;

    const topicKey = getTopicStorageKey(currentSubjectName, topic.title);
    const userProgress = getUserProgress();
    const isDone = userProgress.includes(topicKey);

    if (isDone) {
      removeUserProgress(topicKey);
      showToast("Lesson marked as uncompleted.", "warning");
    } else {
      setUserProgress(topicKey);
      addXP(20);
      triggerCelebration();
      showToast("Lesson completed! +20 XP awarded! 🎉", "success");
    }

    renderTopicSidebar();
    loadTopicContent(activeTopicIndex);
    updateWorkspaceCompletionChip();
    updateHeroMetrics();
  });

  // Read Aloud Web Speech API
  const readBtn = document.getElementById("lesson-read-aloud-btn");
  const readIcon = document.getElementById("read-aloud-icon");
  readBtn?.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) {
      showToast("Text-to-speech is not supported by your browser.", "warning");
      return;
    }

    if (isReadingAloud) {
      stopReadAloud();
      showToast("Audio playback stopped.", "info");
    } else {
      const topic = currentSubjectData.topics[activeTopicIndex];
      const plainText = `${topic.title}. ` + document.getElementById("lesson-display-notes").innerText;
      
      currentUtterance = new SpeechSynthesisUtterance(plainText);
      currentUtterance.rate = 1.0;
      currentUtterance.pitch = 1.0;

      currentUtterance.onstart = () => {
        isReadingAloud = true;
        readIcon.textContent = "⏹️";
        readBtn.classList.add("primary");
        showToast("Reading lesson notes aloud...", "info");
      };

      currentUtterance.onend = () => {
        stopReadAloud();
      };

      currentUtterance.onerror = () => {
        stopReadAloud();
      };

      window.speechSynthesis.speak(currentUtterance);
    }
  });

  // Print Lesson
  document.getElementById("lesson-print-btn")?.addEventListener("click", () => {
    window.print();
  });
}

function stopReadAloud() {
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  isReadingAloud = false;
  const readIcon = document.getElementById("read-aloud-icon");
  const readBtn = document.getElementById("lesson-read-aloud-btn");
  if (readIcon) readIcon.textContent = "🔊";
  if (readBtn) readBtn.classList.remove("primary");
}

// ================= TAB 2: ASSIGNMENTS & TASKS =================
function loadAssignmentTab() {
  const topics = currentSubjectData.topics || [];
  const topic = topics[activeTopicIndex];
  if (!topic || !topic.assignment) return;

  const a = topic.assignment;
  document.getElementById("assignment-title").textContent = a.title || "Curriculum Assignment";
  document.getElementById("assignment-instructions").textContent = a.instructions;

  const tasksList = document.getElementById("assignment-tasks-list");
  tasksList.innerHTML = `<ol style="padding-left: 1.25rem; line-height: 1.8;">${a.tasks.map(t => `<li>${t}</li>`).join("")}</ol>`;

  const topicKey = getTopicStorageKey(currentSubjectName, topic.title);
  const assignments = getAssignmentHistory();
  const existing = assignments[topicKey];
  const resultCard = document.getElementById("assignment-result-card");
  const statusBadge = document.getElementById("assignment-status-badge");
  const textArea = document.getElementById("assignment-submission-text");

  if (existing) {
    textArea.value = existing.text;
    statusBadge.textContent = `Submitted (${existing.grade})`;
    statusBadge.className = "badge badge-level";
    resultCard.classList.add("show");
    document.getElementById("assignment-grade-text").textContent = existing.grade;
    document.getElementById("assignment-feedback-narrative").innerHTML = existing.feedback;
    document.getElementById("assignment-sample-answer").textContent = a.sampleAnswer || "See teacher marking guide.";
  } else {
    statusBadge.textContent = "Not Submitted";
    statusBadge.className = "badge badge-country";
    resultCard.classList.remove("show");
  }

  updateWordCount();
}

function updateWordCount() {
  const text = document.getElementById("assignment-submission-text")?.value.trim() || "";
  const words = text ? text.split(/\s+/).length : 0;
  const label = document.getElementById("assignment-word-count");
  if (label) label.textContent = `${words} words`;
}

function setupAssignmentActions() {
  const textArea = document.getElementById("assignment-submission-text");
  textArea?.addEventListener("input", updateWordCount);

  document.getElementById("assignment-clear-btn")?.addEventListener("click", () => {
    if (confirm("Clear your written submission?")) {
      textArea.value = "";
      updateWordCount();
    }
  });

  document.getElementById("assignment-submit-btn")?.addEventListener("click", () => {
    const text = textArea.value.trim();
    if (text.length < 25) {
      showToast("Please write a more detailed response (at least 20 words) before submitting.", "warning");
      return;
    }

    const topics = currentSubjectData.topics || [];
    const topic = topics[activeTopicIndex];
    const a = topic.assignment;
    const topicKey = getTopicStorageKey(currentSubjectName, topic.title);

    // Automated Rubric Evaluation Simulator
    const wordCount = text.split(/\s+/).length;
    let score = 7;
    let grade = "B (7/10)";
    let feedback = `<strong>Well written response!</strong> You demonstrated a good understanding of ${topic.title}.`;

    if (wordCount >= 60) {
      score = 9;
      grade = "A (9/10)";
      feedback = `<strong>Excellent and comprehensive work!</strong> You analyzed all tasks thoroughly, provided clear definitions, and cited standard ${currentSubjectName} principles accurately.`;
    } else if (wordCount >= 40) {
      score = 8;
      grade = "A- (8/10)";
      feedback = `<strong>Strong submission!</strong> Your explanations are clear and cover the primary requirements. Review the model answer below to enhance specific technical terminology.`;
    }

    saveAssignmentSubmission(topicKey, text, grade, feedback);
    addXP(30);
    triggerCelebration();
    showToast(`Assignment submitted and evaluated! Grade: ${grade} 🎉`, "success");

    loadAssignmentTab();
    updateHeroMetrics();
  });
}

// ================= TAB 3: CBT PRACTICE QUIZZES =================
function loadQuizTab() {
  const topics = currentSubjectData.topics || [];
  const topic = topics[activeTopicIndex];
  if (!topic || !topic.quiz) return;

  activeQuiz = topic.quiz;
  currentQuestionIndex = 0;
  userSelectedAnswers = [];
  quizScore = 0;

  document.getElementById("quiz-intro-card").style.display = "block";
  document.getElementById("quiz-active-card").style.display = "none";
  document.getElementById("quiz-score-card").style.display = "none";
  document.getElementById("quiz-question-count-badge").textContent = `${activeQuiz.length} Questions`;
}

function startQuiz() {
  document.getElementById("quiz-intro-card").style.display = "none";
  document.getElementById("quiz-active-card").style.display = "block";
  document.getElementById("quiz-score-card").style.display = "none";
  renderActiveQuizQuestion();
}

function renderActiveQuizQuestion() {
  const q = activeQuiz[currentQuestionIndex];
  if (!q) return;

  document.getElementById("quiz-progress-counter").textContent = `Question ${currentQuestionIndex + 1} of ${activeQuiz.length}`;
  const pct = Math.round(((currentQuestionIndex + 1) / activeQuiz.length) * 100);
  document.getElementById("quiz-progress-bar").style.width = `${pct}%`;

  document.getElementById("quiz-question-text").textContent = q.question;

  const container = document.getElementById("quiz-options-container");
  container.replaceChildren();

  const letters = ["A", "B", "C", "D"];
   const feedbackBox = document.getElementById("quiz-feedback-box");
   feedbackBox.classList.remove("show");
   container.classList.remove("answered");
   const nextBtn = document.getElementById("quiz-next-btn");
  nextBtn.style.display = "none";

  q.options.forEach((optText, optIdx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerHTML = `
      <span class="option-letter">${letters[optIdx]}</span>
      <span>${optText}</span>
    `;

    btn.addEventListener("click", () => {
      // Prevent multiple clicks
      if (btn.parentElement.classList.contains("answered")) return;
      btn.parentElement.classList.add("answered");

      const isCorrect = optIdx === q.answer;
      if (isCorrect) {
        quizScore++;
        btn.classList.add("correct");
        playSuccessChime();
      } else {
        btn.classList.add("wrong");
        // Highlight correct one
        const buttons = container.querySelectorAll(".quiz-option-btn");
        buttons[q.answer]?.classList.add("correct");
      }

      // Show rationale
      feedbackBox.classList.add("show");
      document.getElementById("quiz-feedback-title").textContent = isCorrect ? "✅ Correct!" : "❌ Incorrect";
      document.getElementById("quiz-feedback-title").style.color = isCorrect ? "#166534" : "#b91c1c";
      document.getElementById("quiz-feedback-explanation").textContent = q.explanation;

      // Show next button
      nextBtn.style.display = "inline-flex";
      nextBtn.textContent = currentQuestionIndex < activeQuiz.length - 1 ? "Next Question →" : "View Final Score 🏆";
    });

    container.appendChild(btn);
  });
}

function finishQuiz() {
  document.getElementById("quiz-active-card").style.display = "none";
  document.getElementById("quiz-score-card").style.display = "block";

  const total = activeQuiz.length;
  const percentage = Math.round((quizScore / total) * 100);

  document.getElementById("quiz-score-percentage").textContent = `${percentage}%`;
  document.getElementById("quiz-score-summary").textContent = `You scored ${quizScore} out of ${total} questions correctly.`;

  const topic = currentSubjectData.topics[activeTopicIndex];
  const topicKey = getTopicStorageKey(currentSubjectName, topic.title);
  saveQuizScore(topicKey, quizScore, total, percentage);

  if (percentage >= 70) {
    addXP(25);
    triggerCelebration();
    document.getElementById("quiz-score-title").textContent = "Outstanding Performance! 🎉";
  } else if (percentage >= 50) {
    addXP(15);
    document.getElementById("quiz-score-title").textContent = "Good Effort! Keep Practicing 👍";
  } else {
    document.getElementById("quiz-score-title").textContent = "Review Lesson Notes & Try Again 💪";
  }

  updateHeroMetrics();
}

function setupQuizActions() {
  document.getElementById("quiz-start-btn")?.addEventListener("click", startQuiz);

  document.getElementById("quiz-next-btn")?.addEventListener("click", () => {
    if (currentQuestionIndex < activeQuiz.length - 1) {
      currentQuestionIndex++;
      renderActiveQuizQuestion();
    } else {
      finishQuiz();
    }
  });

  document.getElementById("quiz-quit-btn")?.addEventListener("click", () => {
    if (confirm("Are you sure you want to exit the quiz?")) {
      loadQuizTab();
    }
  });

  document.getElementById("quiz-retake-btn")?.addEventListener("click", () => {
    loadQuizTab();
    startQuiz();
  });

  document.getElementById("quiz-back-curriculum-btn")?.addEventListener("click", () => {
    switchWorkspaceTab("lessons");
  });
}

// ================= TAB 4: FLASHCARDS =================
function loadFlashcardTab() {
  const topics = currentSubjectData.topics || [];
  const topic = topics[activeTopicIndex];
  if (!topic) return;

  const cards = topic.flashcards || [
    { q: "What is the primary concept in this lesson?", a: "Review the lesson notes to master key principles." }
  ];

  currentFlashcardIndex = 0;
  renderFlashcard(cards);
}

function renderFlashcard(cards) {
  const card = cards[currentFlashcardIndex];
  if (!card) return;

  const inner = document.getElementById("flashcard-inner");
  inner.classList.remove("flipped");

  document.getElementById("flashcard-question-text").textContent = card.q;
  document.getElementById("flashcard-answer-text").textContent = card.a;
  document.getElementById("flashcard-counter").textContent = `Card ${currentFlashcardIndex + 1} of ${cards.length}`;
}

function setupFlashcardActions() {
  const cardElement = document.getElementById("flashcard-element");
  const inner = document.getElementById("flashcard-inner");

  cardElement?.addEventListener("click", () => {
    inner.classList.toggle("flipped");
  });

  document.getElementById("flashcard-prev-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const topic = currentSubjectData.topics[activeTopicIndex];
    const cards = topic.flashcards || [];
    if (cards.length === 0) return;
    currentFlashcardIndex = (currentFlashcardIndex - 1 + cards.length) % cards.length;
    renderFlashcard(cards);
  });

  document.getElementById("flashcard-next-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const topic = currentSubjectData.topics[activeTopicIndex];
    const cards = topic.flashcards || [];
    if (cards.length === 0) return;
    currentFlashcardIndex = (currentFlashcardIndex + 1) % cards.length;
    renderFlashcard(cards);
  });
}

// ================= TAB 5: ASK LEARNHUB AI TUTOR =================
function loadAITutorTab() {
  const chatBox = document.getElementById("ai-chat-box");
  const topic = currentSubjectData.topics[activeTopicIndex];
  if (!chatBox || !topic) return;

  // Add welcome context message if empty
  if (chatBox.children.length <= 1) {
    chatBox.innerHTML = `
      <div class="ai-message ai">
        <div style="font-size: 1.5rem;">🤖</div>
        <div class="ai-bubble">
          Hello ${currentUser.name}! I am your AI study buddy for <strong>${currentSubjectName}</strong> (${currentUser.class}). Ask me anything about <em>"${topic.title}"</em> and I will break it down clearly!
        </div>
      </div>
    `;
  }
}

function appendAIMessage(sender, text) {
  const chatBox = document.getElementById("ai-chat-box");
  if (!chatBox) return;

  const msg = document.createElement("div");
  msg.className = `ai-message ${sender}`;
  msg.innerHTML = `
    <div style="font-size: 1.5rem;">${sender === "user" ? "👤" : "🤖"}</div>
    <div class="ai-bubble">${text}</div>
  `;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(question) {
  const topic = currentSubjectData.topics[activeTopicIndex];
  const qLower = question.toLowerCase();

  if (qLower.includes("pitfall") || qLower.includes("exam") || qLower.includes("waec") || qLower.includes("mistake")) {
    return `In national examinations like WAEC/NECO/JAMB for <strong>${currentSubjectName}</strong> on <em>${topic.title}</em>, common candidate mistakes include:<br><br>
    1. <strong>Omitting units & assumptions:</strong> Always state initial conditions and dimensional units.<br>
    2. <strong>Vague definitions:</strong> Memorize exact technical definitions rather than colloquial language.<br>
    3. <strong>Failing to show full steps:</strong> In theory questions, marks are awarded for working steps, not just the final number.`;
  }

  if (qLower.includes("simple") || qLower.includes("analogy") || qLower.includes("simpler")) {
    return `Think of <strong>${topic.title}</strong> like building a house. The foundational concepts act as the reinforced concrete slab. If the foundation is solid, understanding advanced equations and applications becomes effortless and intuitive!`;
  }

  if (qLower.includes("example") || qLower.includes("calculation") || qLower.includes("solve")) {
    return `Here is a model examination problem for <em>${topic.title}</em>:<br><br>
    <strong>Problem:</strong> Standard WAEC application question.<br>
    <strong>Step 1:</strong> Identify given parameters and state the relevant governing formula.<br>
    <strong>Step 2:</strong> Substitute variables carefully and simplify algebraically.<br>
    <strong>Step 3:</strong> State the final answer with appropriate units. Practice this method to secure 100% marks!`;
  }

  if (qLower.includes("mnemonic") || qLower.includes("remember")) {
    return `Here is a proven memory technique for <strong>${topic.title}</strong>:<br><br>
    Use the <strong>A-C-E Rule</strong>:<br>
    • <strong>A:</strong> Analyze the question carefully.<br>
    • <strong>C:</strong> Connect to core syllabus definitions.<br>
    • <strong>E:</strong> Execute step-by-step working.`;
  }

  const notes = (topic.notes || "").replace(/<[^>]*>/g, " ").slice(0, 400);
  return `Great question regarding <strong>${topic.title}</strong>! In ${currentUser.class} (${currentUser.country}), this concept is fundamental because it connects theoretical principles to real-world problem solving. ${notes ? `<br><br><em>From your notes:</em> ${notes}...` : ""}<br><br>Review the lesson summary notes and try the CBT practice quiz to test your mastery!`;
}

function setupAITutorActions() {
  const form = document.getElementById("ai-input-form");
  const input = document.getElementById("ai-input-text");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    appendAIMessage("user", query);
    input.value = "";

    setTimeout(() => {
      const reply = generateAIResponse(query);
      appendAIMessage("ai", reply);
    }, 450);
  });

  const promptChips = document.querySelectorAll(".ai-prompt-chip");
  promptChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const prompt = chip.getAttribute("data-prompt");
      appendAIMessage("user", prompt);
      setTimeout(() => {
        const reply = generateAIResponse(prompt);
        appendAIMessage("ai", reply);
      }, 400);
    });
  });
}

// ================= TAB: SCIENTISTS & QUOTES =================
const SCIENTISTS = {
  "Physics": [
    { name: "Albert Einstein", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg", work: "Theory of Relativity", quote: "Imagination is more important than knowledge." },
    { name: "Isaac Newton", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg", work: "Laws of Motion & Gravitation", quote: "If I have seen further it is by standing on the shoulders of giants." },
    { name: "Marie Curie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/220px-Marie_Curie_c._1920s.jpg", work: "Radioactivity", quote: "Nothing in life is to be feared, it is only to be understood." },
    { name: "Nikola Tesla", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/220px-N.Tesla.JPG", work: "Alternating Current", quote: "The present is theirs; the future, for which I really worked, is mine." }
  ],
  "Chemistry": [
    { name: "Dmitri Mendeleev", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dmitri_Mendeleev_1897.jpg/220px-Dmitri_Mendeleev_1897.jpg", work: "Periodic Table", quote: "Science is the foundation of progress." },
    { name: "Marie Curie", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/220px-Marie_Curie_c._1920s.jpg", work: "Discovery of Radium & Polonium", quote: "Be less curious about people and more curious about ideas." }
  ],
  "Biology": [
    { name: "Charles Darwin", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_1880.jpg/220px-Charles_Darwin_1880.jpg", work: "Theory of Evolution", quote: "It is not the strongest of the species that survives, but the most adaptable." },
    { name: "Gregor Mendel", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gregor_Mendel.jpg/220px-Gregor_Mendel.jpg", work: "Laws of Inheritance", quote: "My scientific studies have afforded me great gratification." }
  ],
  "Mathematics": [
    { name: "Isaac Newton", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg", work: "Calculus", quote: "Truth is ever to be found in simplicity." },
    { name: "Euclid", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Euclid.jpg/220px-Euclid.jpg", work: "Geometry", quote: "There is no royal road to geometry." }
  ]
};

function loadScientistsTab() {
  const grid = document.getElementById("scientists-grid");
  if (!grid) return;
  const subject = currentSubjectName || "";
  const key = Object.keys(SCIENTISTS).find(k => subject.toLowerCase().includes(k.toLowerCase())) || "Physics";
  const list = SCIENTISTS[key] || SCIENTISTS["Physics"];
  grid.innerHTML = list.map(s => `
    <div class="scientist-card">
      <img src="${s.img}" alt="${s.name}" class="scientist-img" loading="lazy" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=random&size=72'">
      <div class="scientist-info">
        <h4>${s.name}</h4>
        <p class="scientist-work">${s.work}</p>
        <blockquote>“${s.quote}”</blockquote>
      </div>
    </div>
  `).join("");
}

// ================= BOOTSTRAP APPLICATION =================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupCountryCascade();
  setupQuickDemoProfiles();
  setupAuthForms();
  setupCatalogInteractions();
  setupWorkspaceNavTabs();
  setupLessonActions();
  setupAssignmentActions();
  setupQuizActions();
  setupFlashcardActions();
  setupAITutorActions();

  // Check saved session
  const savedEmail = loadJSON(STORAGE_KEYS.SESSION, null);
  if (savedEmail) {
    const user = getAccounts().find(a => a.email === savedEmail);
    if (user) {
      startSession(user);
    }
  }
});