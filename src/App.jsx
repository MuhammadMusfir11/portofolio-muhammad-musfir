import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    title: " E-Commerce Website",
    image: "/ecommerce.png",
    websiteUrl: "https://web-ecommerce-puce.vercel.app/",
    githubUrl: "https://github.com/MuhammadMusfir11/web-ecommerce.git",
    category: "E-Commerce Website",
    description:
      "Website e-commerce yang dapat membantu anda lebih mudah dalam berjualan dan dapat dikenal oleh lebih banyak orang.",
    stack: ["React", "Tailwind CSS", "Vite", "MySQL"],
    style: "cosmic",
    label: "DESIGNED TO STAND OUT",
  },
  {
    title: " Clinic Website",
    image: "/porto klinik.png",
    websiteUrl: "https://web-klinik-zahran.vercel.app/",
    githubUrl: "https://github.com/MuhammadMusfir11/web-klinik-zahran.git",
    category: "Clinic Website",
    description:
      "Website klinik yang membantu anda dalam melihat layanan klinik dan memudahkan dalam membuat janji dengan dokter.",
    stack: ["React", "Tailwind CSS", "Vite", "MySQL"],
    style: "cosmic",
    label: "DESIGNED TO STAND OUT",
  },
  {
    title: "Services Website",
    image: "/porto jasa.png",
    websiteUrl: "https://web-jasa-elektronik.vercel.app",
    githubUrl: "https://github.com/MuhammadMusfir11/web-jasa-elektronik.git",
    category: "Services Website",
    description:
      "Website yang akan membantu anda dalam memanage layanan jasa yang ditawarkan dan pemasukan keuangan dari jasa.",
    stack: ["React", "Tailwind CSS", "Vite", "MySQL"],
    style: "cosmic",
    label: "DESIGNED TO STAND OUT",
  },
  {
    title: "Task Group Website",
    image: "/porto pariwisata.png",
    websiteUrl: "https://destinasi-sos-pariwisata.vercel.app",
    githubUrl: "https://github.com/MuhammadMusfir11/tugas-destinasi.git",
    category: "Tasks Website",
    description:
      "Website yang akan membantu anda dalam membuat tugas dan mempermudah dalam presentasi.",
    stack: ["React", "Tailwind CSS", "Vite", "MySQL"],
    style: "cosmic",
    label: "DESIGNED TO STAND OUT",
  },
  {
    title: "Company Profile",
    image: "/2.png",
    websiteUrl: "https://web-kursus-xi.vercel.app/",
    githubUrl: "https://github.com/MuhammadMusfir11/web-kursus.git",
    category: "Landing Page",
    description:
      "Website informatif yang berisi mengenai jasa dan kursus yang bertujuan untuk memudahkan murid atau siswa.",
    stack: ["HTML", "CSS", "JavaScript"],
    style: "forest",
    label: "NATURE / EXPLORE",
  },
  {
    title: "Business Landing Page",
    image: "/porto kuliner.png",
    websiteUrl: "https://web-contoh-umkm-zahran.vercel.app/",
    githubUrl: "https://github.com/MuhammadMusfir11/web-contoh-umkm-zahran.git",
    category: "Web Design & Development",
    description:
      "Konsep landing page modern untuk membantu bisnis menampilkan layanan secara profesional.",
    stack: ["React", "CSS", "JavaScript"],
    style: "business",
    label: "BUILD YOUR PRESENCE",
  },
];

