import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight, Code2, Database, Github, Linkedin, Mail, Menu, X,
  Sparkles, Server, Layers3, Trophy, GraduationCap, BriefcaseBusiness,
  ChevronDown, ExternalLink, Sun, Moon, Download, MousePointer2
} from "lucide-react";

const skills = [
  ["Frontend", "HTML5 · CSS3 · JavaScript ES6+", <Code2 size={22}/>],
  ["Backend", "Node.js · Express.js", <Server size={22}/>],
  ["Database", "MySQL · SQL", <Database size={22}/>],
  ["Language", "Java · OOP · Collections · JDBC", <Layers3 size={22}/>],
];

const projects = [
  {
    n:"01", title:"Instagram Clone", period:"Mar 2025 — Aug 2025",
    tech:"HTML · CSS · JavaScript · React", image:"/projects/instagram-clone.svg",
    github:"https://github.com/",
    text:"A responsive social frontend with navigation, posts feed, stories, suggestions, profile views, CRUD operations and dynamic UI components."
  },
  {
    n:"02", title:"College Website", period:"Dec 2024 — Feb 2025",
    tech:"HTML · CSS · JavaScript · Java", image:"/projects/college-website.svg",
    github:"https://github.com/",
    text:"A web portal supporting frontend implementation and backend integration for academic and administrative workflows."
  },
  {
    n:"03", title:"Wastewater Energy Vehicle", period:"Nov 2023 — Jan 2024",
    tech:"Python · Java", image:"/projects/wastewater-energy.svg",
    github:"https://github.com/",
    text:"A sustainable-energy prototype using wastewater, developed through system planning, feasibility analysis and performance testing."
  }
];

const experience = [
  {
    role:"Java Development Intern", company:"Oasis Infobyte · Remote",
    date:"Aug 2025 — Sep 2025",
    text:"Developed maintainable Java applications using Core Java, OOP, Collections, exception handling, JDBC and MySQL. Used SQL and Excel for data analysis and reporting."
  },
  {
    role:"Full Stack Web Development Intern", company:"Edu-versity · Remote",
    date:"Oct 2024 — Dec 2024",
    text:"Built responsive web pages with HTML, CSS and JavaScript while supporting backend integration, debugging, testing and deployment."
  }
];

const awards = [
  "Best Innovative Solution — AXIOMI 2026 Hackathon",
  "Mr. Xcelerate Winner — HACKXELERATE’26 Hackathon",
  "Programming in Java — NASSCOM",
  "Oracle Cloud Infrastructure 2025 Foundations",
  "Java Developer Certification — Coursera"
];

const reveal = {
  hidden:{opacity:0,y:36},
  show:{opacity:1,y:0,transition:{duration:.7,ease:[.2,.7,.2,1]}}
};

function GlowCard({children, className=""}) {
  const ref = useRef(null);
  const move = e => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX-r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY-r.top}px`);
  };
  return <div ref={ref} onMouseMove={move} className={`glow-card ${className}`}>{children}</div>
}
const EMAIL = "natarajm9876@gmail.com";

const gmailUrl =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}` +
  `&su=${encodeURIComponent("Portfolio Enquiry")}`;

