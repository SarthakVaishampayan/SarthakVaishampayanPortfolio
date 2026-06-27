export const services = [
  { icon: "Code", title: "Full Stack Development", desc: "Building scalable web applications using React, Node.js, and modern frameworks. Experience with both frontend and backend development." },
  { icon: "PenTool", title: "UI/UX Design", desc: "Creating intuitive and visually appealing user interfaces with Figma. Focus on user-centric design and seamless experiences." },
  { icon: "Database", title: "Database Management", desc: "Designing and optimizing relational databases with MySQL and MongoDB. Expertise in data modeling and query optimization." },
];

export const projects = [
  {
    title: "VenuePro SaaS",
    category: "Multi-Tenant Platform",
    desc: "One Platform for Every Venue — a full-stack SaaS platform managing 4 business types: pool/snooker parlours, cricket/football turfs, pickleball courts, and gaming zones. Features include multi-tenant architecture with tenant isolation, subscription management with auto-invoicing, real-time session tracking, staff management, and advanced analytics across 4 portals — Super Admin, Owner, Staff, and Player. Built with a module dispatcher pattern for plug-in business types, JWT auth with refresh token rotation, and an event-driven notification engine (in-app + email).",
    tags: ["React 19", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Recharts", "Swagger", "Nodemailer"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "https://venuepro.live"
  },
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

export const skillCategories = [
  {
    title: "Languages",
    icon: "Terminal",
    items: [
      { name: "C / C++", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    title: "Frameworks & Libs",
    icon: "FileCode2",
    items: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Bootstrap", level: 88 }
    ]
  },
  {
    title: "Tools & Software",
    icon: "Wrench",
    items: [
      { name: "Git", level: 88 },
      { name: "Power BI", level: 78 },
      { name: "MySQL", level: 85 },
      { name: "MS Excel", level: 82 },
      { name: "Figma", level: 80 },
      { name: "MongoDB", level: 84 }
    ]
  },
  {
    title: "Core Competencies",
    icon: "BrainCircuit",
    items: [
      { name: "DSA", level: 85 },
      { name: "Operating Systems", level: 80 },
      { name: "OOPs", level: 88 },
      { name: "Web Dev", level: 92 },
      { name: "Computer Networks", level: 78 }
    ]
  }
];

export const insights = [
  {
    category: "Web Development",
    date: "Oct 2024",
    title: "Building Scalable React Applications",
    desc: "Best practices and patterns I learned while developing enterprise-level applications at DRDO.",
    time: "5 min read"
  },
  {
    category: "Data Analytics",
    date: "Sep 2024",
    title: "Power BI Dashboard Design Tips",
    desc: "How to create effective and visually appealing dashboards that drive business decisions.",
    time: "4 min read"
  },
  {
    category: "System Design",
    date: "Aug 2024",
    title: "Optimizing Resource Allocation Systems",
    desc: "Lessons learned from designing workflow management systems that save 100+ hours annually.",
    time: "6 min read"
  }
];

export const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Technical Lead, DRDO",
    avatar: "RS",
    text: "Sarthak's work on our employee management system was exceptional. He architected a robust RBAC system that now serves 5,000+ users with impeccable reliability. His ability to grasp complex domain requirements and translate them into clean, scalable code sets him apart.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Product Manager, TechVerse",
    avatar: "PP",
    text: "Working with Sarthak on the BookYourGame platform was a fantastic experience. He delivered a complex real-time booking system with separate dashboards for owners and users ahead of schedule. His attention to UX details made all the difference.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "Co-founder, StartupLab",
    avatar: "AV",
    text: "Sarthak built our collaborative drawing platform from the ground up. The real-time syncing with Socket.io was flawlessly implemented. He's the kind of full-stack developer who doesn't just code — he solves business problems.",
    rating: 5
  },
  {
    name: "Neha Gupta",
    role: "Senior Developer, WebCraft",
    avatar: "NG",
    text: "I've seen Sarthak's portfolio projects and they demonstrate an impressive depth of technical skill. His VenuePro SaaS platform showcases enterprise-grade architecture patterns — multi-tenancy, real-time tracking, subscription management. Truly production-quality work.",
    rating: 5
  }
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sarthakvaishampayan/",
  github: "https://github.com/SarthakVaishampayan",
  leetcode: "https://leetcode.com/u/sarthakvaishampayan22/",
  email: "sarthakvaishampayan22@gmail.com",
  phone: "+91 94253 40813"
};
