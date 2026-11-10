import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import {
  GitBranch,
  BriefcaseBusiness,
  MapPin,
  Download,
  ExternalLink,
  Terminal,
  Menu,
  X,
  Globe,
  Monitor,
  ChevronRight,
  Circle,
  Copy,
  Check,
  Layers,
  Cpu,
  Server,
  Code,
  Sparkles,
  Command,
  ArrowUpRight,
  Folder,
  FileText,
  Mail,
  CheckCircle2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// DATA — Core Technologies, Specifications, and Projects
// ---------------------------------------------------------------------------

const PROFILE = {
  name: "Daniel Maina",
  role: "Full-Stack & Systems Developer",
  tagline:
    "Building robust web platforms, telemetry systems, native desktop architectures, and automated CLI workflows.",
  email: "danitechsoftwaresdev@gmail.com",
  github: "https://github.com/danitech887",
  linkedin: "https://linkedin.com/in/danielmaina",
  facebook: "https://www.facebook.com/danitech96",
  location: "Kenya",
};

const ABOUT = `I am a Computer Science student and software engineer driven by building practical, high-impact systems that solve real-world operational problems. My core focus lies in building secure, end-to-end applications across full-stack web, distributed telemetry engines, native desktop architectures, and automated CLI workflows.

Whether architecting comprehensive school management ecosystems, developing asynchronous telemetry and fault localization engines, or configuring containerized backend infrastructure on Linux with Docker and Nginx, I prioritize clean architecture, performant code, and intuitive user experiences.`;

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Multi-Platform Systems",
    desc: "Seamless engineering across Full-Stack Web (FastAPI, Next.js, Django, React), JavaFX (Pure Java), and PyQt5 desktop environments.",
    accent: "var(--violet)",
  },
  {
    icon: Cpu,
    title: "Observability & Benchmarking",
    desc: "Real-time telemetry collection, AST-grounded fault localization, and lightweight CLI concurrency stress-testing with Docker.",
    accent: "var(--green)",
  },
  {
    icon: Code,
    title: "Kenyan CBC Domain Architecture",
    desc: "Deep experience designing modular school ecosystems with RBAC, Kenyan CBC rubric grading, and automated fee reconciliation.",
    accent: "var(--amber)",
  },
  {
    icon: Server,
    title: "Linux & DevOps Workflows",
    desc: "Containerized deployments with Docker, Linux system management (Ubuntu/Debian), Nginx reverse proxying, and GitHub Actions CI/CD.",
    accent: "var(--cyan)",
  },
];

const STACK = [
  {
    category: "languages",
    dir: "languages/",
    label: "Languages",
    accent: "var(--violet)",
    items: [
      "Python 3.11+",
      "TypeScript",
      "JavaScript (ES6+)",
      "SQL",
      "Bash",
    ],
  },
  {
    category: "frameworks",
    dir: "frameworks/",
    label: "Frameworks & Libraries",
    accent: "var(--green)",
    items: [
      "Django",
      "FastAPI",
      "Next.js",
      "React",
      "Django REST Framework",
    ],
  },
  {
    category: "datastores",
    dir: "datastores/",
    label: "Data Stores",
    accent: "var(--amber)",
    items: [
      "PostgreSQL",
      "SQLite",
      "Redis",
      "MySQL",
    ],
  },
  {
    category: "infrastructure",
    dir: "infrastructure/",
    label: "Infrastructure & DevOps",
    accent: "var(--cyan)",
    items: [
      "Docker",
      "Linux (Ubuntu/Debian)",
      "Git",
      "GitHub Actions",
      "Nginx",
      "Vercel",
    ],
  },
  {
    category: "desktop",
    dir: "desktop/",
    label: "Desktop & Tooling",
    accent: "#f472b6",
    items: [
      "JavaFX (Pure Java)",
      "PyQt5 / PySide",
      "Native System APIs",
      "Web Audio API",
      "RESTful Architecture",
    ],
  },
];

