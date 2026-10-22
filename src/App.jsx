import { useState } from "react";
import { motion } from "motion/react";
import { image } from "motion/react-client";

const projects = [
  {
    title: "Al-Ahwan Profile",
    image: "/2.png",
    websiteUrl: "https://tahsin-al-ahwan.netlify.app",
    category: "Company Profile",
    description:
      "Website informatif dengan pengalaman visual yang terinspirasi dari keindahan alam.",
    stack: ["HTML", "CSS", "JavaScript"],
    style: "forest",
    label: "NATURE / EXPLORE",
  },
  {
    title: "Business Landing Page",
    image: "/porto kuliner.png",
    websiteUrl: "https://masakan-khas-indonesia.netlify.app",
    category: "Web Design & Development",
    description:
      "Konsep landing page modern untuk membantu bisnis menampilkan layanan secara profesional.",
    stack: ["React", "CSS", "JavaScript"],
    style: "business",
    label: "BUILD YOUR PRESENCE",
  },
  {
    title: "Personal Portfolio",
    image: "/1.png",
    websiteUrl: "https://portofolio-muhammad-musfir.netlify.app",
    category: "Personal Project",
    description:
      "Website portofolio untuk menampilkan profil, kemampuan, dan karya pengembangan web.",
    stack: ["React", "Tailwind CSS", "Vite"],
    style: "cosmic",
    label: "DESIGNED TO STAND OUT",
  },
  {
    title: " Wedding Invitation",
    image: "/portofolio 7.png",
    websiteUrl: "https://project-wedding-invitation.netlify.app",
    category: "Personal Project",
    description:
      "Website undangan pernikahan yang interaktif dan memanjakan mata.",
    stack: ["HTML", "CSS", "JavaScript"],
    style: "cosmic",
    label: "DESIGNED TO STAND OUT",
  },
];

const skills = [
  { name: "HTML", group: "FRONTEND" },
  { name: "CSS", group: "FRONTEND" },
  { name: "JavaScript", group: "FRONTEND" },
  { name: "React", group: "FRAMEWORK" },
  { name: "Tailwind CSS", group: "STYLING" },
  { name: "Git", group: "TOOLS" },
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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Achviements", "#certificates"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Zahran home">
          <span>MUHAMMAD MUSFIR AZZAHRANI ZEIN<span className="brand-dot"></span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
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

function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading
            title={
              <>
                <span className="gradient-text">My Projects</span>
              </>
            }
            description="I made projects from company profile to portofolio website"
          />
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              {project.image ? (
                <div className="project-image-preview">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    className="project-preview-image"
                  />
                </div>
              ) : (
                <ProjectPreview project={project} />
              )}

              <div className="project-info">
                <div className="project-title-row">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>

                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((item) => {
                    const techIcons = {
                      HTML: "https://cdn.simpleicons.org/html5/E34F26",
                      CSS: "https://cdn.simpleicons.org/css/1572B6",
                      JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
                      React: "https://cdn.simpleicons.org/react/61DAFB",
                      "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
                      Motion: "https://cdn.simpleicons.org/framer/0055FF",
                      Git: "https://cdn.simpleicons.org/git/F05032",
                      Vite: "https://cdn.simpleicons.org/vite/646CFF",
                    };

                    return (
                      <span className="project-tech" key={item}>
                        {techIcons[item] && (
                          <img
                            src={techIcons[item]}
                            alt=""
                            className="project-tech-icon"
                          />
                        )}
                        <span>{item}</span>
                      </span>
                    );
                  })}
                </div>

                {project.websiteUrl ? (
                  <a
                    className="project-website-link"
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Website</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <div className="project-website-link project-website-disabled">
                    <span>Website link not added</span>
                  </div>
                )}

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: "HTML5", color: "#E34F26", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", color: "#1572B6", icon: "https://cdn.simpleicons.org/css/1572B6" },
    { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "React", color: "#61DAFB", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Git", color: "#F05032", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Python", color: "#3776AB", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "PHP", color: "#777BB4", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "MySQL", color: "#4479A1", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Laravel", color: "#FF2D20", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  ];

  return (
    <section className="skills-section section-padding" id="skills">
      <div className="container skills-grid">
        <div>
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

        <div className="toolkit-grid">
          {skills.map((skill) => (
            <div className="toolkit-card" key={skill.name}>
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="toolkit-icon"
              />
              <span>{skill.name}</span>
            </div>
          ))}
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
          href="mailto:muhammadmusfiraz11.com"
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

      function ScrollReveal({children, delay = 0}) {
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