import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

const baseProjects = [
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

// Undangan & kartu ucapan digital: sekarang jadi bagian dari Projects
const invitationProjects = [
  {
    title: "Undangan Klasik Elegan",
    image: "/portofolio 7.png",
    websiteUrl: "https://card-invitation-rose.vercel.app/",
    description:
      "Website undangan pernikahan yang interaktif, mudah dibuka dan memanjakan mata.",
  },
  {
    title: "Kartu Ucapan Ulang Tahun",
    image: "/kartu ultah.png",
    websiteUrl: "https://kartu-ultah-weld.vercel.app/",
    description:
      "Kartu ucapan ulang tahun yang sangat interaktif dan dapat menyentuh hati.",
  },
].map((item) => ({
  ...item,
  githubUrl: "",
  category: "Digital Invitation",
  stack: [],
}));

const projects = [...baseProjects, ...invitationProjects];

// Sertifikat
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
    image: "/sertifikat tkj.jpg",
    title: "Computer and Network Engineering",
    event: "Final Assessment - Satisfactory",
    date: "13 June 2023",
  },
  {
    id: 3,
    image: "/komdigi.jpg",
    title: "Participants event",
    event: "Participants event KOMDIGI",
    date: "16 Agustus 2021",
  },
  {
    id: 4,
    image: "/sc.jpg",
    title: "Steering Committe",
    event: "Islamic Studies Sociology Department",
    date: "21 Mei 2025",
  },
];

// Penghargaan (juara Matematika x2 + Fisika)
// TODO: cek lagi, sertifikat mana yang Matematika dan mana yang Fisika
const awards = [
  {
    id: 1,
    image: "/sertifikat kspi.png",
    title: "Gold Medal Mathematics National",
    event: "Kompetisi Sains Pelajar Se-Indonesia",
  },
  {
    id: 2,
    image: "/sertifikat osan.png",
    title: "Gold Medal Mathematics National",
    event: "Olimpiade Sains Akbar Nasional",
  },
  {
    id: 3,
    image: "/Sertifikat smart.png",
    title: "Gold Medal Physics National",
    event: "Smart Science & Social Challenge",
  },
  {
    id: 4,
    image: "/socio.png",
    title: "Gold Medal Sociology National",
    event: "Olimpiade Sains Akbar Nasional",
  },
];

// Pendidikan & pengalaman (isi `period` kalau mau menampilkan tahun, mis. "2021 - 2024")
const education = [
  {
    org: "UIN Sunan Gunung Djati Bandung",
    title: "Faculty of Social and Political Sciences (FISIP)",
    desc: "Sociology",
    period: "Present",
    tag: "Undergraduate",
  },
  {
    org: "MAN 1 Kota Bandung",
    title: "MIPA & Computer and Network Engineering (TKJ)",
    desc: "",
    period: "",
    tag: "Senior High School",
  },
];

const experience = [
  {
    org: "Kelurahan Kebonwaru",
    title: "Media & IT Intern",
    desc: "Menjadi bagian Media / IT selama magang di Kelurahan Kebonwaru.",
    period: "",
    tag: "Internship",
  },
  {
    org: "Freelance",
    title: "Website Development Services",
    desc: "Menawarkan jasa pembuatan website untuk klien.",
    period: "",
    tag: "Freelance",
  },
  {
    org: "Commercial Projects",
    title: "Commercial Website Projects",
    desc: "Membuat project website untuk 2 orang untuk kepentingan komersial.",
    period: "",
    tag: "Commercial",
  },
];