const PROJECTS = [
  {
    id: "nexis",
    file: "nexis-engine.project",
    name: "Nexis Engine",
    tagline: "Real-Time Observability & Synthetic User Simulation Engine",
    description:
      "Real-time observability, telemetry collection, and automated synthetic user simulation.",
    specs: `// System Architecture & Spec: Nexis Engine
Primary Stack: FastAPI, Next.js, SQLite
Architecture : Distributed Telemetry Ingestion -> AST Fault Localization -> Autonomous Remediation
Data Layer   : SQLite local operational store & low-latency telemetry buffers
Engine Scope : Real-time observability, telemetry collection, and automated synthetic user simulation
Verification : Pytest sandbox isolation with automated test assertions`,
    editions: [
      {
        id: "web",
        name: "Observability HUD & Fleet Console",
        stack: "FastAPI + Next.js + SQLite",
        type: "web",
        url: "https://nexis-taupe-kappa.vercel.app/",
        githubUrl: "https://github.com/danitech887",
        badge: "Featured System",
        points: [
          "Real-time observability, telemetry collection, and automated synthetic user simulation",
          "Tree-sitter AST syntax parsing for root-cause fault localization across distributed services",
          "Decoupled asynchronous FastAPI backend paired with a high-performance Next.js telemetry console",
          "Autonomous remediation runtime with side-by-side git diff review and sandbox verification",
        ],
      },
    ],
  },
  {
    id: "shulebase",
    file: "shulebase.project",
    name: "ShuleBase",
    tagline: "Modular School Management Platform & CBC Ecosystem",
    description:
      "Modular school management platform with role-based access control, CBC grading, and automated fee reconciliation.",
    specs: `// System Architecture & Spec: ShuleBase
Primary Stack: Django, PostgreSQL, React
Architecture : Modular Multi-Tier (Django REST Monolith + React SPA + Desktop Clients)
Core Modules : Role-Based Access Control (RBAC), CBC Rubric Grading, Automated Fee Reconciliation
Data Layer   : PostgreSQL with normalized schemas & transaction isolation
Security     : JWT-based stateless authentication & granular role permissions`,
    editions: [
      {
        id: "web",
        name: "Web Edition",
        stack: "Django + PostgreSQL + React",
        type: "web",
        url: "https://shulebase.vercel.app/",
        githubUrl: "https://github.com/danitech887",
        badge: "Live Web Portal",
        demoAccount: {
          user: "danitech",
          pass: "danitech",
        },
        points: [
          "Modular school management platform with granular role-based access control (Admin, Teacher, Student, Parent)",
          "Kenyan Competency-Based Curriculum (CBC) rubric grading and automated term assessments",
          "Automated fee reconciliation, digital invoice generation, and student financial ledgers",
        ],
      },
      {
        id: "javafx",
        name: "JavaFX Desktop Edition",
        stack: "Pure Java",
        type: "desktop",
        githubUrl: "https://github.com/danitech887",
        badge: "Offline-First Native GUI",
        points: [
          "Offline-capable, standalone desktop client without FXML dependencies for maximum performance and explicit UI control",
          "Local/remote database synchronization with relational data modeling",
        ],
      },
      {
        id: "pyqt5",
        name: "PyQt5 Desktop Edition",
        stack: "Python + PyQt5",
        type: "desktop",
        githubUrl: "https://github.com/danitech887",
        badge: "Lightweight Desktop Client",
        points: [
          "Rapid, robust desktop variant with rich data tables and asynchronous background tasks",
          "Automated PDF report generation with a minimal system memory footprint",
        ],
      },
    ],
  },
  {
    id: "apiloadsim",
    file: "api-load-simulator.project",
    name: "API Load Simulator",
    tagline: "Lightweight CLI REST Benchmarking & Concurrency Stress-Tester",
    description:
      "Lightweight CLI stress-tester for benchmarking REST endpoints and measuring latency under concurrency.",
    specs: `// System Architecture & Spec: API Load Simulator
Primary Stack: Python, Docker, Bash
Runtime      : Python 3.11+ Asynchronous Engine (asyncio / aiohttp)
Distribution : Docker Containerized & Standalone Bash CLI
Capabilities : Concurrency stress-testing, latency quantiles (p50, p95, p99), error rates, RPS throughput
Architecture : Non-blocking event loop workers with zero-overhead execution`,
    editions: [
      {
        id: "cli",
        name: "CLI & Docker Runner",
        stack: "Python + Docker + Bash",
        type: "cli",
        githubUrl: "https://github.com/danitech887",
        badge: "CLI Stress-Tester",
        points: [
          "Lightweight CLI stress-tester for benchmarking REST endpoints and measuring latency under concurrency",
          "Precise latency percentile distributions (p50, p95, p99), throughput calculations, and error categorization",
          "Containerized Docker execution with one-command spin-up and minimal environment footprint",
        ],
      },
    ],
  },
  {
    id: "apex",
    file: "apex-logistics.project",
    name: "Apex Logistics & Supply Chain",
    tagline: "Enterprise Supply Chain, Fleet Telemetry & Multi-Tenant ERP",
    description:
      "An enterprise-grade logistics, telemetry fleet tracking, statutory payroll engine, double-entry financial general ledger, and warehouse inventory platform built as a modular monolith in Django REST with multi-schema PostgreSQL isolation and a responsive React SPA / Driver PWA.",
    specs: `// System Architecture & Spec: Apex Logistics ERP
Architecture: Modular Monolith (Django REST) + React 18 SPA & Driver PWA
Core Domains : Fleet Ops & Telemetry, HR & Statutory Payroll, Double-Entry Ledger, Warehouse CRM
Data Layer   : PostgreSQL 16 (Multi-Schema: auth_core, hr_payroll, finance, fleet_ops, warehouse_crm)
Security     : Multi-Tenant RBAC, JWT Interceptor Middleware, Balanced Double-Entry Validation`,
    editions: [
      {
        id: "web",
        name: "Enterprise ERP Portal",
        stack: "React 18 + Django 5 REST + PostgreSQL 16",
        type: "web",
        url: "https://apex-logistics-beryl.vercel.app/",
        githubUrl: "https://github.com/danitech887",
        badge: "Live Enterprise Platform",
        demoAccount: {
          user: "admin@apexlogistics.co.ke",
          pass: "password123",
        },
        points: [
          "Modular departmental portals: Super Admin, HR & Payroll, Fleet Ops & Telemetry, Finance & Ledger, and Warehouse CRM",
          "Kenyan statutory payroll engine with automated calculations for PAYE, SHA, NSSF, and Housing Levy with digital payslips",
          "Real-time trip dispatch lifecycle, vehicle telemetry, fuel auditing, and Driver Self-Service PWA (ESS)",
          "PostgreSQL multi-schema namespace isolation with strict RBAC and double-entry transaction balancing",
        ],
      },
    ],
  },
  {
    id: "datapilot",
    file: "datapilot.project",
    name: "DataPilot",
    tagline: "AI-Assisted Data Entry & Workflow Automation Assistant",
    description:
      "A hybrid productivity web application combining a React frontend with a Django backend, designed for intelligent data extraction, cleaning, and structured data entry pipelines.",
    specs: `// System Architecture & Spec: DataPilot
Pipeline : Async file parsing -> validation regex/AI extractor -> structured export
Tech     : React, Django REST, Pandas/Python worker queue
Security : Local storage encryption & sanitized input ingestion`,
    editions: [
      {
        id: "web",
        name: "Web Application",
        stack: "React + Django + Automation Workers",
        type: "web",
        url: "https://data-pilot-two.vercel.app/",
        githubUrl: "https://github.com/danitech887",
        badge: "Live Web App",
        points: [
          "Automated document ingestion and tabular data normalisation pipeline",
          "Validation interface with instant mismatch and error highlighting",
          "One-click batch export to standard CSV, Excel, and database tables",
        ],
      },
    ],
  },
];

