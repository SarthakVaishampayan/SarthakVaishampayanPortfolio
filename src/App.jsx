import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  Code,
  PenTool,
  BarChart,
  Database,
  Settings,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Terminal,
  FileCode2,
  Wrench,
  BrainCircuit,
  X,
  Code2
} from 'lucide-react';

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      style={{ position: "relative", zIndex: 50 }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Preloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
      onComplete();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] bg-[#1a1c26] flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 border-[3px] border-mint/20 border-t-mint rounded-full animate-spin"></div>
            <div className="overflow-hidden text-center mt-4">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                className="text-4xl md:text-6xl font-black tracking-tighter text-white"
              >
                Welcome <br className="md:hidden" /><span className="text-mint">@SarthakVaishampayan</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold mt-2"
            >
              Preparing Experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky-nav fixed top-0 w-full z-50 px-6 lg:px-12 py-5 flex justify-between items-center border-b border-gray-800/50 bg-[#1a1c26]/60 backdrop-blur-xl">
        <div className="font-black tracking-tighter text-xl flex items-center gap-2 relative z-[102] group" onClick={() => setIsOpen(false)}>
          <span className="text-mint text-lg">◉</span> Sarthak V.
        </div>

        <div className="hidden lg:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-mint transition">Home</a>
          <a href="#services" className="hover:text-mint transition">Services</a>
          <a href="#projects" className="hover:text-mint transition">Project</a>
          <a href="#skills" className="hover:text-mint transition">Skills</a>
          <a href="#insights" className="hover:text-mint transition">Insights</a>
          <a href="#contact" className="hover:text-mint transition">Contact</a>
        </div>

        <div className="hidden lg:flex">
          <Magnetic>
            <a href="/Resume.pdf.pdf" download className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-[10px] tracking-widest uppercase hover:bg-mint hover:scale-105 transition-all font-black shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <Download size={14} /> Download CV
            </a>
          </Magnetic>
        </div>

        <button
          className="lg:hidden text-white hover:text-mint transition w-8 h-8 relative z-[102]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : (
            <img
              decoding="async"
              src="https://framerusercontent.com/images/lfmN9uz4fNR8wJaSyfqakktMYMA.svg"
              alt="Menu"
              style={{ display: 'block', width: '100%', height: '100%', objectPosition: 'center center', objectFit: 'cover' }}
            />
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/80 z-[100] backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#1a1c26] z-[101] border-l border-gray-800 transition-transform duration-700 ease-[0.76,0,0.24,1] flex flex-col pt-32 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col px-8 gap-8 text-sm font-black tracking-[0.2em] uppercase">
          <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-mint transition transform hover:translate-x-2">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-mint transition transform hover:translate-x-2">Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-mint transition transform hover:translate-x-2">Project</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-mint transition transform hover:translate-x-2">Skills</a>
          <a href="#insights" onClick={() => setIsOpen(false)} className="hover:text-mint transition transform hover:translate-x-2">Insights</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-mint transition transform hover:translate-x-2">Contact</a>

          <div className="w-full h-px bg-gray-800 my-6"></div>

          <a href="/Resume.pdf.pdf" download className="flex justify-center items-center gap-2 bg-white text-black px-6 py-4 rounded-full text-xs uppercase hover:bg-mint transition-colors font-black">
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen relative flex flex-col justify-end overflow-hidden pt-20 bg-[#15171f]">

    {/* Gradient Overlay for subtle noise/depth */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(26,28,38,0)_0%,_#15171f_100%)] z-10 pointer-events-none"></div>

    {/* Massive Typography matched to custom scaled offsets */}
    <div className="absolute inset-x-0 top-[42%] -translate-y-1/2 flex flex-col items-center justify-center z-10 w-full text-center pointer-events-none">
      <h1 className="text-[16.5vw] lg:text-[14vw] font-black leading-[0.85] tracking-tighter text-white uppercase" data-aos="zoom-in" data-aos-duration="1500">
        FULL STACK
      </h1>
      <h1 className="text-[16.5vw] lg:text-[14vw] font-black leading-[0.85] tracking-tighter text-transparent uppercase mt-2 lg:mt-0" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }} data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">
        DEVELOPER
      </h1>
    </div>

    {/* Floating Pill Tags Adjusted */}
    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[1%] lg:left-[5%] top-[10%] lg:top-[18%] z-30 hidden md:block" data-aos="fade-in" data-aos-delay="1000">
      <div className="bg-[#ff5f4a] text-white text-xs font-black tracking-widest uppercase px-6 py-3 rounded-full shadow-2xl relative">
        Frontend Engineer
        <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-[#ff5f4a]"></div>
      </div>
    </motion.div>

    <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute right-[5%] lg:right-[15%] top-[16%] lg:top-[27%] z-30 hidden md:block" data-aos="fade-in" data-aos-delay="1200">
      <div className="bg-[#0be5ba] text-[#1a1c26] text-xs font-black tracking-widest uppercase px-6 py-3 rounded-full shadow-2xl relative">
        Backend Systems
      </div>
    </motion.div>

    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute right-[10%] lg:right-[17%] bottom-[33%] lg:bottom-[30%] z-30 hidden md:block" data-aos="fade-in" data-aos-delay="1400">
      <div className="bg-[#4a85ff] text-white text-xs font-black tracking-widest uppercase px-6 py-3 rounded-full shadow-2xl relative">
        UI / UX Design
        <div className="absolute -top-2 left-6 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-[#4a85ff]"></div>
      </div>
    </motion.div>

    {/* Central Focus Portrait */}
    <div className="relative z-20 w-[5vw] md:w-[60vw] max-w-[800px] h-[65vh] md:h-[75vh] mx-auto flex items-end justify-center pointer-events-none" data-aos="fade-up" data-aos-duration="1500">
      {/* Use a cutout PNG for maximum effect */}
      <img
        src="/profile.png"
        alt="Sarthak"
        className="w-full h-full object-contain object-bottom filter drop-shadow-[0_-5px_50px_rgba(255,255,255,0.05)]"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';
          e.target.style.maskImage = 'linear-gradient(to top, black 80%, transparent)';
        }}
      />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#15171f] via-[#15171f]/60 to-transparent"></div>
    </div>

    {/* Bottom Stats Footer matching Image 1 */}
    <div className="absolute bottom-8 w-full px-8 lg:px-24 flex justify-between items-end z-30 pointer-events-none">
      <div data-aos="fade-right" data-aos-delay="800">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-none">2<span className="text-mint text-3xl">+</span></h2>
        <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold mt-2">Internships</p>
      </div>

      <div className="hidden lg:block max-w-sm text-center pointer-events-auto">
        {/* Removed text box as requested */}
      </div>

      <div className="text-right" data-aos="fade-left" data-aos-delay="800">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-none">5<span className="text-accent text-3xl">+</span></h2>
        <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold mt-2">Projects Done</p>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <Code size={36} strokeWidth={1.5} />, title: "Full Stack Development", desc: "Building scalable web applications using React, Node.js, and modern frameworks. Experience with both frontend and backend development." },
    { icon: <PenTool size={36} strokeWidth={1.5} />, title: "UI/UX Design", desc: "Creating intuitive and visually appealing user interfaces with Figma. Focus on user-centric design and seamless experiences." },
    { icon: <Database size={36} strokeWidth={1.5} />, title: "Database Management", desc: "Designing and optimizing relational databases with MySQL and MongoDB. Expertise in data modeling and query optimization." },
  ];

  return (
    <section id="services" className="py-32 px-6 lg:px-24 bg-[#1a1c26] border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

        {/* Left side text matching Image 2 style */}
        <div className="lg:w-1/3 flex flex-col justify-center" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight">
            I create <span className="text-accent italic font-serif">unconventional</span> yet functional & visually pleasing interfaces for the mobile and web.
          </h2>
          <div className="w-20 h-1 bg-mint mt-10 rounded-full"></div>
        </div>

        {/* Right side floating cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <div key={i} className={`bg-[#15171f] p-8 rounded-3xl border border-gray-800 hover:border-mint transition-all duration-500 shadow-xl group ${i === 1 ? 'lg:-translate-y-8' : ''} ${i === 2 ? 'lg:translate-y-8' : ''}`} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="text-mint mb-8 group-hover:scale-110 transition-transform origin-left">{srv.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight">{srv.title}</h3>
              <p className="text-gray-400 text-sm leading-loose">{srv.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({ proj, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <a ref={ref} href={proj.link || "#"} target={proj.link ? "_blank" : "_self"} rel="noreferrer" className="group relative w-full block" data-aos="fade-up" data-aos-delay={index * 100}>
      <div className="bg-[#15171f] rounded-[2.5rem] p-8 md:p-16 border border-gray-800/50 hover:border-mint transition-colors duration-500 overflow-hidden relative z-10 shadow-2xl">

        {/* Background Overlay Reveal matching Image 3 vibe */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
          <img src={proj.img} alt={proj.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 blur-sm" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="flex-1 lg:max-w-lg">
            <span className="text-mint text-xs font-black tracking-widest uppercase mb-4 block bg-mint/10 inline-block px-4 py-2 rounded-full">{proj.category}</span>
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white group-hover:text-white transition-colors tracking-tighter leading-tight">{proj.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">{proj.desc}</p>

            <div className="flex flex-wrap gap-3">
              {proj.tags.slice(0, 4).map((tag, j) => (
                <span key={j} className="px-5 py-2.5 bg-[#1a1c26] text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-gray-800 text-white">{tag}</span>
              ))}
            </div>
          </div>

          <motion.div
            style={{ y }}
            className="w-full lg:w-[45%] aspect-[4/3] rounded-3xl overflow-hidden shrink-0 opacity-90 group-hover:opacity-100 transition-all duration-700 shadow-2xl skew-x-1 group-hover:skew-x-0 group-hover:-translate-y-2 border-4 border-[#1a1c26]"
          >
            <img src={proj.img} alt="Preview" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
      {proj.link && (
        <div className="absolute top-10 right-10 md:top-16 md:right-16 bg-white text-black p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 group-hover:scale-110 shadow-2xl">
          <ArrowUpRight size={28} strokeWidth={3} />
        </div>
      )}
    </a>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "BookYourGame – Console Booking",
      category: "Real-time Systems",
      desc: "Cloud-enabled platform for real-time console availability and slot-based bookings. Designed separate owner and user dashboards with live updates and automated flows.",
      tags: ["React.js", "Node.js", "Express.js", "Responsive UI"],
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
      link: "https://bookyourgame.vercel.app/"
    },
    {
      title: "Scribbl – Collaborative Canvas",
      category: "Real-time Collaboration",
      desc: "Engineered a real-time collaborative drawing platform with dynamic user syncing and intuitive tool palettes, boosting team productivity by 25% during live sessions.",
      tags: ["React.js", "Socket.io", "Canvas", "CSS3"],
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
      link: "https://scribbl-pearl.vercel.app/"
    },
    {
      title: "DRDO Employee System",
      category: "Full Stack Development",
      desc: "Architected and developed advanced role-based access control and employee profile management features, strengthening security and usability for 5,000+ users.",
      tags: ["HTML5", "CSS", "Bootstrap", "Figma"],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      link: null
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 lg:px-24 relative bg-[#1a1c26] overflow-hidden">

      {/* Background 'WORK' typography from Image 3 */}
      <div className="absolute right-[-5%] top-[5%] text-[15vw] font-black leading-[0.8] text-transparent select-none pointer-events-none hidden lg:block tracking-tighter opacity-10" style={{ WebkitTextStroke: '3px rgba(255,255,255,1)' }}>
        WORK<br />WORK<br />WORK
      </div>

      <div className="mb-24 relative z-10" data-aos="fade-up">
        <h2 className="text-5xl md:text-7xl font-black mb-4 text-white uppercase tracking-tighter">Selected <span className="text-mint">Works</span></h2>
        <p className="text-gray-400 text-xl font-medium">Interactive showcases of my best technical builds</p>
      </div>

      <div className="space-y-12 flex flex-col items-center w-full max-w-7xl mx-auto relative z-10">
        {projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} index={i} />
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    { title: "Languages", icon: <Terminal size={24} />, items: ["C / C++", "HTML5", "CSS3", "JavaScript", "SQL"] },
    { title: "Frameworks & Libs", icon: <FileCode2 size={24} />, items: ["React.js", "Node.js", "Express.js", "Bootstrap"] },
    { title: "Tools & Software", icon: <Wrench size={24} />, items: ["Git", "Power BI", "MySQL", "MS Excel", "Figma", "MongoDB"] },
    { title: "Core Competencies", icon: <BrainCircuit size={24} />, items: ["DSA", "Operating Systems", "OOPs", "Web Dev", "Computer Networks"] }
  ];

  return (
    <section id="skills" className="py-32 px-6 lg:px-24 bg-[#15171f] relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

        <div className="lg:w-1/3" data-aos="fade-right">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">My <br /><span className="text-accent">Arsenal</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">The carefully curated tools and technologies I use to forge robust solutions from the ground up.</p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#1a1c26] p-8 rounded-3xl border border-gray-800 hover:border-accent hover:-translate-y-2 transition-all duration-300 shadow-xl" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#15171f] rounded-2xl text-accent shadow-inner">{cat.icon}</div>
                <h3 className="text-xl font-black tracking-tight text-white">{cat.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="px-4 py-2 bg-[#15171f] text-gray-300 font-bold text-xs uppercase tracking-widest rounded-lg border border-gray-800 hover:text-white hover:border-gray-600 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Insights = () => {
  const posts = [
    { category: "Web Development", date: "Oct 2024", title: "Building Scalable React Applications", desc: "Best practices and patterns I learned while developing enterprise-level applications at DRDO.", time: "5 min read" },
    { category: "Data Analytics", date: "Sep 2024", title: "Power BI Dashboard Design Tips", desc: "How to create effective and visually appealing dashboards that drive business decisions.", time: "4 min read" },
    { category: "System Design", date: "Aug 2024", title: "Optimizing Resource Allocation Systems", desc: "Lessons learned from designing workflow management systems that save 100+ hours annually.", time: "6 min read" }
  ];

  return (
    <section id="insights" className="py-32 px-6 lg:px-24 bg-[#1a1c26] relative overflow-hidden">

      {/* Background Typography */}
      <div className="absolute left-[-5%] top-[10%] text-[15vw] font-black leading-[0.8] text-transparent select-none pointer-events-none hidden lg:block tracking-tighter opacity-[0.03]" style={{ WebkitTextStroke: '3px rgba(255,255,255,1)' }}>
        BLOG<br />BLOG
      </div>

      <div className="max-w-7xl mx-auto relative z-10" data-aos="fade-up">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-white uppercase tracking-tighter">Latest <span className="text-mint">Insights</span></h2>
          <p className="text-gray-400 text-xl font-medium">Sharing knowledge and experiences from my journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group bg-[#15171f] rounded-[2rem] p-8 md:p-10 border border-gray-800 hover:border-mint hover:-translate-y-2 transition-all duration-500 shadow-xl flex flex-col h-full relative overflow-hidden cursor-pointer" data-aos="fade-up" data-aos-delay={i * 150}>

              {/* Subtle hover glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-mint/5 rounded-full blur-3xl group-hover:bg-mint/10 transition-all duration-700 pointer-events-none"></div>

              <div className="flex justify-between items-center mb-8 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 z-10">
                <span className="text-mint bg-mint/10 px-4 py-2 rounded-lg">{post.category}</span>
                <span>{post.date}</span>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-mint transition-colors tracking-tight z-10 leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-400 leading-relaxed font-medium mb-10 z-10 flex-grow">
                {post.desc}
              </p>

              <div className="flex justify-between items-center z-10 mt-auto pt-6 border-t border-gray-800/50">
                <span className="text-[10px] md:text-xs font-black text-gray-400 tracking-[0.2em] uppercase">{post.time}</span>
                <div className="w-12 h-12 rounded-full bg-[#1a1c26] border border-gray-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shadow-xl">
                  <ArrowUpRight size={20} strokeWidth={3} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Web3Forms API Integration
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Message Sent Successfully!");
        e.target.reset();
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Something went wrong.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <footer id="contact" className="pt-32 pb-10 px-6 lg:px-24 bg-[#1a1c26] border-t border-gray-800 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20" data-aos="fade-up">

        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white uppercase leading-[0.9]">Let's <br /> <span className="text-mint">Connect.</span></h2>
          <p className="text-gray-400 text-xl mb-16 leading-relaxed max-w-md font-medium">I'm always open to discussing new projects, creative ideas, or opportunities.</p>

          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-[#15171f] border border-gray-800 flex items-center justify-center text-mint shrink-0 group-hover:bg-mint group-hover:text-black transition-all">
                <Mail size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Email</p>
                <a href="mailto:sarthakvaishampayan22@gmail.com" className="text-lg md:text-xl font-bold hover:text-mint transition text-white">sarthakvaishampayan22@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-[#15171f] border border-gray-800 flex items-center justify-center text-mint shrink-0 group-hover:bg-mint group-hover:text-black transition-all">
                <Phone size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Phone</p>
                <a href="tel:+919425340813" className="text-lg md:text-xl font-bold hover:text-mint transition text-white">+91 94253 40813</a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Social Networks</p>
            <div className="flex flex-wrap gap-4 z-50 relative">
              <Magnetic>
                <a href="https://www.linkedin.com/in/sarthakvaishampayan/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#15171f] border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all text-white shadow-xl">
                  <Linkedin size={22} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="https://github.com/SarthakVaishampayan" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#15171f] border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all text-white shadow-xl">
                  <Github size={22} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="https://leetcode.com/u/sarthakvaishampayan22/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#15171f] border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all text-white shadow-xl">
                  <Code2 size={22} />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        <div className="bg-[#15171f] p-8 md:p-14 rounded-[3xl] border border-gray-800 shadow-2xl relative z-10">
          <form onSubmit={handleSubmit} className="space-y-8 flex flex-col h-full">
            <div>
              <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold block mb-4">Your Name</label>
              <input type="text" name="name" required className="w-full bg-transparent border-b-2 border-gray-800 py-3 text-white text-lg focus:outline-none focus:border-mint transition-colors" />
            </div>
            <div>
              <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold block mb-4">Your Email</label>
              <input type="email" name="email" required className="w-full bg-transparent border-b-2 border-gray-800 py-3 text-white text-lg focus:outline-none focus:border-mint transition-colors" />
            </div>
            <div className="flex-grow">
              <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold block mb-4">Your Message</label>
              <textarea name="message" required className="w-full bg-transparent border-b-2 border-gray-800 py-3 text-white text-lg focus:outline-none focus:border-mint transition-colors resize-none h-32"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-black tracking-[0.2em] uppercase py-5 rounded-full hover:bg-mint hover:scale-[1.02] transition-all mt-auto shadow-2xl text-sm">
              {status || "Send Request"}
            </button>
          </form>
        </div>

      </div>
      <div className="text-center mt-32 text-gray-600 text-xs font-bold uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} SARTHAK VAISHAMPAYAN. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    if (appReady) {
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          once: true,  // Changed to true for smoother UX on premium designs
          mirror: false,
          offset: 50
        });
        AOS.refresh();
      }, 100);
    }
  }, [appReady]);

  return (
    <div className="relative antialiased selection:bg-mint selection:text-black font-sans text-gray-300">
      <Preloader onComplete={() => setAppReady(true)} />
      <Navbar />

      <div className="relative w-full overflow-hidden">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Insights />
        <Contact />
      </div>
    </div>
  );
}

export default App;