const PORTFOLIO_TABS = [
  { key: "projects", label: "Projects" },
  { key: "certificates", label: "Certificates" },
  { key: "awards", label: "Awards" },
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
  ["Home", "#welcome"],
  ["About", "#about"],
  ["Portfolio", "#portfolio"],
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
        <a className="brand" href="#welcome" aria-label="Home">
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

function WelcomeIntro() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // Progres scroll hanya selama layar welcome masih terlihat
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.35]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const lineMotion = (delay) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 36 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="welcome-intro" id="welcome" ref={ref}>
      <motion.h1 className="welcome-title" style={{ scale, y, opacity }}>
        <motion.span className="welcome-line" {...lineMotion(0.1)}>
          Welcome
        </motion.span>
        <motion.span className="welcome-line" {...lineMotion(0.3)}>
          To My Portfolio
        </motion.span>
      </motion.h1>
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
            {project.stack?.length > 0 && (
              <div className="pj-stack">
                {project.stack.map((item) => (
                  <span className="pj-tech" key={item}>
                    {TECH_ICONS[item] && <img src={TECH_ICONS[item]} alt="" />}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            )}
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


function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6M10 17h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m8 8-4 4 4 4m8-8 4 4-4 4m-5-10-2 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m8.5 13.5-1.5 7 5-2.8 5 2.8-1.5-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 4h8v5a4 4 0 0 1-8 0V4Zm0 2H4v1a4 4 0 0 0 4 4m8-5h4v1a4 4 0 0 1-4 4M12 13v4m-4 3h8m-6-3h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TAB_ICONS = {
  projects: CodeIcon,
  certificates: BadgeIcon,
  awards: TrophyIcon,
};

/* =====================================================
   ABOUT — "Hi, I'm ..." + Education / Experience + folder
   ===================================================== */

function Timeline({ title, items }) {
  return (
    <div className="tl">
      <h3 className="tl-title">{title}</h3>
      <ol className="tl-list">
        {items.map((item, index) => (
          <li className="tl-item" key={item.title}>
            <span className="tl-node">{index + 1}</span>
            <div className="tl-body">
              <div className="tl-top">
                <span className="tl-org">{item.org}</span>
                {item.period && <span className="tl-chip">{item.period}</span>}
              </div>
              <h4>{item.title}</h4>
              {item.desc && <p>{item.desc}</p>}
              {item.tag && <span className="tl-tag">{item.tag}</span>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FolderCard({ count, label, image, onClick }) {
  return (
    <button
      type="button"
      className="folder"
      onClick={onClick}
      aria-label={`Buka ${label}`}
    >
      <span className="folder-back" aria-hidden="true" />
      <span className="folder-sheet" aria-hidden="true">
        {image && <img src={image} alt="" draggable={false} />}
      </span>
      <span className="folder-front">
        <span className="folder-info">
          <strong>{count}</strong>
          <span>{label}</span>
        </span>
        <span className="folder-go" aria-hidden="true">
          <ArrowIcon />
        </span>
      </span>
    </button>
  );
}

function About({ onOpenPortfolio }) {
  return (
    <section className="ab-section" id="about">
      <div className="container">
        <h2 className="ab-title">About Me</h2>

        <div className="ab-hero">
          <div className="ab-intro">
            <p className="ab-hi">Hi, I'm</p>
            <h3 className="ab-fullname">Muhammad Musfir Azzahrani Zein</h3>
            {/* Taruh file CV kamu di folder public dengan nama cv.pdf */}
            <a className="ab-btn" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <DocIcon />
              View CV
            </a>
          </div>

          <div className="ab-photo">
            <img src="/foto profile.png" alt="Foto Zahran" draggable={false} />
          </div>

          <div className="ab-text">
            <p>
              I am a Sociology student at UIN Sunan Gunung Djati Bandung with an academic
              background in Mathematics and Natural Sciences (MIPA) and Computer and Network
              Engineering (TKJ) from MAN 1 Kota Bandung. I have a strong passion for programming
              and web development, and I enjoy building websites that combine functionality,
              thoughtful design, and user needs.
            </p>
            <a
              className="ab-btn"
              href="#portfolio"
              onClick={() => onOpenPortfolio("projects", false)}
            >
              <CodeIcon />
              View Projects
            </a>
          </div>
        </div>

        <div className="ab-timelines">
          <Timeline title="Education" items={education} />
          <Timeline title="Experience" items={experience} />
        </div>

        <div className="ab-folders">
          <FolderCard
            count={projects.length}
            label="Projects"
            image={projects[0]?.image}
            onClick={() => onOpenPortfolio("projects")}
          />
          <FolderCard
            count={certificates.length}
            label="Certificates"
            image={certificates[0]?.image}
            onClick={() => onOpenPortfolio("certificates")}
          />
          <FolderCard
            count={awards.length}
            label="Awards"
            image={awards[0]?.image}
            onClick={() => onOpenPortfolio("awards")}
          />
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   PORTFOLIO — tab Projects / Certificates / Awards,
   masing-masing berupa baris memanjang yang bisa digeser
   ===================================================== */

function PortfolioTrack({ label, children }) {
  const trackRef = useRef(null);
  const dragRef = useRef({ pending: false, active: false, startX: 0, startScroll: 0, moved: false });
  const [isDragging, setIsDragging] = useState(false);
  const [edge, setEdge] = useState({ start: true, end: false });

  const updateEdge = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    updateEdge();
    const el = trackRef.current;
    window.addEventListener("resize", updateEdge);
    // Gambar yang baru selesai dimuat mengubah lebar baris
    el?.addEventListener("load", updateEdge, true);
    return () => {
      window.removeEventListener("resize", updateEdge);
      el?.removeEventListener("load", updateEdge, true);
    };
  }, [updateEdge]);

  const scrollByStep = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * Math.max(el.clientWidth * 0.8, 280),
      behavior: "smooth",
    });
  };

  // Geser pakai mouse. Sentuhan di HP sudah otomatis lewat scroll bawaan browser.
  // Pointer baru "ditangkap" setelah bergeser beberapa piksel supaya klik biasa tetap jalan.
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = {
      pending: true,
      active: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (e) => {
    const drag = dragRef.current;
    const el = trackRef.current;
    if (!drag.pending || !el) return;
    const dx = e.clientX - drag.startX;
    if (!drag.active) {
      if (Math.abs(dx) < 6) return;
      drag.active = true;
      drag.moved = true;
      setIsDragging(true);
      el.setPointerCapture?.(e.pointerId);
    }
    el.scrollLeft = drag.startScroll - dx;
  };

  const endDrag = (e) => {
    const drag = dragRef.current;
    if (drag.active) {
      trackRef.current?.releasePointerCapture?.(e.pointerId);
      setIsDragging(false);
    }
    drag.pending = false;
    drag.active = false;
  };

  // Setelah menggeser, jangan anggap itu klik pada kartu
  const onClickCapture = (e) => {
    if (dragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.moved = false;
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByStep(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByStep(-1);
    }
  };

  return (
    <>
      <div
        className={`pf-track ${isDragging ? "is-dragging" : ""}`}
        ref={trackRef}
        role="region"
        aria-label={`${label}, geser ke kiri atau kanan`}
        tabIndex={0}
        onScroll={updateEdge}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>

      <div className="pf-controls">
        <button
          type="button"
          className="pf-arrow"
          aria-label="Geser ke kiri"
          disabled={edge.start}
          onClick={() => scrollByStep(-1)}
        >
          <ChevronIcon direction="left" />
        </button>
        <span className="pf-hint">Geser ke kiri atau kanan untuk melihat lainnya</span>
        <button
          type="button"
          className="pf-arrow"
          aria-label="Geser ke kanan"
          disabled={edge.end}
          onClick={() => scrollByStep(1)}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </>
  );
}

function DocItem({ item, onOpen }) {
  return (
    <figure className="cert-item">
      <button
        type="button"
        className="cert-open"
        onClick={() => onOpen(item)}
        aria-label={`Lihat ${item.title} - ${item.event}`}
      >
        <img className="cert-image" src={item.image} alt="" draggable={false} />
        <span className="cert-view">
          <SearchIcon />
          View Certificate
        </span>
      </button>

      <figcaption className="cert-caption">
        <h3>{item.title}</h3>
        <p className="cert-event">{item.event}</p>
        <span className="cert-date">{item.date}</span>
      </figcaption>
    </figure>
  );
}

function DocLightbox({ item, onClose }) {
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
        className="doc-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="pj-close"
          aria-label="Tutup"
          onClick={onClose}
          autoFocus
        >
          <CloseIcon />
        </button>
        <img src={item.image} alt={item.title} />
        <div className="doc-lightbox-info">
          <h3>{item.title}</h3>
          <p>{item.event}</p>
          <span>{item.date}</span>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

function Portfolio({ tab, setTab }) {
  const [activeProject, setActiveProject] = useState(null);
  const [activeDoc, setActiveDoc] = useState(null);
  const reduceMotion = useReducedMotion();

  // Teks besar "PORTFOLIO" membesar & muncul saat di-scroll
  const wordRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wordRef,
    offset: ["start end", "end start"],
  });
  const wordScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [reduceMotion ? 1 : 0.7, 1, reduceMotion ? 1 : 1.25]
  );
  const wordOpacity = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.95], [0, 1, 1, 0]);

  // Tutup popup dengan Esc + kunci scroll halaman saat popup terbuka
  useEffect(() => {
    if (!activeProject && !activeDoc) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setActiveDoc(null);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject, activeDoc]);

  return (
    <section className="pf-section" id="portfolio">
      <div className="pf-bigword" ref={wordRef}>
        <motion.h2 style={{ scale: wordScale, opacity: wordOpacity }}>Portfolio</motion.h2>
      </div>

      <div className="pf-tabs" role="tablist" aria-label="Kategori portfolio">
        {PORTFOLIO_TABS.map(({ key, label }) => {
          const Icon = TAB_ICONS[key];
          const isActive = tab === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`pf-tab ${isActive ? "is-active" : ""}`}
              onClick={() => setTab(key)}
            >
              {isActive && (
                <motion.span
                  layoutId="pf-tab-pill"
                  className="pf-tab-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="pf-tab-label">
                <Icon />
                {label}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={tab}
        role="tabpanel"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <PortfolioTrack label={`Daftar ${tab}`}>
          {tab === "projects" &&
            projects.map((project) => (
              <article className="pj-card" key={project.title}>
                <div className="pj-card-media">
                  {project.image ? (
                    <img src={project.image} alt="" loading="lazy" draggable={false} />
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
              </article>
            ))}

          {tab === "certificates" &&
            certificates.map((item) => (
              <DocItem key={item.id} item={item} onOpen={setActiveDoc} />
            ))}

          {tab === "awards" &&
            awards.map((item) => (
              <DocItem key={item.id} item={item} onOpen={setActiveDoc} />
            ))}
        </PortfolioTrack>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            key="project-modal"
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
        {activeDoc && (
          <DocLightbox
            key="doc-lightbox"
            item={activeDoc}
            onClose={() => setActiveDoc(null)}
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
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "Nuxt.js", icon: "https://cdn.simpleicons.org/nuxt/00DC82" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Laragon", icon: "https://cdn.simpleicons.org/laragon/0E83CD" },
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

function Contact() {
  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/MuhammadMusfir11",
      icon: "https://cdn.simpleicons.org/github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-musfir-847096305?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "https://api.iconify.design/mdi/linkedin.svg?color=%230A66C2",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/zahranmusfir_?xtok=bjdrczZtM2ZvM2p2",
      icon: "https://cdn.simpleicons.org/instagram/E4405F",
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
        <a className="back-top" href="#welcome">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [tab, setTab] = useState("projects");

  // Dipakai tombol "View Projects" dan kartu folder di bagian About
  const openPortfolio = useCallback((key, scroll = true) => {
    setTab(key);
    if (scroll) {
      requestAnimationFrame(() => {
        document
          .getElementById("portfolio")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

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
        <WelcomeIntro />

        <ScrollReveal>
          <About onOpenPortfolio={openPortfolio} />
        </ScrollReveal>

        <ScrollReveal>
          <Portfolio tab={tab} setTab={setTab} />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
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