const NAV = [
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

const TERMINAL_COMMANDS = {
  whoami: PROFILE.tagline,
  bio: "danitech (Daniel Maina) — Full-stack engineer & systems developer building high-concurrency backends, telemetry platforms, and robust web/desktop architectures.",
  skills:
    "Languages: Python 3.11+, TypeScript, JavaScript, SQL, Bash | Frameworks: Django, FastAPI, Next.js, React | Data Stores: PostgreSQL, SQLite, Redis | Infra: Docker, Linux (Ubuntu/Debian), Git, GitHub Actions, Nginx.",
  projects:
    "Featured: Nexis Engine (FastAPI/Next.js/SQLite), ShuleBase (Django/PostgreSQL/React), API Load Simulator (Python/Docker/Bash).",
  specs:
    "System Specs: Python 3.11+ | Django | FastAPI | Next.js | React | PostgreSQL | SQLite | Redis | Docker | Linux | Nginx",
  quickstart:
    "git clone https://github.com/danitech887/<repo-name>.git && cd <repo-name> # Setup: python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt # Docker: docker compose up -d --build",
  status: "Status: Online | Open to engineering opportunities & technical collaborations.",
  contact: `Email: ${PROFILE.email} | GitHub: ${PROFILE.github} | LinkedIn: ${PROFILE.linkedin} | Facebook: ${PROFILE.facebook}`,
};

function FacebookIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// INTERACTIVE SPOTLIGHT CARD WRAPPER
// ---------------------------------------------------------------------------

function SpotlightCard({ children, className = "", style = {}, onClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tw-spotlight ${className}`}
      onMouseMove={handleMouseMove}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function WindowChrome({ title, badge, children, className = "", style = {} }) {
  return (
    <SpotlightCard className={`tw-window ${className}`} style={style}>
      <div className="tw-titlebar">
        <div className="tw-titlebar-left">
          <span className="tw-dot" style={{ background: "#F0A84E" }} />
          <span className="tw-dot" style={{ background: "#8B7FF0" }} />
          <span className="tw-dot" style={{ background: "#5FD9A4" }} />
          <span className="tw-titletext">
            <Folder size={12} color="var(--violet)" />
            {title}
          </span>
        </div>
        {badge && <span className="tw-title-badge">{badge}</span>}
      </div>
      <div className="tw-body">{children}</div>
    </SpotlightCard>
  );
}

function useTypewriter(text, speed = 20, startDelay = 400) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);
  return out;
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`tw-reveal ${visible ? "tw-reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ index, label, title }) {
  return (
    <div className="tw-sectionhead">
      <div className="tw-eyebrow">
        <Sparkles size={12} />
        {index}
      </div>
      <h2 className="tw-h2">{title}</h2>
      <span className="tw-dir-label">{label}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// MAIN APP COMPONENT
// ---------------------------------------------------------------------------

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("about");
  const [toastMessage, setToastMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);
  const [selectedStackCategory, setSelectedStackCategory] = useState("all");

  // Interactive Project Tabs state
  const [activeProjectEditions, setActiveProjectEditions] = useState({
    nexis: "web",
    shulebase: "web",
    apiloadsim: "cli",
    apex: "web",
    datapilot: "web",
  });
  const [openSpecs, setOpenSpecs] = useState({});

  // Hero Terminal Sandbox state
  const [activeCommand, setActiveCommand] = useState("whoami");
  const defaultTyped = useTypewriter(PROFILE.tagline, 18, 500);

  // Trigger Toast Notification
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    const timer = setTimeout(() => {
      setToastMessage("");
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  // Handle CV Download
  const handleDownloadCV = () => {
    setMenuOpen(false);
    const a = document.createElement("a");
    a.href = "/Daniel_Maina_CV.pdf";
    a.download = "Daniel_Maina_CV.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("Downloading Daniel_Maina_CV.pdf...");
  };

  // Copy helper with animated feedback
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    showToast(`Copied ${key} to clipboard!`);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  // Scroll to section with smooth behavior
  const scrollTo = (id) => {
    setMenuOpen(false);
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Observe active scroll section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "stack", "projects", "contact"];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtered stack groups
  const filteredStack =
    selectedStackCategory === "all"
      ? STACK
      : STACK.filter((s) => s.category === selectedStackCategory);

  // Toggle Project Spec Drawer
  const toggleSpec = (projectId) => {
    setOpenSpecs((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <div className="tw-root">
      {/* AMBIENT BACKGROUND & MESH */}
      <div className="tw-ambient-bg" aria-hidden="true">
        <div className="tw-grid-overlay" />
        <div className="tw-logo-watermark-hero" />
        <div className="tw-logo-watermark-bottom" />
        <div className="tw-orb tw-orb-1" />
        <div className="tw-orb tw-orb-2" />
        <div className="tw-orb tw-orb-3" />
      </div>

      {/* FLOATING TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="tw-toast" role="status" aria-live="polite">
          <CheckCircle2 size={16} color="var(--green)" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* NAVIGATION BAR */}
      <nav className="tw-nav" aria-label="Main Navigation">
        <a
          href="#"
          className="tw-logo tw-mono"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src="/logo.jpeg" alt="danitech logo" className="tw-logo-icon" />
          danitech<span style={{ color: "var(--text-dim)" }}>:~$</span>
        </a>

        <div className="tw-navlinks-desktop">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`tw-navlink tw-mono ${activeNav === n.id ? "active" : ""}`}
              onClick={() => scrollTo(n.id)}
            >
              {n.label}
            </button>
          ))}
          <button className="tw-cv-btn" onClick={handleDownloadCV}>
            <Download size={14} /> Download CV
          </button>
        </div>

        <button
          className="tw-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="tw-mobile-menu">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`tw-mono ${activeNav === n.id ? "active" : ""}`}
              onClick={() => scrollTo(n.id)}
            >
              <ChevronRight size={14} color="var(--green)" />
              {n.label}
            </button>
          ))}
          <button className="tw-cv-btn" style={{ marginTop: 8 }} onClick={handleDownloadCV}>
            <Download size={14} /> Download CV
          </button>
        </div>
      )}

      {/* HERO SECTION */}
      <header className="tw-shell tw-hero">
        <Reveal>
          <div className="tw-hero-kicker">
            <span className="tw-pulse" />
            <span>available for opportunities · {PROFILE.location}</span>
          </div>

          <h1>
            {PROFILE.name}
            <br />
            <span className="tw-hero-role">{PROFILE.role}</span>
          </h1>

          {/* INTERACTIVE HERO TERMINAL */}
          <WindowChrome
            title="~/danitech — zsh (Interactive Sandbox)"
            badge="live terminal"
            className="tw-hero-window"
          >
            <div className="tw-terminal-content">
              <div className="tw-prompt-line">
                <span className="tw-prompt-usr">danitech</span>
                <span style={{ color: "var(--text-dim)" }}>:</span>
                <span className="tw-prompt-dir">~</span>
                <span style={{ color: "var(--amber)" }}>$</span>
                <span>{activeCommand}</span>
                {activeCommand === "whoami" && <span className="tw-cursor" />}
              </div>

              <div className="tw-terminal-output">
                {activeCommand === "whoami" ? (
                  defaultTyped
                ) : (
                  TERMINAL_COMMANDS[activeCommand] ||
                  "Command not found. Try one of the suggested commands below."
                )}
              </div>

              <div className="tw-terminal-chips-label">
                <Command size={12} color="var(--amber)" /> Run interactive command:
              </div>
              <div className="tw-terminal-chips">
                {Object.keys(TERMINAL_COMMANDS).map((cmd) => (
                  <button
                    key={cmd}
                    className={`tw-chip-btn ${activeCommand === cmd ? "active" : ""}`}
                    onClick={() => setActiveCommand(cmd)}
                  >
                    $ {cmd}
                  </button>
                ))}
              </div>
            </div>
          </WindowChrome>

          <div className="tw-hero-actions">
            <button className="tw-btn-primary" onClick={handleDownloadCV}>
              <Download size={16} /> Download CV
            </button>
            <button className="tw-btn-ghost" onClick={() => scrollTo("projects")}>
              View Featured Projects <ChevronRight size={16} />
            </button>
          </div>
        </Reveal>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="tw-shell tw-section">
        <Reveal>
          <SectionHeading index="01" label="README.md" title="About & Architecture Focus" />
        </Reveal>

        <div className="tw-about-grid">
          {/* Main Bio Card */}
          <Reveal delay={60}>
            <WindowChrome title="developer_bio.md" className="tw-bio-card">
              <div className="tw-about-paragraphs">
                {ABOUT.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </WindowChrome>
          </Reveal>

          {/* Highlights Grid */}
          <div className="tw-highlights-grid">
            {HIGHLIGHTS.map((item, i) => {
              const IconComp = item.icon;
              return (
                <Reveal key={item.title} delay={120 + i * 60}>
                  <SpotlightCard
                    className="tw-highlight-card"
                    style={{ "--card-accent": item.accent }}
                  >
                    <div className="tw-highlight-head">
                      <div className="tw-highlight-icon">
                        <IconComp size={17} />
                      </div>
                      <h4 className="tw-highlight-title">{item.title}</h4>
                    </div>
                    <p className="tw-highlight-desc">{item.desc}</p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* STACK SECTION */}
      <section id="stack" className="tw-shell tw-section">
        <Reveal>
          <SectionHeading index="02" label="requirements.txt" title="Core Technologies & Tooling" />
        </Reveal>

        {/* Stack Category Filter */}
        <Reveal delay={60}>
          <div className="tw-stack-filter-row">
            <button
              className={`tw-filter-btn ${selectedStackCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedStackCategory("all")}
            >
              All Tooling
            </button>
            {STACK.map((group) => (
              <button
                key={group.category}
                className={`tw-filter-btn ${selectedStackCategory === group.category ? "active" : ""}`}
                onClick={() => setSelectedStackCategory(group.category)}
              >
                {group.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Stack Grid */}
        <div className="tw-stack-grid">
          {filteredStack.map((group, i) => (
            <Reveal key={group.dir} delay={80 + i * 50}>
              <SpotlightCard className="tw-stack-card">
                <div className="tw-stack-card-head">
                  <span className="tw-stack-dir" style={{ color: group.accent }}>
                    <Folder size={14} />
                    {group.dir}
                  </span>
                  <span className="tw-stack-count">{group.items.length} tools</span>
                </div>
                <div className="tw-pill-row">
                  {group.items.map((item) => (
                    <span
                      className="tw-pill"
                      key={item}
                      style={{ "--pill-color": group.accent }}
                    >
                      <Circle size={6} fill={group.accent} color={group.accent} />
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="tw-shell tw-section">
        <Reveal>
          <SectionHeading index="03" label="~/projects" title="Featured Systems & Projects" />
        </Reveal>

        <div className="tw-projects-container">
          {PROJECTS.map((project, i) => {
            const activeEditionId = activeProjectEditions[project.id] || project.editions[0].id;
            const currentEdition =
              project.editions.find((e) => e.id === activeEditionId) || project.editions[0];
            const isSpecOpen = !!openSpecs[project.id];

            return (
              <Reveal key={project.id} delay={i * 90}>
                <WindowChrome
                  title={project.file}
                  badge={`v${i + 1}.0 · Active Arch`}
                  className="tw-project-card"
                >
                  <div className="tw-project-header">
                    <div className="tw-project-title-row">
                      <h3 className="tw-display tw-project-title">
                        <FileText size={20} color="var(--violet)" />
                        {project.name}
                      </h3>
                    </div>
                    <p className="tw-project-tagline">// {project.tagline}</p>
                    <p className="tw-project-desc">{project.description}</p>
                  </div>

                  {/* EDITION SWITCHER TABS */}
                  {project.editions.length > 1 && (
                    <div className="tw-edition-tabs">
                      {project.editions.map((ed) => (
                        <button
                          key={ed.id}
                          className={`tw-edition-tab ${activeEditionId === ed.id ? "active" : ""}`}
                          onClick={() =>
                            setActiveProjectEditions((prev) => ({
                              ...prev,
                              [project.id]: ed.id,
                            }))
                          }
                        >
                          {ed.type === "web" ? (
                            <Globe size={14} />
                          ) : ed.type === "cli" ? (
                            <Terminal size={14} />
                          ) : (
                            <Monitor size={14} />
                          )}
                          {ed.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* ACTIVE EDITION CARD DETAIL */}
                  <div className="tw-edition-detail">
                    <div className="tw-edition-meta-row">
                      <div className="tw-edition-meta-left">
                        <div className="tw-edition-name">
                          {currentEdition.type === "web" ? (
                            <Globe size={16} color="var(--green)" />
                          ) : currentEdition.type === "cli" ? (
                            <Terminal size={16} color="var(--amber)" />
                          ) : (
                            <Monitor size={16} color="var(--cyan)" />
                          )}
                          {currentEdition.name}
                        </div>
                        <span className="tw-edition-stack-badge">{currentEdition.stack}</span>
                      </div>
                      {currentEdition.badge && (
                        <span className="tw-desktop-badge">{currentEdition.badge}</span>
                      )}
                    </div>

                    {currentEdition.points.length > 0 && (
                      <ul className="tw-points-list">
                        {currentEdition.points.map((pt, pidx) => (
                          <li className="tw-point-item" key={pidx}>
                            <span className="tw-point-bullet">›</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {currentEdition.demoAccount && (
                      <div className="tw-demo-credentials">
                        <span className="tw-demo-cred-label">
                          <Sparkles size={12} color="var(--amber)" /> Demo Access:
                        </span>
                        <span className="tw-demo-cred-code">
                          username: <strong>{currentEdition.demoAccount.user}</strong> · password:{" "}
                          <strong>{currentEdition.demoAccount.pass}</strong>
                        </span>
                        <button
                          className={`tw-copy-btn ${copiedKey === `${project.id}-demo` ? "copied" : ""}`}
                          onClick={() =>
                            handleCopy(
                              `${currentEdition.demoAccount.user} / ${currentEdition.demoAccount.pass}`,
                              `${project.id}-demo`
                            )
                          }
                          title="Copy Demo Credentials"
                        >
                          {copiedKey === `${project.id}-demo` ? <Check size={12} /> : <Copy size={12} />}
                          {copiedKey === `${project.id}-demo` ? "Copied" : "Copy Login"}
                        </button>
                      </div>
                    )}

                    <div className="tw-project-action-row">
                      <button
                        className="tw-spec-toggle-btn"
                        onClick={() => toggleSpec(project.id)}
                      >
                        <Code size={13} />
                        {isSpecOpen ? "Hide System Architecture" : "View Architecture & Tech Spec"}
                      </button>

                      <div className="tw-project-action-links">
                        {currentEdition.githubUrl && (
                          <a
                            className="tw-source-btn"
                            href={currentEdition.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GitBranch size={13} /> Source Code
                          </a>
                        )}

                        {currentEdition.type === "web" && currentEdition.url ? (
                          <a
                            className="tw-open-btn"
                            href={currentEdition.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Launch Web Portal <ExternalLink size={13} />
                          </a>
                        ) : currentEdition.type === "cli" ? (
                          <span className="tw-desktop-badge">
                            <Terminal size={13} color="var(--amber)" /> CLI Docker Runner
                          </span>
                        ) : currentEdition.type === "web" ? (
                          <span className="tw-desktop-badge">
                            <Circle size={7} fill="var(--green)" color="var(--green)" /> Demo link coming soon
                          </span>
                        ) : (
                          <span className="tw-desktop-badge">
                            <Monitor size={13} /> Native Desktop Build
                          </span>
                        )}
                      </div>
                    </div>

                    {/* EXPANDABLE SPEC DRAWER */}
                    {isSpecOpen && (
                      <div className="tw-spec-drawer">
                        <div className="tw-spec-title">
                          <Terminal size={13} /> System Architecture Breakdown:
                        </div>
                        <pre className="tw-spec-code">{project.specs}</pre>
                      </div>
                    )}
                  </div>
                </WindowChrome>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="tw-shell tw-section">
        <Reveal>
          <SectionHeading index="04" label=".env.local" title="Connect & Collaborate" />
        </Reveal>

        <div className="tw-contact-grid">
          {/* Interactive .env Config Card */}
          <Reveal delay={60}>
            <WindowChrome title=".env — System Configuration" className="tw-env-card">
              <div className="tw-config-line-row">
                <a
                  className="tw-config-left"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitBranch size={16} color="var(--violet)" />
                  <span className="key">GITHUB=</span>
                  <span className="val">{PROFILE.github.replace("https://", "")}</span>
                </a>
                <button
                  className={`tw-copy-btn ${copiedKey === "GitHub" ? "copied" : ""}`}
                  onClick={() => handleCopy(PROFILE.github, "GitHub")}
                  title="Copy GitHub URL"
                >
                  {copiedKey === "GitHub" ? <Check size={12} /> : <Copy size={12} />}
                  {copiedKey === "GitHub" ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="tw-config-line-row">
                <a
                  className="tw-config-left"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BriefcaseBusiness size={16} color="var(--violet)" />
                  <span className="key">LINKEDIN=</span>
                  <span className="val">{PROFILE.linkedin.replace("https://", "")}</span>
                </a>
                <button
                  className={`tw-copy-btn ${copiedKey === "LinkedIn" ? "copied" : ""}`}
                  onClick={() => handleCopy(PROFILE.linkedin, "LinkedIn")}
                  title="Copy LinkedIn URL"
                >
                  {copiedKey === "LinkedIn" ? <Check size={12} /> : <Copy size={12} />}
                  {copiedKey === "LinkedIn" ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="tw-config-line-row">
                <a className="tw-config-left" href={`mailto:${PROFILE.email}`}>
                  <Mail size={16} color="var(--violet)" />
                  <span className="key">EMAIL=</span>
                  <span className="val">{PROFILE.email}</span>
                </a>
                <button
                  className={`tw-copy-btn ${copiedKey === "Email" ? "copied" : ""}`}
                  onClick={() => handleCopy(PROFILE.email, "Email")}
                  title="Copy Email address"
                >
                  {copiedKey === "Email" ? <Check size={12} /> : <Copy size={12} />}
                  {copiedKey === "Email" ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="tw-config-line-row">
                <a
                  className="tw-config-left"
                  href={PROFILE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon size={16} color="var(--violet)" />
                  <span className="key">FACEBOOK=</span>
                  <span className="val">
                    {PROFILE.facebook.replace("https://www.", "").replace("https://", "")}
                  </span>
                </a>
                <button
                  className={`tw-copy-btn ${copiedKey === "Facebook" ? "copied" : ""}`}
                  onClick={() => handleCopy(PROFILE.facebook, "Facebook")}
                  title="Copy Facebook URL"
                >
                  {copiedKey === "Facebook" ? <Check size={12} /> : <Copy size={12} />}
                  {copiedKey === "Facebook" ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="tw-config-line-row">
                <div className="tw-config-left">
                  <MapPin size={16} color="var(--green)" />
                  <span className="key">LOCATION=</span>
                  <span className="val">{PROFILE.location}</span>
                </div>
                <button
                  className={`tw-copy-btn ${copiedKey === "Location" ? "copied" : ""}`}
                  onClick={() => handleCopy(PROFILE.location, "Location")}
                  title="Copy Location"
                >
                  {copiedKey === "Location" ? <Check size={12} /> : <Copy size={12} />}
                  {copiedKey === "Location" ? "Copied" : "Copy"}
                </button>
              </div>
            </WindowChrome>
          </Reveal>

          {/* Quick Connect Action Card */}
          <Reveal delay={120}>
            <SpotlightCard className="tw-window tw-body tw-connect-card" style={{ height: "100%" }}>
              <div>
                <h4 className="tw-display" style={{ fontSize: "1.2rem", margin: "0 0 10px" }}>
                  Let&apos;s Build Something Robust.
                </h4>
                <p className="tw-connect-text">
                  Whether you are looking to architect full-stack management portals, build performant desktop applications, or discuss system workflows, my inbox is always open.
                </p>
              </div>

              <div className="tw-connect-actions">
                <a
                  className="tw-btn-primary"
                  href={`mailto:${PROFILE.email}`}
                  style={{ textDecoration: "none", justifyContent: "center" }}
                >
                  <Mail size={16} /> Send Direct Email
                </a>

                <a
                  className="tw-connect-link-card"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="tw-connect-link-left">
                    <GitBranch size={16} color="var(--violet)" />
                    <span>Explore GitHub Repositories</span>
                  </div>
                  <ArrowUpRight size={16} color="var(--text-dim)" />
                </a>

                <a
                  className="tw-connect-link-card"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="tw-connect-link-left">
                    <BriefcaseBusiness size={16} color="var(--amber)" />
                    <span>Connect on LinkedIn</span>
                  </div>
                  <ArrowUpRight size={16} color="var(--text-dim)" />
                </a>

                <a
                  className="tw-connect-link-card"
                  href={PROFILE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="tw-connect-link-left">
                    <FacebookIcon size={16} color="#38bdf8" />
                    <span>Connect on Facebook</span>
                  </div>
                  <ArrowUpRight size={16} color="var(--text-dim)" />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tw-footer tw-mono">
        <Circle size={8} fill="var(--green)" color="var(--green)" style={{ display: "inline", marginRight: 8 }} />
        {PROFILE.name} · Full-Stack &amp; Systems Developer · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
