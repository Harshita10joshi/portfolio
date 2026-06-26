import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Trophy,
  Wrench,
  Brain,
  Database,
  Server,
  ShieldCheck,
  Cpu,
  Users,
  BookOpen,
  Rocket,
  Cloud,
  Layers,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import portraitAsset from "@/assets/harshita.png.asset.json";
const portrait = portraitAsset.url;
import { toast } from "sonner";

/* ------------------------- Shared building blocks ------------------------- */

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="size-3 text-brand-blue" />
              {eyebrow}
            </span>
          )}
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- Nav ----------------------------------- */

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]" : "bg-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple text-sm font-bold text-primary-foreground">
              H
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              Harshita<span className="text-muted-foreground">.dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 hover:shadow-[0_8px_30px_-8px_oklch(0.72_0.18_255_/_0.6)]"
            >
              Let's talk
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            className="md:hidden rounded-md p-2 text-foreground"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass-strong mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-foreground/90 hover:bg-white/5"
                >
                  {n.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* -------------------------------- Hero ----------------------------------- */

const ROLES = [
  "Software Engineer",
  "Data Engineering Intern",
  "Java Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const speed = deleting ? 40 : 75;
    const t = setTimeout(() => {
      const next = deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === full) setTimeout(() => setDeleting(true), 1400);
      else if (deleting && next === "") {
        setDeleting(false);
        setI((p) => (p + 1) % ROLES.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] -translate-y-[2px] animate-pulse bg-brand-blue align-middle" />
    </span>
  );
}

const HERO_BADGES = [
  { icon: GraduationCap, label: "Final Year CSE Student" },
  { icon: Briefcase, label: "Data Engineering Intern @ Celebal" },
  { icon: Code2, label: "280+ DSA Problems Solved" },
  { icon: Rocket, label: "Open to Full-Time Roles" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 size-[520px] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[120px]" />
        <div className="absolute right-10 top-10 size-[320px] rounded-full bg-brand-blue/20 blur-[100px]" />
        <div className="absolute left-10 bottom-0 size-[300px] rounded-full bg-brand-cyan/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative rounded-full bg-emerald-400 size-2" />
              </span>
              Available for new opportunities — June 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I'm <span className="text-gradient">Harshita Joshi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 font-display text-xl font-medium text-foreground/80 sm:text-2xl md:text-3xl"
            >
              <Typewriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Final-year CSE student crafting reliable software at the intersection of
              full-stack engineering, AI/ML, and data infrastructure — currently shipping
              data pipelines as an intern at Celebal Technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noopener noreferrer"
                download="Harshita_Joshi_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-3 text-sm font-medium text-primary-foreground transition hover:shadow-[0_12px_40px_-12px_oklch(0.7_0.22_305_/_0.7)]"
              >
                <Download className="size-4" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                <Mail className="size-4" />
                Contact me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {HERO_BADGES.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground/85"
                >
                  <b.icon className="size-3.5 text-brand-blue" />
                  {b.label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="animate-float relative aspect-square rounded-[2rem] p-[2px]">
              <div
                aria-hidden
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan opacity-80 blur-[2px]"
              />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-card">
                <img
                  src={portrait}
                  alt="Portrait of Harshita Joshi"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
            </div>

            {/* floating chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass absolute -left-4 top-10 flex items-center gap-2 rounded-full px-3 py-2 text-xs sm:-left-10"
            >
              <Code2 className="size-3.5 text-brand-cyan" /> React · TS · Node
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="glass absolute -right-2 bottom-16 flex items-center gap-2 rounded-full px-3 py-2 text-xs sm:-right-6"
            >
              <Database className="size-3.5 text-brand-purple" /> MySQL · MongoDB
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass absolute -bottom-4 left-10 flex items-center gap-2 rounded-full px-3 py-2 text-xs"
            >
              <Brain className="size-3.5 text-brand-blue" /> AI / ML
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- About ---------------------------------- */

const STATS = [
  { k: "8.94", l: "CGPA / 10" },
  { k: "280+", l: "DSA Solved" },
  { k: "2", l: "Internships" },
  { k: "10+", l: "Tech Stack" },
];

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineer, builder, <span className="text-gradient">lifelong learner.</span></>}
      subtitle="A short snapshot of who I am and what drives my work."
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="glass rounded-3xl p-5 sm:p-8">
            <p className="text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
              I'm a final year{" "}
              <span className="text-foreground">B.Tech CSE student at DIT University</span>,
              passionate about Software Engineering, AI/ML, Data Engineering, and full-stack
              development. I enjoy turning ambiguous problems into clean, performant systems —
              from RESTful APIs and React UIs to data pipelines and ML experiments.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I've solved <span className="text-foreground">280+ DSA problems on LeetCode</span>,
              and I'm currently a{" "}
              <span className="text-foreground">Data Engineering Intern at Celebal Technologies</span>,
              actively exploring graduate Software Engineering and AI/ML roles.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-gradient">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass flex h-full flex-col gap-5 rounded-3xl p-5 sm:p-8">
            <div className="flex items-center gap-3">
              <MapPin className="size-4 text-brand-blue" />
              <span className="text-sm text-muted-foreground">Faridabad, Haryana, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-brand-blue" />
              <a
                href="mailto:harshitajoshi232@gmail.com"
                className="text-sm text-foreground/90 hover:text-foreground"
              >
                harshitajoshi232@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="size-4 text-brand-blue" />
              <span className="text-sm text-muted-foreground">
                Open to: SDE · AI/ML · Data Engineering
              </span>
            </div>
            <div className="mt-auto flex gap-2 pt-4">
              <a
                href="https://github.com/Harshita10joshi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                <Github className="size-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshita-joshi-5b3623284/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://leetcode.com/u/jDmF9KP4pJ/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                <Code2 className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ Experience ------------------------------- */

const EXPERIENCE = [
  {
    role: "Data Engineering Intern",
    company: "Celebal Technologies",
    place: "Remote",
    period: "Jun 2026 — Present",
    desc: "Building data pipelines and exploring cloud technologies, enterprise data platforms, and modern ETL workflows. Gaining hands-on industry experience with production-grade data engineering practices.",
    icon: Database,
    accent: "from-brand-blue to-brand-cyan",
  },
  {
    role: "Python Programming Intern",
    company: "Vaults of Code",
    place: "Remote",
    period: "1 Month",
    desc: "Completed a Python programming internship — practical assignments, logical problem solving, and mini projects strengthening fundamentals across data manipulation, OOP and scripting.",
    icon: Code2,
    accent: "from-brand-purple to-brand-blue",
  },
];

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've been <span className="text-gradient">shipping</span>.</>}
      subtitle="Internships and roles that shaped how I build."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue/60 via-brand-purple/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
        <div className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div
                className={`relative grid gap-4 sm:grid-cols-2 sm:gap-10 ${
                  i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"
                }`}
              >
                <div
                  className={`absolute left-5 top-6 size-3 -translate-x-1/2 rounded-full bg-gradient-to-r ${e.accent} ring-4 ring-background sm:left-1/2`}
                />
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:pl-8"}`}>
                  <div className="glass rounded-2xl p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.05]">
                    <div className={`mb-3 inline-grid size-10 place-items-center rounded-xl bg-gradient-to-br ${e.accent}`}>
                      <e.icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {e.company} · {e.place}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{e.desc}</p>
                  </div>
                </div>
                <div className={`hidden sm:block ${i % 2 === 0 ? "sm:pl-8" : "sm:pr-8 sm:text-right"}`}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <div className="-mt-3 pl-12 text-xs text-muted-foreground sm:hidden">{e.period}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Skills --------------------------------- */

const SKILLS: { title: string; icon: typeof Code2; items: string[]; accent: string }[] = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Java", "Python", "JavaScript"],
    accent: "from-brand-blue to-brand-cyan",
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["HTML", "CSS", "React.js", "Tailwind CSS"],
    accent: "from-brand-cyan to-brand-blue",
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js"],
    accent: "from-brand-purple to-brand-blue",
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "SQL", "MongoDB"],
    accent: "from-brand-blue to-brand-purple",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Power BI", "VS Code"],
    accent: "from-brand-purple to-brand-cyan",
  },
  {
    title: "Auth",
    icon: ShieldCheck,
    items: ["JWT", "bcrypt"],
    accent: "from-brand-cyan to-brand-purple",
  },
  {
    title: "Core CS",
    icon: Cpu,
    items: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
    accent: "from-brand-blue to-brand-purple",
  },
  {
    title: "AI / ML",
    icon: Brain,
    items: ["Machine Learning", "Generative AI", "Prompt Engineering"],
    accent: "from-brand-purple to-brand-blue",
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: ["Problem Solving", "Fast Learner", "Teamwork", "Communication", "Leadership"],
    accent: "from-brand-blue to-brand-cyan",
  },
];

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>A toolbox tuned for <span className="text-gradient">building real things</span>.</>}
      subtitle="The technologies and concepts I reach for daily."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.05]">
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br ${s.accent} opacity-0 blur-2xl transition-opacity group-hover:opacity-30`}
              />
              <div className={`mb-4 inline-grid size-11 place-items-center rounded-xl bg-gradient-to-br ${s.accent}`}>
                <s.icon className="size-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-base font-semibold">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/85 transition group-hover:border-white/20"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Projects -------------------------------- */

const PROJECTS = [
  {
    title: "AI-Based Stress Detection & Mental Wellness",
    status: "In Development",
    featured: true,
    desc: "A full-stack wellness platform that detects stress and emotion from daily journal entries using the Gemini API and personalizes wellness suggestions with mood analytics and secure auth.",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini API", "JWT", "Chart.js"],
    features: [
      "Daily journal with AI stress + emotion detection",
      "Personalized wellness suggestions",
      "Mood tracking dashboard with weekly & monthly analytics",
      "Secure JWT authentication",
    ],
    github: null,
    demo: null,
  },
  {
    title: "Smart Expense Tracker System",
    status: "Live on GitHub",
    desc: "Backend application performing efficient CRUD operations for financial data. Implements OOP principles and optimized SQL queries for clean reporting workflows.",
    tech: ["Java", "JDBC", "MySQL"],
    features: [
      "Robust CRUD with JDBC",
      "OOP-driven domain modeling",
      "Optimized SQL for reporting",
    ],
    github: "https://github.com/Harshita10joshi/Expense-Tracker-System",
    demo: null,
  },
  {
    title: "Inventory Management System",
    status: "Live on GitHub",
    desc: "Desktop inventory app with dynamic searching, CSV-backed persistence, and resilient error handling — built in pure Java Swing/AWT.",
    tech: ["Java", "Swing", "AWT", "CSV"],
    features: [
      "Dynamic search & filtering",
      "CSV-based persistence with ArrayLists",
      "Comprehensive exception handling",
    ],
    github: "https://github.com/Harshita10joshi/Inventory-Management-System",
    demo: null,
  },
];

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work</span>.</>}
      subtitle="A few projects that capture how I think, build, and ship."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article
              className={`glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-5 sm:p-7 transition hover:-translate-y-1 hover:bg-white/[0.05] ${
                p.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), oklch(0.72 0.18 255 / 0.12), transparent 40%)",
                }}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                        p.status === "In Development"
                          ? "border border-brand-purple/40 bg-brand-purple/10 text-brand-purple"
                          : "border border-brand-blue/40 bg-brand-blue/10 text-brand-blue"
                      }`}
                    >
                      <span className="size-1.5 rounded-full bg-current" /> {p.status}
                    </span>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{p.title}</h3>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-base">{p.desc}</p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-foreground/85"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium transition hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    <Github className="size-3.5" /> GitHub
                  </a>
                )}
                {p.status === "In Development" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 px-3.5 py-1.5 text-xs font-medium text-foreground/90 ring-1 ring-inset ring-white/10">
                    <Sparkles className="size-3.5 text-brand-purple" /> Coming Soon
                  </span>
                ) : (
                  p.demo && (
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-3.5 py-1.5 text-xs font-medium text-primary-foreground"
                    >
                      <ExternalLink className="size-3.5" /> Live demo
                    </a>
                  )
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Education -------------------------------- */

function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Built on <span className="text-gradient">solid foundations</span>.</>}
    >
      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue/60 via-brand-purple/40 to-transparent" />
        <Reveal>
          <div className="relative pl-14">
            <div className="absolute left-5 top-6 size-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple ring-4 ring-background" />
            <div className="glass rounded-2xl p-6">
              <div className="mb-3 inline-grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple">
                <GraduationCap className="size-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">DIT University, Dehradun</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                B.Tech, Computer Science & Engineering · 2023 – 2027
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs">
                  <Trophy className="size-3.5 text-brand-cyan" /> CGPA 8.94 / 10
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs">
                  <BookOpen className="size-3.5 text-brand-blue" /> Final Year
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------- Achievements + Profiles ----------------------- */

const ACHIEVEMENTS = [
  { icon: Code2, title: "280+ DSA Problems", desc: "Consistently solving on LeetCode" },
  { icon: Briefcase, title: "Data Engineering Intern", desc: "Currently @ Celebal Technologies" },
  { icon: Award, title: "Python Internship", desc: "Completed @ Vaults of Code" },
  { icon: Trophy, title: "CGPA 8.94 / 10", desc: "Top of class at DIT University" },
];

function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Highlights"
      title={<>Things I'm <span className="text-gradient">proud of</span>.</>}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-blue/0 via-brand-purple/0 to-brand-cyan/0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 255 / 0.08), oklch(0.7 0.22 305 / 0.08))" }}
              />
              <div className="mb-4 inline-grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple">
                <a.icon className="size-5 text-primary-foreground" />
              </div>
              <div className="font-display text-base font-semibold">{a.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{a.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const PROFILES = [
  {
    name: "GitHub",
    handle: "@Harshita10joshi",
    href: "https://github.com/Harshita10joshi",
    icon: Github,
    accent: "from-foreground/80 to-foreground/40",
    stat: "Open source projects",
  },
  {
    name: "LinkedIn",
    handle: "harshita-joshi",
    href: "https://www.linkedin.com/in/harshita-joshi-5b3623284/",
    icon: Linkedin,
    accent: "from-brand-blue to-brand-cyan",
    stat: "Let's connect",
  },
  {
    name: "LeetCode",
    handle: "280+ solved",
    href: "https://leetcode.com/u/jDmF9KP4pJ/",
    icon: Code2,
    accent: "from-brand-purple to-brand-blue",
    stat: "Daily problem solving",
  },
];

function Profiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Profiles"
      title={<>Find me <span className="text-gradient">around the web</span>.</>}
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {PROFILES.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className={`mb-4 inline-grid size-11 place-items-center rounded-xl bg-gradient-to-br ${p.accent}`}>
                <p.icon className="size-5 text-primary-foreground" />
              </div>
              <div className="font-display text-base font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{p.handle}</div>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.stat}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------- Certifications + Learning ----------------------- */

const CERTS = [{ title: "Python Programming Internship", issuer: "Vaults of Code", year: "2025" }];

const LEARNING = [
  { label: "Data Engineering", icon: Database },
  { label: "Apache Spark", icon: Layers },
  { label: "Azure Data Factory", icon: Cloud },
  { label: "AI Agents", icon: Brain },
  { label: "System Design", icon: Cpu },
  { label: "Advanced DSA", icon: Code2 },
  { label: "Generative AI", icon: Sparkles },
  { label: "Cloud Computing", icon: Cloud },
];

function CertsAndLearning() {
  return (
    <Section
      id="learning"
      eyebrow="Certifications & Learning"
      title={<>Always <span className="text-gradient">leveling up</span>.</>}
      subtitle="What I've earned and what I'm exploring next."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="glass h-full rounded-3xl p-5 sm:p-7">
            <div className="mb-4 inline-grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple">
              <Award className="size-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold">Certifications</h3>
            <div className="mt-5 space-y-3">
              {CERTS.map((c) => (
                <div
                  key={c.title}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div>
                    <div className="text-sm font-medium text-foreground">{c.title}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{c.issuer}</div>
                  </div>
                  <span className="text-xs text-muted-foreground">{c.year}</span>
                </div>
              ))}
              <div className="rounded-xl border border-dashed border-white/10 p-4 text-center text-xs text-muted-foreground">
                More certifications coming soon
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass h-full rounded-3xl p-5 sm:p-7">
            <div className="mb-4 inline-grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan">
              <BookOpen className="size-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold">Currently learning</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {LEARNING.map((l) => (
                <div
                  key={l.label}
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <l.icon className="size-4 text-brand-blue transition group-hover:text-brand-purple" />
                  <span className="text-foreground/90">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ----------------------------- Open To ----------------------------------- */

const OPEN_TO = [
  "Software Engineering",
  "Full Stack Development",
  "AI / ML",
  "Data Engineering",
  "Graduate SDE Roles",
  "Internships",
  "Full-Time Opportunities",
];

function OpenTo() {
  return (
    <Section
      id="open"
      eyebrow="Open to"
      title={<>Roles I'm <span className="text-gradient">exploring</span>.</>}
      subtitle="If any of these line up with your team, I'd love to chat."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OPEN_TO.map((o, i) => (
          <Reveal key={o} delay={i * 0.04}>
            <div className="glass group flex h-full items-center gap-3 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.05]">
              <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 ring-1 ring-inset ring-white/10">
                <Rocket className="size-4 text-brand-blue" />
              </div>
              <span className="text-sm font-medium text-foreground/90">{o}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Contact --------------------------------- */

function ContactForm() {
  const [busy, setBusy] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const subject = String(fd.get("subject") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      setBusy(false);
      return;
    }
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:harshitajoshi232@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
    toast.success("Opening your email client…");
    setTimeout(() => setBusy(false), 800);
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-5 sm:p-7 lg:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Jane Doe" />
        <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
      </div>
      <div className="mt-4">
        <Field label="Subject" name="subject" placeholder="Let's build something together" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          maxLength={1000}
          placeholder="Tell me a bit about the role or project…"
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-brand-blue/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-brand-blue/30"
        />
      </div>
      <button
        type="submit"
        disabled={busy}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-3 text-sm font-medium text-primary-foreground transition hover:shadow-[0_12px_40px_-12px_oklch(0.7_0.22_305_/_0.7)] disabled:opacity-60 sm:w-auto"
      >
        <Send className="size-4" />
        {busy ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        maxLength={200}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-brand-blue/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-brand-blue/30"
      />
    </div>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="text-gradient">something great</span>.</>}
      subtitle="Whether it's a role, a collaboration, or just a hello — my inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="glass flex h-full flex-col gap-5 rounded-3xl p-5 sm:p-7 lg:p-9">
            <ContactRow icon={Mail} label="Email" value="harshitajoshi232@gmail.com" href="mailto:harshitajoshi232@gmail.com" />
            <ContactRow icon={MapPin} label="Location" value="Faridabad, Haryana, India" />
            <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/harshita-joshi" href="https://www.linkedin.com/in/harshita-joshi-5b3623284/" />
            <ContactRow icon={Github} label="GitHub" value="github.com/Harshita10joshi" href="https://github.com/Harshita10joshi" />
            <ContactRow icon={Code2} label="LeetCode" value="leetcode.com/u/jDmF9KP4pJ" href="https://leetcode.com/u/jDmF9KP4pJ/" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple">
        <Icon className="size-4 text-primary-foreground" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm text-foreground/90">{value}</div>
      </div>
      {href && (
        <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
      )}
    </Wrapper>
  );
}

/* ------------------------------- Footer ---------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 sm:flex-row">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Harshita Joshi. Crafted with care.
        </div>
        <div className="flex gap-2">
          <a aria-label="GitHub" href="https://github.com/Harshita10joshi" target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"><Github className="size-4" /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/harshita-joshi-5b3623284/" target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"><Linkedin className="size-4" /></a>
          <a aria-label="Email" href="mailto:harshitajoshi232@gmail.com" className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"><Mail className="size-4" /></a>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------- Scroll Progress + Back top ---------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple"
    />
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-primary-foreground shadow-[0_12px_30px_-10px_oklch(0.7_0.22_305_/_0.6)] transition hover:scale-105"
        >
          <ArrowUp className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------- Page --------------------------------- */

export default function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Profiles />
      <CertsAndLearning />
      <OpenTo />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