function App(){
  const [open,setOpen]=useState(false);
  const [theme,setTheme]=useState(()=>localStorage.getItem("theme") || "dark");
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const {scrollYProgress}=useScroll();
  const scaleX=useTransform(scrollYProgress,[0,1],[0,1]);
  const gmailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=natarajm9876@gmail.com&su=Portfolio%20Enquiry";

  useEffect(()=>{
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  },[theme]);

  useEffect(()=>{
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const nx = e.clientX / window.innerWidth - .5;
      const ny = e.clientY / window.innerHeight - .5;

      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
      document.documentElement.style.setProperty("--mouse-x", `${nx}`);
      document.documentElement.style.setProperty("--mouse-y", `${ny}`);

      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
      }
      document.documentElement.style.setProperty("--comet-x", `${mouseX}px`);
      document.documentElement.style.setProperty("--comet-y", `${mouseY}px`);
    };

    const animateCursor = () => {
      ringX += (mouseX - ringX) * .13;
      ringY += (mouseY - ringY) * .13;
      if (cursorRing.current) {
        cursorRing.current.style.transform = `translate3d(${ringX}px,${ringY}px,0)`;
      }
      raf = requestAnimationFrame(animateCursor);
    };

    const magneticMove = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * .22}px,${y * .22}px) scale(1.08)`;
    };

    const magneticLeave = (e) => {
      e.currentTarget.style.transform = "translate(0,0) scale(1)";
    };

    const magnetics = document.querySelectorAll(".magnetic-item");
    magnetics.forEach(el => {
      el.addEventListener("mousemove", magneticMove);
      el.addEventListener("mouseleave", magneticLeave);
    });

    window.addEventListener("mousemove", onMove);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      magnetics.forEach(el => {
        el.removeEventListener("mousemove", magneticMove);
        el.removeEventListener("mouseleave", magneticLeave);
      });
    };
  },[]);

  return <main>
    <div ref={cursorDot} className="cursor-dot-v3"/>
    <div ref={cursorRing} className="cursor-ring-v3"/>
    <div className="cursor-comet" aria-hidden="true"/>
    <motion.div className="progress" style={{scaleX}} />
    <div className="cursor-glow" />
    <div className="animated-bg" aria-hidden="true">
      <span className="bg-orb orb-a"/><span className="bg-orb orb-b"/>
      <span className="bg-orb orb-c"/><div className="grid-floor"/>
    </div>

    <nav>
      <a className="brand" href="#home"><span>N</span>NATARAJ</a>
      <div className={`navlinks ${open?"open":""}`}>
        {["about","skills","experience","projects","awards"].map(x=>
          <a key={x} href={`#${x}`} onClick={()=>setOpen(false)}>{x}</a>
        )}
        <a
       className="resume-nav"
        href={`${import.meta.env.BASE_URL}Nataraj_M_Resume.pdf`}
        download="Nataraj_M_Resume.pdf"
          >
        <Download size={14} /> Resume
         </a>
        <button className="theme-toggle" onClick={()=>setTheme(theme==="dark"?"light":"dark")} aria-label="Toggle day and night mode">
          {theme==="dark"?<Sun size={17}/>:<Moon size={17}/>}
        </button>
        <a
  className="nav-cta"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=natarajm9876@gmail.com&su=Portfolio%20Enquiry"
  target="_blank"
  rel="noopener noreferrer"
>
  Let's talk <ArrowUpRight size={15} />
</a>
      </div>
      <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </nav>

    <section id="home" className="hero hero-v3">
      <div className="noise"/>
      <div className="hero-grid-bg"/>
      <div className="mouse-spotlight"/>

      <motion.div
        className="hero-name-v3"
        initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{duration:.7}}
      >
        Nataraj M
      </motion.div>

      <motion.div
        className="hero-photo-v3"
        initial={{opacity:0,y:50,scale:.94}}
        animate={{opacity:1,y:0,scale:1}}
        transition={{delay:.15,duration:.9,ease:[.2,.7,.2,1]}}
      >
        <div className="photo-aura"/>
        <img
         src={`${import.meta.env.BASE_URL}my-photo.png`}
  
             alt="Nataraj M"
        />
      </motion.div>

      <motion.div
        className="mega-title-wrap"
        initial={{opacity:0,y:35}}
        animate={{opacity:1,y:0}}
        transition={{delay:.3,duration:.85}}
      >
        <h1 className="mega-title">
          <span className="solid-title">Software Developer</span>
          <span className="outline-text"> / Full Stack</span>
        </h1>
      </motion.div>

      <motion.a
        className="hero-resume magnetic-item"
        href={`${import.meta.env.BASE_URL}Nataraj_M_Resume.pdf`}
        download
        initial={{opacity:0,y:12}}
        animate={{opacity:1,y:0}}
        transition={{delay:.8}}
      >
        <Download size={16}/> Download Resume
      </motion.a>

      <motion.p
        className="hero-tagline-v3"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:.65,duration:.7}}
      >
        Building reliable systems and seamless web experiences.
      </motion.p>

      <motion.div
        className="hero-socials-v3"
        initial={{opacity:0,x:30}}
        animate={{opacity:1,x:0}}
        transition={{delay:.75}}
      >
        <a className="magnetic-item" href="https://linkedin.com/in/nataraj-m-nr/" target="_blank" aria-label="LinkedIn"><Linkedin/></a>
        <a
  href="https://github.com/nataraj2027"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Nataraj GitHub profile"
>
  <Github size={24} />
</a>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=natarajm9876@gmail.com&su=Portfolio%20Enquiry"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email Nataraj"
>
  <Mail size={24} />
