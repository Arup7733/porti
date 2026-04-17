import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ChevronRight, 
  ExternalLink,
  Code2,
  Database,
  LayoutTemplate,
  Wrench,
  Award,
  BookOpen
} from "lucide-react";
import { 
  SiPython, 
  SiJavascript, 
  SiSpringboot, 
  SiNodedotjs, 
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss,
  SiMysql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiHibernate,
  SiFigma
} from "react-icons/si";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 10 } },
};

const STAGGER_CHILDREN_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Add dark class to html to enforce dark mode
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-tight text-white flex items-center gap-2">
            <span className="text-primary">&lt;</span>
            Arup /<span className="text-primary">&gt;</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {["about", "skills", "experience", "projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`capitalize transition-colors hover:text-white ${
                  activeSection === item ? "text-primary" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* HERO */}
        <section id="home" className="min-h-[70vh] flex flex-col justify-center">
          <motion.div
            variants={STAGGER_CHILDREN_VARIANTS}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-8 space-y-8">
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for new opportunities
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
                  Hi, I'm Arup Jyoti Das.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                    Full Stack Developer.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  I build scalable backend systems and full-stack applications in Java and Python. 
                  Focused on precision, performance, and clean code.
                </p>
              </motion.div>

              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="mailto:arupjyoti.daas@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
                <a 
                  href="https://linkedin.com/in/arup-jyoti-das"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </motion.div>

              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-6 text-sm text-muted-foreground pt-8 border-t border-border/40">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Bangalore, India
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  +91-7846957512
                </div>
              </motion.div>
            </div>

            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary via-primary/50 to-transparent">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img 
                      src="/profile.jpeg" 
                      alt="Arup Jyoti Das" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CHILDREN_VARIANTS}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Code2 className="w-48 h-48" />
            </div>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-primary"></div>
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Software Developer with hands-on experience in building scalable backend systems and full-stack applications using Java and Python. Proficient in designing REST APIs, optimizing database performance, and developing efficient, high-performance applications. Strong understanding of data structures, system design, and microservices architecture, with a focus on building reliable and scalable software solutions.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CHILDREN_VARIANTS}
            className="space-y-12"
          >
            <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-3xl font-serif font-bold text-white flex items-center gap-3">
              <div className="w-8 h-[2px] bg-primary"></div>
              Technical Arsenal
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard 
                title="Programming" 
                icon={<Code2 className="w-5 h-5 text-primary" />}
                skills={[
                  { name: "Java", icon: <Code2 className="w-4 h-4" /> },
                  { name: "Python", icon: <SiPython /> },
                  { name: "JavaScript", icon: <SiJavascript /> },
                  { name: "SQL", icon: <Database className="w-4 h-4" /> }
                ]}
              />
              <SkillCard 
                title="Backend" 
                icon={<Database className="w-5 h-5 text-primary" />}
                skills={[
                  { name: "Spring Boot", icon: <SiSpringboot /> },
                  { name: "Node.js", icon: <SiNodedotjs /> },
                  { name: "Express.js", icon: <SiExpress /> },
                  { name: "Hibernate", icon: <SiHibernate /> },
                  { name: "RESTful APIs", icon: <Code2 className="w-4 h-4" /> }
                ]}
              />
              <SkillCard 
                title="Frontend" 
                icon={<LayoutTemplate className="w-5 h-5 text-primary" />}
                skills={[
                  { name: "React.js", icon: <SiReact /> },
                  { name: "HTML5", icon: <SiHtml5 /> },
                  { name: "CSS3", icon: <SiCss /> },
                  { name: "JavaScript", icon: <SiJavascript /> }
                ]}
              />
              <SkillCard 
                title="Database & Cloud" 
                icon={<Database className="w-5 h-5 text-primary" />}
                skills={[
                  { name: "MySQL", icon: <SiMysql /> },
                  { name: "MongoDB", icon: <SiMongodb /> },
                  { name: "AWS", icon: <Award className="w-4 h-4" /> }
                ]}
              />
              <SkillCard 
                title="Tools" 
                icon={<Wrench className="w-5 h-5 text-primary" />}
                skills={[
                  { name: "Git", icon: <SiGit /> },
                  { name: "Postman", icon: <SiPostman /> },
                  { name: "VS Code", icon: <Code2 className="w-4 h-4" /> }
                ]}
              />
              <SkillCard 
                title="Core Concepts" 
                icon={<BookOpen className="w-5 h-5 text-primary" />}
                skills={[
                  { name: "Data Structures & Algorithms" },
                  { name: "System Design" },
                  { name: "OOP" },
                  { name: "Microservices" },
                  { name: "SDLC" },
                  { name: "Cybersecurity Basics" }
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CHILDREN_VARIANTS}
            className="space-y-12"
          >
            <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-3xl font-serif font-bold text-white flex items-center gap-3">
              <div className="w-8 h-[2px] bg-primary"></div>
              Experience
            </motion.h2>

            <div className="space-y-8">
              <ExperienceItem 
                role="Full Stack Developer"
                company="Kodenest Technology"
                period="Aug 2025 – March 2026"
                location="Bangalore"
                bullets={[
                  "Developed and deployed RESTful APIs using Java, Spring Boot, and MySQL for scalable backend services.",
                  "Built full-stack applications integrating React frontend with Node.js/Java backend systems.",
                  "Integrated backend with frontend and debugged issues to ensure smooth functionality and reliability."
                ]}
              />
              <ExperienceItem 
                role="Web Development Intern"
                company="Yhills"
                period="May 2023 – July 2023"
                location="Remote"
                bullets={[
                  "Developed responsive web applications using HTML, CSS, and JavaScript, focusing on user-friendly design."
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CHILDREN_VARIANTS}
            className="space-y-12"
          >
            <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-3xl font-serif font-bold text-white flex items-center gap-3">
              <div className="w-8 h-[2px] bg-primary"></div>
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard 
                title="E-Learning Portal"
                tech={["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"]}
                bullets={[
                  "Full-stack web application for managing courses, users, and learning content using Django and SQL.",
                  "Dynamic interfaces and backend logic for user authentication, course enrollment, and content delivery.",
                  "Scalable and maintainable features following SDLC practices."
                ]}
              />
              <ProjectCard 
                title="FleetGo"
                tech={["Java", "Spring Boot", "JDBC", "MySQL", "HTML", "CSS", "JavaScript"]}
                bullets={[
                  "Full-stack vehicle rental system for browsing, booking, and managing vehicle reservations.",
                  "RESTful APIs using Spring Boot and JDBC for handling booking, user, and vehicle data efficiently.",
                  "Integrated frontend with backend services and optimized database queries."
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/* EDUCATION & MORE */}
        <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-12 scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CHILDREN_VARIANTS}
            className="space-y-8"
          >
            <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-2xl font-serif font-bold text-white flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Education
            </motion.h2>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-white">B.Tech in Computer Science & Engineering</h3>
              <p className="text-primary font-medium mt-1">GIET University, Gunupur</p>
              <div className="flex justify-between mt-4 text-sm text-muted-foreground">
                <span>2021 – 2025</span>
                <span className="font-medium text-white bg-secondary px-2 py-1 rounded">CGPA: 8.21</span>
              </div>
            </motion.div>

            <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-2xl font-serif font-bold text-white flex items-center gap-3 pt-6">
              <Award className="w-6 h-6 text-primary" />
              Achievements
            </motion.h2>
            <motion.ul variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-3">
              {[
                "Solved 100+ coding problems across different platforms",
                "Completed Google Cloud Skill Badge and Arcade",
                "Smart India Hackathon 2024 – Internal Winner"
              ].map((achievement, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CHILDREN_VARIANTS}
            className="space-y-8"
          >
            <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-2xl font-serif font-bold text-white flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </motion.h2>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
              <CertificationCard title="Crash Course on Python" issuer="Google (Coursera)" />
              <CertificationCard title="Full Stack Developer" issuer="Kodnest Technology" />
              <CertificationCard title="Network Basics" issuer="Cisco" />
            </motion.div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 pb-6 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Arup Jyoti Das. Crafted with precision.</p>
        </footer>
      </main>
    </div>
  );
}

function SkillCard({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: {name: string, icon?: React.ReactNode}[] }) {
  return (
    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-card border border-border hover:border-primary/50 transition-colors rounded-xl p-6 group">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill.name} className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1.5 rounded-md border border-secondary-border">
            {skill.icon && <span className="opacity-70">{skill.icon}</span>}
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceItem({ role, company, period, location, bullets }: { role: string, company: string, period: string, location: string, bullets: string[] }) {
  return (
    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative pl-8 border-l border-border hover:border-primary/50 transition-colors pb-8 last:pb-0">
      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <p className="text-primary font-medium text-lg">{company}</p>
        </div>
        <div className="text-sm text-muted-foreground text-left md:text-right">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="space-y-2 mt-4">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-muted-foreground">
            <ChevronRight className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, tech, bullets }: { title: string, tech: string[], bullets: string[] }) {
  return (
    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 rounded-xl p-8 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-white font-serif">{title}</h3>
        <a href="#" className="p-2 bg-secondary rounded-full text-muted-foreground hover:text-white transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-muted-foreground leading-relaxed text-sm">
            {bullet}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50 mt-auto">
        {tech.map((t) => (
          <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CertificationCard({ title, issuer }: { title: string, issuer: string }) {
  return (
    <div className="bg-secondary/50 border border-secondary-border rounded-lg p-4 flex justify-between items-center hover:bg-secondary transition-colors">
      <div>
        <h4 className="font-bold text-white text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1">{issuer}</p>
      </div>
      <Award className="w-5 h-5 text-primary/50" />
    </div>
  );
}