const skills = [
  { name: "HTML", group: "FRONTEND" },
  { name: "CSS", group: "FRONTEND" },
  { name: "JavaScript", group: "FRONTEND" },
  { name: "React", group: "FRAMEWORK" },
  { name: "Tailwind CSS", group: "STYLING" },
  { name: "Git", group: "TOOLS" },
  { name: "MySQL", group: "DATABASE" },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const NAV_LINKS = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Achievements", "#certificates"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({
    x: 0,
    w: 0,
    visible: false,
    instant: false,
  });
  const linksRef = useRef(null);
  const itemRefs = useRef({});

  // Scroll-spy: cari bagian halaman yang sedang dilihat + deteksi sudah di-scroll
  useEffect(() => {
    const ids = NAV_LINKS.map(([, href]) => href.slice(1));
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 40);

      const line = window.innerHeight * 0.35;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];

      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Posisi "pil" penanda menu yang aktif
  const measure = useCallback(() => {
    const el = itemRefs.current[active];
    const box = linksRef.current;

    if (!el || !box) {
      setIndicator((p) => (p.visible ? { ...p, visible: false } : p));
      return;
    }

    setIndicator((p) => ({
      x: el.offsetLeft,
      w: el.offsetWidth,
      visible: true,
      instant: !p.visible,
    }));

    // Di HP menu bisa digeser: bawa menu aktif ke tengah
    if (box.scrollWidth > box.clientWidth + 2) {
      box.scrollTo({
        left: el.offsetLeft - (box.clientWidth - el.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  useEffect(() => {
    measure();
  }, [measure, scrolled]);

  useEffect(() => {
    if (indicator.instant) {
      const id = requestAnimationFrame(() =>
        setIndicator((p) => ({ ...p, instant: false }))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [indicator.instant]);

  // Ukur ulang saat ukuran navbar berubah (misal waktu mengecil)
  useEffect(() => {
    const box = linksRef.current;
    if (!box || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(box);
    Object.values(itemRefs.current).forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [measure]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Home">
          <span>
            MUHAMMAD MUSFIR AZZAHRANI ZEIN
            <span className="brand-dot"></span>
          </span>
        </a>

        <div className="nav-links" ref={linksRef}>
          <span
            className="nav-indicator"
            aria-hidden="true"
            style={{
              width: indicator.w,
              transform: `translateX(${indicator.x}px)`,
              opacity: indicator.visible ? 1 : 0,
              transition: indicator.instant ? "none" : undefined,
            }}
          />

          {NAV_LINKS.map(([label, href]) => {
            const id = href.slice(1);
            return (
              <a
                key={href}
                href={href}
                ref={(el) => {
                  itemRefs.current[id] = el;
                }}
                className={active === id ? "is-active" : ""}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            );
          })}

          <a className="nav-cta" href="#contact">
            Let's talk <ArrowIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-orb" aria-hidden="true" />
      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="eyebrow">
            <span className="status-dot" />
            WEB DEVELOPER · PORTFOLIO
          </div>

          <h1>
            <span className="gradient-text">Bringing Creative Concepts to Digital Life</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Muhammad Musfir Azzahrani Zein</strong>, A Web Developer specializing in crafting seamless
            user interfaces and robust web solutions. Leveraging modern frameworks to deliver clean architecture,
            optimal performance, and intuitive digital experiences from concept to production
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN BANDUNG CITY, WEST JAVA, INDONESIA</span>
            <span className="meta-line" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />


          <div className="portrait-position">
            <motion.div
              className="portrait-motion"
              whileHover={{
                rotate: [0, 1, -1, 1, 0],
                transition: {
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="portrait-glow" />

              <img
                className="portrait-image"
                src="/foto profile.png"
                alt="Foto Zahran"
              />

              <div className="portrait-bottom-fade" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#about">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}



function About() {
  const navigationCards = [
    {
      title: "PROJECTS",
      href: "#projects",
    },
    {
      title: "TECHNOLOGIES",
      href: "#skills",
    },
    {
      title: "CERTIFICATES",
      href: "#certificates",
    },
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-heading">
        </div>

        {/* ABOUT ME */}
        <article className="about-card about-profile-card">
          <div className="about-profile-content">

            <h3>
              <span className="about-accent"></span>
              {" "}About Me
              <span className="about-accent">
              </span>
            </h3>

            <p>
              I am a Sociology student at UIN Sunan Gunung Djati Bandung with an academic background in Mathematics and Natural Sciences (MIPA) and Computer and Network Engineering (TKJ) from MAN 1 Kota Bandung.
              I have a strong passion for programming and web development.
              I enjoy building websites, exploring new technologies, and creating digital experiences that combine functionality, thoughtful design,
              and user needs.
            </p>
          </div>
        </article>

        {/* THREE NAVIGATION CARDS */}
        <div className="about-info-grid">
          {navigationCards.map((item) => (
            <a
              className="about-card about-info-card"
              href={item.href}
              key={item.title}
              aria-label={`Go to ${item.title} section`}
            >
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview preview-${project.style}`}>
      <div className="preview-window">
        <div className="preview-toolbar">
          <span />
          <span />
          <span />
          <div className="preview-address">localhost / preview</div>
        </div>

        <div className="preview-content">
          <span className="preview-label">{project.label}</span>
          <div className="preview-art">
            <div className="preview-ring" />
            <div className="preview-sphere" />
            <div className="preview-arc" />
          </div>
          <div className="preview-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <span className="preview-index">{project.number}</span>
    </div>
  );
}

const TECH_ICONS = {
  HTML: "https://cdn.simpleicons.org/html5/E34F26",
  CSS: "https://cdn.simpleicons.org/css/1572B6",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  React: "https://cdn.simpleicons.org/react/61DAFB",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Motion: "https://cdn.simpleicons.org/framer/0055FF",
  Git: "https://cdn.simpleicons.org/git/F05032",
  Vite: "https://cdn.simpleicons.org/vite/646CFF",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  Python: "https://cdn.simpleicons.org/python/3776AB",
  Laravel: "https://cdn.simpleicons.org/laravel/FF2D20",
};

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProjectModal({ project, onClose }) {
  return createPortal(
    <motion.div
      className="pj-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="pj-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pj-modal-title"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="pj-close"
          aria-label="Tutup detail project"
          onClick={onClose}
          autoFocus
        >
          <CloseIcon />
        </button>

        {/* Foto contoh website */}
        <div className="pj-modal-media">
          {project.image ? (
            <img src={project.image} alt={`Tampilan website ${project.title.trim()}`} />
          ) : (
            <ProjectPreview project={project} />
          )}
        </div>

        <div className="pj-modal-body">
          <div className="pj-modal-text">
            <span className="pj-modal-category">{project.category}</span>
            <h3 id="pj-modal-title">{project.title.trim()}</h3>

            {/* Deskripsi */}
            <p className="pj-modal-desc">{project.description}</p>

            {/* Teknologi yang dipakai */}
            <div className="pj-stack">
              {project.stack.map((item) => (
                <span className="pj-tech" key={item}>
                  {TECH_ICONS[item] && <img src={TECH_ICONS[item]} alt="" />}
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Link website online + repository GitHub */}
          <div className="pj-actions">
            {project.websiteUrl ? (
              <a
                className="pj-btn pj-btn-primary"
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon />
                <span>Lihat Website</span>
              </a>
            ) : (
              <span className="pj-btn pj-btn-disabled">
                <GlobeIcon />
                <span>Website belum tersedia</span>
              </span>
            )}

            {project.githubUrl ? (
              <a
                className="pj-btn"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <span>Repository GitHub</span>
              </a>
            ) : (
              <span className="pj-btn pj-btn-disabled">
                <GitHubIcon />
                <span>Repository belum tersedia</span>
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

/* =====================================================
   WEDDING INVITATION — carousel 3D melingkar
   Ganti isi daftar di bawah dengan undangan buatan Anda.
   Gambar taruh di folder public/undangan/
   ===================================================== */

const weddingInvitations = [
  {
    title: "Undangan Klasik Elegan",
    image: "/portofolio 7.png",
    websiteUrl: "https://card-invitation-rose.vercel.app/",
    description:
      "Website undangan pernikahan yang interaktif, mudah dibuka dan memanjakan mata.",
  },
  {
    title: "Undangan Rustic Garden",
    image: "/undangan/undangan-2.png",
    websiteUrl: "",
    description:
      "Undangan bertema taman dengan sentuhan floral yang hangat, lengkap dengan peta lokasi dan RSVP.",
  },
  {
    title: "Undangan Modern Minimalis",
    image: "/undangan/undangan-3.png",
    websiteUrl: "",
    description:
      "Tampilan bersih dan modern dengan tipografi tegas, cocok untuk pasangan yang menyukai gaya simpel.",
  },
  {
    title: "Undangan Adat Tradisional",
    image: "/undangan/undangan-4.png",
    websiteUrl: "",
    description:
      "Undangan dengan ornamen adat yang kental, dilengkapi musik latar dan susunan acara.",
  },
  {
    title: "Undangan Royal Gold",
    image: "/undangan/undangan-5.png",
    websiteUrl: "",
    description:
      "Nuansa mewah dengan aksen emas dan transisi halus untuk kesan acara yang megah.",
  },
  {
    title: "Undangan Pastel Floral",
    image: "/undangan/undangan-6.png",
    websiteUrl: "",
    description:
      "Warna pastel lembut dengan ilustrasi bunga, ringan dibuka di HP dan nyaman dibaca.",
  },
];

function getWeddingCardSize() {
  if (typeof window === "undefined") return 220;
  const w = window.innerWidth;
  if (w < 480) return 142;
  if (w < 768) return 176;
  return 220;
}

function ChevronIcon({ direction = "left" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WeddingModal({ item, onClose }) {
  return createPortal(
    <motion.div
      className="pj-backdrop wc-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="wc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wc-modal-title"
        style={{ transformPerspective: 1100 }}
        initial={{ opacity: 0, scale: 0.55, rotateY: -28, y: 30 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0.7, rotateY: 20, y: 20 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="pj-close"
          aria-label="Tutup detail undangan"
          onClick={onClose}
          autoFocus
        >
          <CloseIcon />
        </button>

        <div className="wc-modal-media">
          <img src={item.image} alt={`Tampilan ${item.title}`} />
        </div>

        <div className="wc-modal-body">
          <span className="pj-modal-category">Wedding Invitation</span>
          <h3 id="wc-modal-title">{item.title}</h3>
          <p className="pj-modal-desc">{item.description}</p>

          {item.websiteUrl ? (
            <a
              className="pj-btn pj-btn-primary"
              href={item.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeIcon />
              <span>Buka Undangan</span>
            </a>
          ) : (
            <span className="pj-btn pj-btn-disabled">
              <GlobeIcon />
              <span>Link belum tersedia</span>
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

function WeddingCarousel() {
  const count = weddingInvitations.length;
  const step = 360 / count;

  const [cardW, setCardW] = useState(getWeddingCardSize);
  const [activeItem, setActiveItem] = useState(null);

  const stageRef = useRef(null);
  const ringRef = useRef(null);
  const cardRefs = useRef([]);

  // Semua state animasi disimpan di ref supaya tidak re-render tiap frame
  const motionState = useRef({
    angle: 0, // sudut putar cincin (derajat)
    vel: 0, // kecepatan saat ini (derajat/detik)
    target: null, // sudut tujuan saat pakai tombol panah / fokus keyboard
    dragging: false,
    hover: false,
    paused: false,
    visible: true,
    moved: 0, // jarak geser, untuk membedakan klik vs drag
  });

  const cardH = Math.round(cardW * 1.4);
  const radius =
    Math.round(cardW / 2 / Math.tan(Math.PI / Math.max(count, 4))) +
    (cardW < 200 ? 44 : 72);

  // Ukuran kartu menyesuaikan lebar layar
  useEffect(() => {
    const onResize = () => setCardW(getWeddingCardSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Animasi hanya jalan saat carousel terlihat di layar (hemat baterai)
  useEffect(() => {
    const el = stageRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        motionState.current.visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Popup terbuka: carousel berhenti, Esc menutup, scroll halaman dikunci
  useEffect(() => {
    motionState.current.paused = activeItem !== null;
    if (!activeItem) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem]);

  // Loop animasi: putar otomatis kanan -> kiri + efek kedalaman 3D
  useEffect(() => {
    const s = motionState.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const AUTO_SPEED = reduceMotion ? 0 : -7; // minus = bergerak ke kiri
    let raf;
    let last = performance.now();

    const render = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translateZ(${-radius}px) rotateY(${s.angle}deg)`;
      }
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        let phi = (i * step + s.angle) % 360;
        if (phi > 180) phi -= 360;
        if (phi < -180) phi += 360;
        const facing = Math.cos((phi * Math.PI) / 180);
        // Kartu di depan terang, kartu di samping meredup, yang membelakangi hilang
        el.style.opacity = facing > 0 ? String(0.3 + 0.7 * facing) : "0";
        el.style.pointerEvents = facing > 0.2 ? "auto" : "none";
      });
    };

    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (s.visible) {
        if (!s.dragging) {
          if (s.target !== null) {
            const diff = s.target - s.angle;
            if (Math.abs(diff) < 0.05) {
              s.angle = s.target;
              s.target = null;
            } else {
              s.angle += diff * Math.min(1, dt * 6);
            }
            s.vel = 0;
          } else {
            const goal = s.hover || s.paused ? 0 : AUTO_SPEED;
            s.vel += (goal - s.vel) * Math.min(1, dt * 3);
            s.angle += s.vel * dt;
          }
        }
        render();
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [radius, step]);

  // Geser dengan mouse / jari untuk memutar manual (ada efek meluncur)
  const handlePointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const s = motionState.current;
    s.dragging = true;
    s.target = null;
    s.moved = 0;
    s.vel = 0;
    stageRef.current?.classList.add("is-dragging");

    let lastX = e.clientX;
    let lastT = performance.now();

    const onMove = (ev) => {
      const now = performance.now();
      const dx = ev.clientX - lastX;
      const dAngle = dx * 0.32;
      s.moved += Math.abs(dx);
      s.angle += dAngle;
      const instant = (dAngle / Math.max(1, now - lastT)) * 1000;
      s.vel = Math.max(-420, Math.min(420, s.vel * 0.6 + instant * 0.4));
      lastX = ev.clientX;
      lastT = now;
    };

    const onUp = () => {
      s.dragging = false;
      if (performance.now() - lastT > 80) s.vel = 0;
      stageRef.current?.classList.remove("is-dragging");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  // Tombol panah: putar tepat satu kartu
  const rotateBy = (direction) => {
    const s = motionState.current;
    const base = s.target !== null ? s.target : Math.round(s.angle / step) * step;
    s.target = base + direction * step;
    s.vel = 0;
  };

  // Navigasi keyboard (Tab): kartu yang difokuskan diputar ke depan
  const handleFocus = (e, index) => {
    if (!e.currentTarget.matches(":focus-visible")) return;
    const s = motionState.current;
    const wanted = -index * step;
    s.target = wanted + 360 * Math.round((s.angle - wanted) / 360);
  };

  // Klik biasa membuka popup, tapi bukan kalau barusan di-drag
  const handleOpen = (item) => {
    const s = motionState.current;
    const moved = s.moved;
    s.moved = 0;
    if (moved > 6) return;
    setActiveItem(item);
  };

  return (
    <div className="wc-carousel">
      <div
        ref={stageRef}
        className="wc-stage"
        style={{ "--wc-w": `${cardW}px`, "--wc-h": `${cardH}px` }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galeri undangan pernikahan"
        onPointerDown={handlePointerDown}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") motionState.current.hover = true;
        }}
        onPointerLeave={() => {
          motionState.current.hover = false;
        }}
      >
        <div ref={ringRef} className="wc-ring">
          {weddingInvitations.map((item, i) => (
            <button
              key={item.title}
              ref={(el) => (cardRefs.current[i] = el)}
              type="button"
              className="wc-card"
              style={{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }}
              aria-label={`Lihat detail ${item.title}`}
              onClick={() => handleOpen(item)}
              onFocus={(e) => handleFocus(e, i)}
            >
              <span className="wc-card-inner">
                <span className="wc-card-img">
                  <span className="wc-card-fallback">{item.title}</span>
                  <img
                    src={item.image}
                    alt=""
                    draggable={false}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </span>
                <span className="wc-card-title">{item.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="wc-controls">
        <button
          type="button"
          className="wc-arrow"
          aria-label="Undangan sebelumnya"
          onClick={() => rotateBy(1)}
        >
          <ChevronIcon direction="left" />
        </button>
        <span className="wc-hint">Geser atau klik kartu untuk melihat detail</span>
        <button
          type="button"
          className="wc-arrow"
          aria-label="Undangan berikutnya"
          onClick={() => rotateBy(-1)}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <AnimatePresence>
        {activeItem && (
          <WeddingModal
            key="wedding-modal"
            item={activeItem}
            onClose={() => setActiveItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  // Tutup dengan tombol Esc + kunci scroll halaman saat popup terbuka
  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading
            title={<span className="gradient-text">My Projects</span>}
            description="I made projects from company profile to portofolio website"
          />
        </div>

        {/* Carousel 3D undangan pernikahan, tepat di atas grid project */}
        <div className="wc-block">
          <div className="wc-head">
            <span className="pj-card-category">Wedding Invitation</span>
            <h3>Koleksi Undangan dan Ucapan Digital</h3>
            <p>
              Beberapa tema kartu undangan dan ucapan online yang pernah saya buat.
            </p>
          </div>
          <WeddingCarousel />
        </div>

        <div className="pj-grid">
          {projects.map((project, index) => (
            <motion.article
              className="pj-card"
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            >
              <div className="pj-card-media">
                {project.image ? (
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <ProjectPreview project={project} />
                )}
              </div>

              <div className="pj-card-overlay">
                <span className="pj-card-category">{project.category}</span>
                <h3 className="pj-card-title">{project.title.trim()}</h3>
                <span className="pj-card-hint">
                  <SearchIcon />
                  Klik untuk lihat detail &amp; deskripsi
                </span>
              </div>

              {/* Tombol transparan menutupi seluruh kartu */}
              <button
                type="button"
                className="pj-card-trigger"
                aria-label={`Lihat detail project ${project.title.trim()}`}
                onClick={() => setActiveProject(project)}
              />
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            key="project-modal"
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  ];

  return (
    <section className="skills-section section-padding" id="skills">
      <div className="container">
        <div className="sk-heading">
          <SectionHeading
            eyebrow="TOOLS OF THE TRADE"
            title={
              <>
                My current
                <br />
                <span className="muted-heading">toolkit</span>
              </>
            }
            description="Technologies I use in my learning and development journey"
          />
        </div>

        <div className="sk-marquee-card">
          <p className="sk-marquee-title">TECHNOLOGIES I WORK WITH</p>

          <div className="sk-marquee" role="list" aria-label="Daftar teknologi">
            <div className="sk-track">
              {/* Daftar ditulis 2x supaya putarannya mulus tanpa jeda */}
              {[0, 1].map((copy) => (
                <div className="sk-set" key={copy} aria-hidden={copy === 1}>
                  {skills.map((skill) => (
                    <div
                      className="sk-item"
                      key={`${copy}-${skill.name}`}
                      role={copy === 0 ? "listitem" : undefined}
                      title={skill.name}
                    >
                      <img
                        src={skill.icon}
                        alt={copy === 0 ? skill.name : ""}
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      image: "/sertifikat excel.png",
      title: "Microsoft Office Specialist - Excel",
      event: "Microsoft Office Specialist Certification",
      date: "07 october - 06 December 2024",
    },
    {
      id: 2,
      image: "/sertifikat kspi.png",
      title: "Certificate of Achievement",
      event: "Kompetisi Sains Pelajar Se-Indonesia",
      date: "28 July 2024",
    },
    {
      id: 3,
      image: "/sertifikat osan.png",
      title: "Certificate of Achievement",
      event: "Olimpiade Sains Akbar Nasional",
      date: "11 August 2024",
    },
    {
      id: 4,
      image: "/Sertifikat smart.png",
      title: "Certificate of Achievement",
      event: "Smart Science & Social Challenge",
      date: "5 - 7 April 2024",
    },
    {
      id: 5,
      image: "/sertifikat tkj.jpg",
      title: "Computer and Network Engineering",
      event: "Final Assessment - Satisfactory",
      date: "13 June 2023",
      orientation: "portrait",
    },
  ];

  return (
    <section
      id="certificates"
      className="certificates-page">
      <div className="certificates-container">
        <header className="certificates-heading">
          <p className="certificates-eyebrow">
            ACHIEVEMENTS & RECOGNITION
          </p>

          <h1>
            Certificates<span></span>
          </h1>
        </header>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.id}
            >
              <div
                className="certificate-image-wrap"
                style={{
                  "--certificate-image": `url("${certificate.image}")`,
                }}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />
              </div>

              <div className="certificate-content">
                <h2>{certificate.title}</h2>

                <p className="certificate-event">
                  {certificate.event}
                </p>

                <span className="certificate-date">
                  {certificate.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/zahranmusfir_?xtok=bjdrczZtM2ZvM2p2",
      icon: "https://cdn.simpleicons.org/instagram/E4405F",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-musfir-847096305?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "https://api.iconify.design/mdi/linkedin.svg?color=%230A66C2",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@zahraaanaja?_r=1&_t=ZS-9AbJeXXozY4",
      icon: "https://cdn.simpleicons.org/tiktok/FFFFFF",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@muhammadmusfir98?si=2TSI3HMBdTEXlOGr",
      icon: "https://cdn.simpleicons.org/youtube/FF0033",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/19m8TmG8LH/",
      icon: "https://cdn.simpleicons.org/facebook/0866FF",
    },
  ];

  const message = "Halo Zahran, saya tertarik berdiskusi soal project";
  const whatsappUrl = `https://wa.me/6285971817873?text=${encodeURIComponent(message)}`;
  return (
    <section
      className="contact-section section-padding"
      id="contact"
    >
      <div className="contact-glow" aria-hidden="true" />

      <div className="container contact-inner">
        <span className="eyebrow">
          HAVE A PROJECT IN MIND?
        </span>

        <h2>
          Let's create
          <br />
          something <span className="gradient-text">meaningful.</span>
        </h2>

        <p>
          Have an idea, a project, or an opportunity?
          Let's start a conversation.
        </p>

        <a
          className="button button-primary"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Say hello <ArrowIcon />
        </a>

        <div className="social-links-grid">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              className="social-link-card"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
            >
              <img
                src={social.icon}
                alt=""
                className="social-link-icon"
              />

              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>DESIGNED & BUILT WITH INTENTION.</span>
        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="portfolio-app">
      <div className="cosmic-background" aria-hidden="true">
        {Array.from({ length: 42 }, (_, index) => {
          const star = {
            left: (index * 37.7) % 100,
            top: (index * 61.3) % 100,
            duration: 8 + (index % 7) * 1.8,
            delay: -((index * 1.7) % 18),
            drift: ((index % 7) - 3) * 18,
            size: index % 6 === 0 ? 2 : 1,
          };

          return (
            <span
              key={index}
              className={`cosmic-star ${index % 6 === 0 ? "cosmic-star-bright" : ""
                }`}
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                "--star-duration": `${star.duration}s`,
                "--star-delay": `${star.delay}s`,
                "--star-drift": `${star.drift}px`,
              }}
            />
          );
        })}

        <div className="cosmic-background" aria-hidden="true">
          <span className="cosmic-meteor cosmic-meteor-one" />
          <span className="cosmic-meteor cosmic-meteor-two" />
          <span className="cosmic-meteor cosmic-meteor-three" />
          <span className="cosmic-meteor cosmic-meteor-four" />
          <span className="cosmic-meteor cosmic-meteor-five" />
          <span className="cosmic-meteor cosmic-meteor-six" />
          <span className="cosmic-meteor cosmic-meteor-seven" />
        </div>
      </div>
      <Navbar />

      <main>
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <ScrollReveal>
          <CertificatesPage />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}