</a>
      </motion.div>

      <div className="hero-scroll-note">SCROLL TO EXPLORE <ChevronDown size={14}/></div>
    </section>

    <section id="about" className="section">
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} className="section-head">
        <span className="kicker">01 / ABOUT</span>
        <h2>Code with purpose.<br/><em>Built to last.</em></h2>
        <p>Software Developer with hands-on experience in Java, backend systems and web technologies through internships and academic projects.</p>
      </motion.div>
      <div className="about-grid">
        <GlowCard className="feature big">
          <div className="orb"><Code2/></div>
          <span className="tiny">ENGINEERING MINDSET</span>
          <h3>Clean implementation.<br/>Scalable foundations.</h3>
          <p>I build efficient applications with strong object-oriented thinking, practical database skills and maintainable code.</p>
          <div className="code-lines"><i/><i/><i/><i/></div>
        </GlowCard>
        <GlowCard className="feature">
          <GraduationCap/>
          <span className="tiny">EDUCATION</span>
          <h3>B.Tech — Information Technology</h3>
          <p>Panimalar Engineering College, Chennai</p>
          <strong>8.6 / 10 CGPA</strong>
          <small>Expected Aug 2027</small>
        </GlowCard>
        <GlowCard className="feature">
          <Sparkles/>
          <span className="tiny">THE APPROACH</span>
          <h3>Think deeply.<br/>Ship clearly.</h3>
          <p>From idea to implementation, I value straightforward systems and user experiences that simply work.</p>
        </GlowCard>
      </div>
    </section>

    <section id="skills" className="section">
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} className="section-head center">
        <span className="kicker">02 / CAPABILITIES</span>
        <h2>Tools I use to turn<br/><em>ideas into products.</em></h2>
      </motion.div>
      <div className="skill-grid">
        {skills.map((s,i)=><motion.div key={s[0]} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:i*.08}}>
          <GlowCard className="skill">
            <div className="skill-icon">{s[2]}</div><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p>
          </GlowCard>
        </motion.div>)}
      </div>
    </section>

    <section id="experience" className="section">
      <div className="section-head">
        <span className="kicker">03 / EXPERIENCE</span>
        <h2>Learning fast.<br/><em>Building for real.</em></h2>
      </div>
      <div className="timeline">
        {experience.map((e,i)=><motion.article key={e.role} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
          <div className="timeline-dot"/>
          <span className="date">{e.date}</span>
          <div><h3>{e.role}</h3><h4>{e.company}</h4><p>{e.text}</p></div>
          <BriefcaseBusiness/>
        </motion.article>)}
      </div>
    </section>

    <section id="projects" className="section projects-section">
      <div className="section-head center">
        <span className="kicker">04 / SELECTED WORK</span>
        <h2>Projects that moved me<br/><em>from theory to execution.</em></h2>
      </div>
      <div className="projects">
        {projects.map((p,i)=><motion.div key={p.title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
          <GlowCard className="project">
            <div className="project-top"><span>{p.n}</span><a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}><Github/></a></div>
            <a className="project-visual project-image-link" href={p.github} target="_blank" rel="noreferrer">
              <img src={p.image} alt={`${p.title} project preview`}/>
              <span className="project-hover-label"><Github size={17}/> View on GitHub</span>
            </a>
            <span className="tiny">{p.period}</span>
            <h3>{p.title}</h3><b>{p.tech}</b><p>{p.text}</p>
          </GlowCard>
        </motion.div>)}
      </div>
    </section>

    <section id="awards" className="section">
      <div className="section-head">
        <span className="kicker">05 / RECOGNITION</span>
        <h2>Proof of curiosity.<br/><em>Momentum through action.</em></h2>
      </div>
      <div className="awards">
        {awards.map((a,i)=><motion.div key={a} initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.08}}>
          <span>0{i+1}</span><Trophy/><p>{a}</p><ArrowUpRight/>
        </motion.div>)}
      </div>
    </section>

    <section className="cta">
      <div className="cta-glow"/>
      <span className="kicker">HAVE A PROJECT OR OPPORTUNITY?</span>
      <h2>Ready to build something<br/><em>that actually works?</em></h2>
      <p>I'm open to internships, software development roles and meaningful collaborations.</p>
      <a
  className="primary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=natarajm9876@gmail.com&su=Portfolio%20Enquiry"
  target="_blank"
  rel="noreferrer"
>
  Start a conversation <ArrowUpRight size={18}/>
</a>
    </section>

    <footer>
      <a className="brand" href="#home"><span>N</span>NATARAJ</a>
      <p>Software Developer · Chennai, India</p>
      <div>
       <div className="footer-socials">
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=natarajm9876@gmail.com&su=Portfolio%20Enquiry" target="_blank" rel="noreferrer"><Mail /></a>
  <a href="https://www.linkedin.com/in/nataraj-m-nr/" target="_blank" rel="noreferrer"><Linkedin /></a>
  <a href="YOUR_GITHUB_PROFILE_LINK" target="_blank" rel="noreferrer"><Github /></a>
</div>
      </div>
      <small>© 2026 Nataraj M. Built with intent.</small>
    </footer>
  </main>
}
export default App;
