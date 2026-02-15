import { useState, useEffect, useRef } from 'react'

/* ============================================================
   DATA
   ============================================================ */

const NAV_LINKS = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
]

const EXPERIENCE = [
    {
        role: 'Data Analyst',
        company: 'Unisoft Technologies',
        duration: 'June 2025 – Present',
        location: 'Nagpur, India',
        current: true,
        bullets: [
            'Performing data analysis on large-scale datasets to extract actionable business insights.',
            'Building dashboards and automated reports for stakeholders using Python and SQL.',
            'Collaborating with cross-functional teams to streamline data-driven decision-making.',
        ],
    },
    {
        role: 'Machine Learning Intern',
        company: 'HARLogic',
        duration: 'Dec 2024 – May 2025',
        location: 'Remote',
        current: false,
        bullets: [
            'Developed and fine-tuned machine learning models for real-world business problems.',
            'Built data preprocessing pipelines and feature engineering workflows.',
            'Communicated model performance results and recommendations to team leads.',
        ],
    },
    {
        role: 'Machine Learning Intern',
        company: '1stop.ai',
        duration: 'July 2024 – Aug 2024',
        location: 'Remote',
        current: false,
        bullets: [
            'Worked on ML model development and evaluation for AI-powered solutions.',
            'Gained hands-on experience with Python, scikit-learn, and deep learning frameworks.',
            'Contributed to data analysis, model training, and deployment workflows.',
        ],
    },
]

const PROJECTS = [
    {
        name: 'EmoGuard',
        year: '2024',
        tags: ['DeepFace', 'Flutter', 'Firebase', 'AI'],
        description:
            'AI-powered mental health detection system using facial emotion recognition. Combines deep learning with a cross-platform mobile UI to provide real-time emotional wellness insights.',
        icon: 'psychology',
    },
    {
        name: 'Oral Healthcare Detection',
        year: '2023',
        tags: ['Python', 'OpenCV', 'scikit-learn', 'ML'],
        description:
            'Machine learning system for early-stage oral cancer detection using image analysis. Leverages computer vision and classification models to assist medical professionals.',
        icon: 'health_and_safety',
    },
    {
        name: 'Smart Claim Management',
        year: '2022',
        tags: ['Python', 'ML', 'Regression'],
        description:
            'Fraud detection system for insurance claims using regression and anomaly detection algorithms. Automates claim validation to reduce manual review time.',
        icon: 'verified_user',
    },
]

const SKILLS = [
    {
        category: 'Languages',
        icon: 'code',
        items: ['Python', 'Java', 'C', 'HTML', 'CSS', 'SQL', 'JavaScript'],
    },
    {
        category: 'Developer Tools',
        icon: 'build',
        items: ['VS Code', 'IntelliJ IDEA', 'Jupyter Notebook', 'Google Colab'],
    },
    {
        category: 'Technologies & Frameworks',
        icon: 'hub',
        items: ['GitHub', 'Git', 'CNN', 'Figma'],
    },
    {
        category: 'Coursework',
        icon: 'school',
        items: ['DSA', 'Machine Learning', 'DBMS', 'Artificial Intelligence', 'OOP'],
    },
]

const CERTIFICATIONS = [
    { name: 'Python', provider: 'Python', cls: 'python', abbr: 'PY' },
    {
        name: 'Application of AI Predictive Maintenance',
        provider: 'NVIDIA',
        cls: 'nvidia',
        abbr: 'NV',
    },
    {
        name: 'Building Transformer-Based NLP Applications',
        provider: 'NVIDIA',
        cls: 'nvidia',
        abbr: 'NV',
    },
    {
        name: 'Fundamentals of Accelerated Computing with CUDA Python',
        provider: 'NVIDIA',
        cls: 'nvidia',
        abbr: 'NV',
    },
    {
        name: 'Fundamentals of Deep Learning',
        provider: 'NVIDIA',
        cls: 'nvidia',
        abbr: 'NV',
    },
    {
        name: 'Introduction to Generative AI',
        provider: 'Microsoft',
        cls: 'microsoft',
        abbr: 'MS',
    },
    { name: 'Automation 360', provider: 'Automation Anywhere', cls: 'automation', abbr: 'AA' },
]

/* ============================================================
   HOOKS
   ============================================================ */

