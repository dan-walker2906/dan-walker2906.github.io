import { 
  Code2, 
  Terminal, 
  Database, 
  Layers, 
  Github, 
  Linkedin, 
  Mail, 
  Award,
  ExternalLink,
  Cpu,
  Monitor
} from "lucide-react";

export const navLinks = [
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
];

export const personalInfo = {
  name: "Darpan Parekh",
  role: "Senior Software Developer",
  location: "Pune, India",
  experience_years: "5+",
  tagline: "Building scalable ERP ecosystems and high-performance web applications with engineering excellence.",
  email: "darpan.parekh@example.com", // Replace with actual
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const experiences = [
  {
    title: "Senior Software Developer",
    company: "Bista Solutions",
    location: "Pune, India",
    description: "Leading core development for enterprise ERP systems. Spearheading the migration from Odoo 14 to 16, resulting in significant performance improvements and feature enhancements. Awarded the Q4 2024 Super Squad Award for outstanding contributions.",
    icon: Award,
    date: "2022 - Present",
    skills: ["Python", "Odoo", "Owl JS", "PostgreSQL", "System Design"]
  },
  {
    title: "Software Engineer",
    company: "Brainvire Infotech",
    location: "Ahmedabad, India",
    description: "Developed and maintained robust backend services using Python. Focused on optimizing database queries and implementing complex business logic for global clients.",
    icon: Terminal,
    date: "2020 - 2022",
    skills: ["Python", "Odoo", "JavaScript", "SQL"]
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    description: "Delivered custom web solutions for various startups. Specialized in building MVPs and digitizing manual workflows for small businesses.",
    icon: Code2,
    date: "2019 - 2020",
    skills: ["React", "Python", "Flask", "Tailwind CSS"]
  },
];

export const skillsData = [
  {
    category: "Languages & Core",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "TypeScript", level: 80 },
    ],
    icon: Code2,
  },
  {
    category: "Frameworks & ERP",
    items: [
      { name: "Odoo (14-17)", level: 98 },
      { name: "Owl JS", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "React", level: 88 },
    ],
    icon: Layers,
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 75 },
      { name: "Linux Server", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
    icon: Database,
  },
];

export const projectsData = [
  {
    title: "Go-Parking",
    description: "A comprehensive parking management system with real-time slot tracking, automated billing, and a user-friendly reservation dashboard.",
    tags: ["Python", "Flask", "PostgreSQL", "Bootstrap"],
    imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop",
    link: "#",
    icon: Monitor,
  },
  {
    title: "Digital Logic Helper",
    description: "An educational tool designed to help students simulate and visualize digital logic gates and Boolean algebraic expressions.",
    tags: ["React", "Canvas API", "Algorithms"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    link: "#",
    icon: Cpu,
  },
  {
    title: "Odoo Enterprise Sync",
    description: "High-performance synchronization engine between Odoo core and third-party logistics providers, handling 10k+ daily transactions.",
    tags: ["Python", "XML-RPC", "Odoo 16", "Redis"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "#",
    icon: Terminal,
  },
];

export const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];
