import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import {
  LuGraduationCap,
  LuBot,
  LuBriefcase,
  LuCode2,
} from "react-icons/lu";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpo,
  SiFastapi,
  SiTensorflow,
  SiSwagger,
  SiExpress,
  SiOpenai,
  SiScikitlearn,
  SiGithub,
} from "react-icons/si";

export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/joshua-elizondo-abarca/",
  github: "https://github.com/JoshuaEA54",
  resume: "/Joshua_Elizondo_Resume.pdf",
  email: "joshuaeelizondo@gmail.com",
  source_code: "https://github.com/JoshuaEA54/portfolio",
} as const;

export const EXPERIENCES_DATA = [
  {
    title: "Software Developer Intern — Prointec",
    description:
      "Developed, with a teammate, two integrated Odoo modules (Python, PostgreSQL) to control and monitor the company's proprietary modules across its clients' systems. Implemented a secure authorization and approval workflow with email notifications, and designed the communication between both modules before development, which allowed us to work in parallel.",
    icon: React.createElement(LuBriefcase),
    date: "Jul 2026 - Nov 2026",
  },
  {
    title: "Full-Stack Developer, Research Assistant — Universidad Nacional",
    description:
      "Modernized and containerized an institutional academic management platform (Node.js, Express, React, MariaDB) and led its migration from AWS Lightsail to the university's own servers. Built a web platform (React, FastAPI, PostgreSQL) that helps companies assess their information security compliance with international standards such as ISO 27001 and NIST CSF. I also maintain two institutional websites.",
    icon: React.createElement(LuCode2),
    date: "Mar 2026 - Present",
  },
  {
    title: "AI Code Evaluator — Alignerr (Freelance)",
    description:
      "Evaluated and compared code produced by AI coding assistants, applying software engineering judgment to assess correctness, quality and best practices, to improve how AI models write code.",
    icon: React.createElement(LuBot),
    date: "Feb 2026 - May 2026",
  },
  {
    title: "Calculus Tutor — Universidad Nacional",
    description:
      "Taught calculus to first-year engineering students and mentored them in problem-solving and mathematical reasoning.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2024 - Nov 2024",
  },
] as const;

export const PROJECTS_DATA: readonly {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string;
  projectUrl?: string;
}[] = [
  {
    title: "UNAColabora - University-Industry Collaboration Platform",
    description:
      "A platform where companies and Universidad Nacional's students and teachers connect to work on real projects. Built with a teammate over three Systems Engineering courses, from requirements to production. I developed the dashboards for students, teachers, companies and admins, and the API routes behind them.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    imageUrl: "/unacolabora.png",
    projectUrl: "https://colabora.unasrb.org",
  },
  {
    title: "Digital Kids - Progress Reporting Platform for a Daycare",
    description:
      "A web platform for a daycare to share each child's progress with parents, replacing their paper notebooks. Built by a team of 20 students, where I was the Project Manager: I wrote the user stories, planned four two-week sprints across six teams, reviewed each change before integrating it, and re-scoped the project halfway through so we could deliver on time.",
    tags: ["Project Management", "Agile", "Team of 20"],
    imageUrl: "/digitalkids.png",
    projectUrl: "https://invictuskids.com",
  },
  {
    title: "JCraft - Minecraft-Themed Programming Language",
    description:
      "A programming language with Minecraft-inspired syntax in Spanish, designed to help children learn to code. Built with a teammate: lexer, parser, static type checker, interpreter and a desktop IDE. We tested it with 17 sixth-grade students (all learning objectives met; 15 of 16 wanted to keep coding) and presented the research at the XXXIII International Conference on Learning, University of Hong Kong.",
    tags: ["Python", "PySide6", "Compilers", "Research"],
    imageUrl: "/jcraft.png",
    projectUrl: "https://github.com/JoshuaEA54/JCraft",
  },
  {
    title: "EduIA - AI-Powered Quiz Platform for Classrooms",
    description:
      "A web app where teachers turn any study text into a quiz with the OpenAI API, run it live with their class and get an AI summary of where students struggled. Built with a teammate; teacher and student screens stay in sync in real time with Socket.IO.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Socket.IO", "MongoDB"],
    imageUrl: "/eduIA.png",
  },
];

export const SKILLS_DATA = [
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "Java", icon: React.createElement(FaJava) },
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "Express", icon: React.createElement(SiExpress) },
  { name: "FastAPI", icon: React.createElement(SiFastapi) },
  { name: "React Native", icon: React.createElement(SiExpo) },
  { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "MySQL", icon: React.createElement(SiMysql) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "Prisma", icon: React.createElement(SiPrisma) },
  { name: "OpenAI API", icon: React.createElement(SiOpenai) },
  { name: "scikit-learn", icon: React.createElement(SiScikitlearn) },
  { name: "TensorFlow", icon: React.createElement(SiTensorflow) },
  { name: "Docker", icon: React.createElement(FaDocker) },
  { name: "Git", icon: React.createElement(FaGitAlt) },
  { name: "GitHub", icon: React.createElement(SiGithub) },
  { name: "Swagger", icon: React.createElement(SiSwagger) },
] as const;

export const OWNER_NAME = "Joshua Elizondo Abarca";

export const ORIGINAL_AUTHOR_CREDITS = {
  name: "Sanidhya Kumar Verma",
  email: "sanidhya.verma12345@gmail.com",
  github: "https://github.com/sanidhyy",
  repository: "https://github.com/sanidhyy/portfolio",
  license: "MIT",
  message: "Portfolio template by Sanidhya Kumar Verma - MIT License",
} as const;