function useScrollReveal() {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible')
                        observer.unobserve(e.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )
        const items = el.querySelectorAll('.reveal')
        items.forEach((item) => observer.observe(item))
        return () => items.forEach((item) => observer.unobserve(item))
    }, [])
    return ref
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function Icon({ name, className = '' }) {
    return <span className={`material-icons-outlined ${className}`}>{name}</span>
}

/* ---------- NAVBAR ---------- */
function Navbar({ darkMode, toggleDark }) {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40)
            // detect active section
            const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
            let current = ''
            for (const sec of sections) {
                if (sec.getBoundingClientRect().top <= 120) current = sec.id
            }
            setActiveSection(current)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (id) => {
        setMobileOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    R<span>.</span>Mahant
                </a>
                <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={activeSection === link.id ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); handleNav(link.id) }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle dark mode">
                    <Icon name={darkMode ? 'light_mode' : 'dark_mode'} />
                </button>
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Open menu"
                >
                    <Icon name={mobileOpen ? 'close' : 'menu'} />
                </button>
            </div>
            <div
                className={`mobile-overlay ${mobileOpen ? 'visible' : ''}`}
                onClick={() => setMobileOpen(false)}
            />
        </nav>
    )
}

/* ---------- HERO ---------- */
function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <div className="hero-badge reveal">
                    <span className="dot" /> Open to opportunities
                </div>
                <h1 className="display-large reveal reveal-delay-1">
                    Resham Mahant
                </h1>
                <p className="hero-subtitle reveal reveal-delay-2">
                    AI &amp; Machine Learning Engineer
                </p>
                <p className="hero-location reveal reveal-delay-2">
                    <Icon name="location_on" /> Nagpur, Maharashtra, India
                </p>
                <div className="hero-actions reveal reveal-delay-3">
                    <a href="#projects" className="btn btn-filled">
                        <Icon name="rocket_launch" /> View Projects
                    </a>
                    <a href="#contact" className="btn btn-outlined">
                        <Icon name="mail" /> Get In Touch
                    </a>
                </div>
            </div>
        </section>
    )
}

/* ---------- ABOUT ---------- */
function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="headline-large">About Me</h2>
                    <div className="section-divider" />
                </div>
                <div className="about-grid">
                    <div className="about-avatar reveal">
                        <img src="/myprofile.JPG" alt="Resham Mahant" />
                    </div>
                    <div className="about-info">
                        <h3 className="title-large reveal">
                            Building Intelligent Solutions with AI&nbsp;&amp;&nbsp;ML
                        </h3>
                        <p className="body-large reveal reveal-delay-1">
                            I'm an AI &amp; Machine Learning Engineer with a passion for developing intelligent
                            systems that solve real-world problems. Currently pursuing my B.Tech in Artificial
                            Intelligence, I combine strong foundations in data science, deep learning, and
                            software engineering to create impactful applications — from healthcare detection
                            systems to emotion-aware AI products.
                        </p>
                        <div className="about-highlights reveal reveal-delay-2">
                            <div className="highlight-item">
                                <Icon name="work" />
                                <span>3 Internships</span>
                            </div>
                            <div className="highlight-item">
                                <Icon name="folder" />
                                <span>3+ Projects</span>
                            </div>
                            <div className="highlight-item">
                                <Icon name="verified" />
                                <span>7 Certifications</span>
                            </div>
                            <div className="highlight-item">
                                <Icon name="emoji_events" />
                                <span>NVIDIA Certified</span>
                            </div>
                        </div>
                        <div className="social-links reveal reveal-delay-3">
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="mailto:reshu.mahant.2103@gmail.com" className="social-link" aria-label="Email">
                                <Icon name="mail" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ---------- EDUCATION ---------- */
function Education() {
    return (
        <section id="education" style={{ background: 'var(--md-surface-variant)' }}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="headline-large">Education</h2>
                    <div className="section-divider" />
                </div>
                <div className="education-card card card-elevated reveal">
                    <div className="card-header">
                        <h3 className="title-large">Bachelor of Technology in Artificial Intelligence</h3>
                        <span className="duration-badge">
                            <Icon name="calendar_today" /> 2021 – 2025
                        </span>
                    </div>
                    <p className="institution">G.H. Raisoni Institute of Engineering and Technology</p>
                    <div className="details">
                        <span className="detail-item">
                            <Icon name="grade" /> CGPA: 6.50
                        </span>
                        <span className="detail-item">
                            <Icon name="location_on" /> Nagpur, India
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="headline-large">Experience</h2>
                    <div className="section-divider" />
                    <p className="body-large">My professional journey in AI & data science</p>
                </div>
                <div className="timeline">
                    {EXPERIENCE.map((exp, i) => (
                        <div className="timeline-item reveal" key={i}>
                            <div className="timeline-dot" />
                            <div className="timeline-card card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', flexWrap: 'wrap', marginBottom: 'var(--space-xxs)' }}>
                                    <h3 className="title-medium role">{exp.role}</h3>
                                    {exp.current && <span className="current-badge">Current</span>}
                                </div>
                                <p className="company">{exp.company}</p>
                                <div className="meta">
                                    <span><Icon name="calendar_today" /> {exp.duration}</span>
                                    <span><Icon name="location_on" /> {exp.location}</span>
                                </div>
                                <ul>
                                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ---------- PROJECTS ---------- */
function Projects() {
    return (
        <section id="projects" style={{ background: 'var(--md-surface-variant)' }}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="headline-large">Projects</h2>
                    <div className="section-divider" />
                    <p className="body-large">AI-powered solutions I've built</p>
                </div>
                <div className="projects-grid">
                    {PROJECTS.map((proj, i) => (
                        <div className={`project-card card reveal reveal-delay-${i + 1}`} key={i}>
                            <div className="project-icon">
                                <Icon name={proj.icon} />
                            </div>
                            <span className="project-year">{proj.year}</span>
                            <h3 className="title-large">{proj.name}</h3>
                            <p>{proj.description}</p>
                            <div className="chip-group">
                                {proj.tags.map((tag) => (
                                    <span className="chip" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ---------- SKILLS ---------- */
function SkillsSection() {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="headline-large">Skills</h2>
                    <div className="section-divider" />
                </div>
                <div className="skills-grid">
                    {SKILLS.map((cat, i) => (
                        <div className={`skill-category reveal reveal-delay-${i + 1}`} key={i}>
                            <div className="category-icon">
                                <Icon name={cat.icon} />
                            </div>
                            <h3>{cat.category}</h3>
                            <div className="chip-group">
                                {cat.items.map((item) => (
                                    <span className="chip" key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ---------- CERTIFICATIONS ---------- */
function Certifications() {
    return (
        <section id="certifications" style={{ background: 'var(--md-surface-variant)' }}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="headline-large">Certifications</h2>
                    <div className="section-divider" />
                </div>
                <div className="certs-grid">
                    {CERTIFICATIONS.map((cert, i) => (
                        <div className={`cert-card reveal reveal-delay-${Math.min(i + 1, 4)}`} key={i}>
                            <div className={`cert-icon ${cert.cls}`}>{cert.abbr}</div>
                            <div className="cert-info">
                                <h4>{cert.name}</h4>
                                <p>{cert.provider}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ---------- CONTACT ---------- */
function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="headline-large">Get In Touch</h2>
                    <div className="section-divider" />
                </div>
                <div className="contact-content">
                    <p className="body-large reveal">
                        I'm always open to discussing new opportunities, collaborations, or just chatting about
                        AI and machine learning. Feel free to reach out!
                    </p>
                    <div className="contact-cards reveal reveal-delay-1">
                        <a href="mailto:reshu.mahant.2103@gmail.com" className="contact-card">
                            <Icon name="mail" />
                            <div>
                                <span className="contact-label">Email</span>
                                <span className="contact-value">reshu.mahant.2103@gmail.com</span>
                            </div>
                        </a>
                        <a href="tel:+919766365640" className="contact-card">
                            <Icon name="phone" />
                            <div>
                                <span className="contact-label">Phone</span>
                                <span className="contact-value">+91-9766365640</span>
                            </div>
                        </a>
                    </div>
                    <div className="contact-social reveal reveal-delay-2">
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ---------- FOOTER ---------- */
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="google-dots">
                    <span /><span /><span /><span />
                </div>
                <p>© {new Date().getFullYear()} Resham Mahant. Built with React &amp; Material Design 3.</p>
            </div>
        </footer>
    )
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved === 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    // Scroll-reveal observer for all sections
    const mainRef = useScrollReveal()

    return (
        <div ref={mainRef}>
            <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} />
            <main>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Projects />
                <SkillsSection />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
