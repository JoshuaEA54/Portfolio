import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaFigma,
  FaDocker,
  FaBootstrap,
} from "react-icons/fa";
import { LuGraduationCap, LuShieldCheck, LuPencil } from "react-icons/lu";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiJest,
  SiVercel,
  SiJsonwebtokens,
  SiZod,
  SiFirebase,
  SiExpo,
  SiFastapi,
  SiTensorflow,
  SiSwagger,
  SiOracle,
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
  resume: "/resume_joshua_2025.pdf",
  email: "joshuaeelizondo@gmail.com",
  source_code: "https://github.com/JoshuaEA54/portfolio",
} as const;

export const EXPERIENCES_DATA = [
  {
    title: "Full-Stack Developer — Centro de Escritura UNA",
    description:
      "Platform for National University's Writing Center that manages bookings for tutoring, workshops, and academic resources for students. I modernized and configured the entire stack (Node.js + Express + React + MariaDB) with Docker, and led the migration from the AWS server to the university's local infrastructure.",
    icon: React.createElement(LuPencil),
    date: "2026 - Present",
  },
  {
    title: "SICS — Security Compliance Platform",
    description:
      "Compliance web platform that gives Costa Rican businesses a structured way to evaluate their security posture against 6 international standards (ISO 27001, NIST CSF) and national law — making a process previously requiring expensive consultants accessible and guided. Built end-to-end with FastAPI, PostgreSQL, React/TypeScript, and Google OAuth in collaboration with the Vice-Dean of Universidad Nacional de Costa Rica.",
    icon: React.createElement(LuShieldCheck),
    date: "2026 - Present",
  },
  {
    title: "Calculus Tutor, Universidad Nacional",
    description:
      "Provided comprehensive calculus instruction to first-year engineering students and mentored students in problem-solving techniques and mathematical reasoning.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const PROJECTS_DATA = [
  {
    title: "UNAColabora - Academic Collaboration Platform",
    description:
      "Platform that bridges the Universidad Nacional de Costa Rica with the private sector, enabling students and teachers to find and manage real-world collaboration opportunities.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Tailwind CSS",
      "REST API",
      "RBAC",
      "Multi-tenant",
      "Docker",
    ],
    imageUrl: "/unacolabora.png",
    projectUrl: "https://colabora.unasrb.org",
  },
  {
    title: ":JCraft - Minecraft-Themed Programming Language",
    description:
      "An educational programming language with Minecraft-inspired syntax (Spanish keywords) built to lower the barrier to entry for children learning to code. Includes a full interpreter pipeline and an integrated IDE. Validated through classroom sessions and child interviews.",
    tags: [
      "Python",
      "PySide6",
      "Language Design",
      "Interpreter",
      "Compilers",
      "Research",
    ],
    imageUrl: "/jcraft.png",
    projectUrl: "https://github.com/JoshuaEA54/JCraft",
  },
  {
    title: "EduIA - AI-Powered Learning Platform",
    description:
      "Revolutionary educational platform reducing quiz creation time by 90%, and real-time student's feedback analysis by the AI.",
    tags: ["Next.js", "OpenAI", "WebSockets", "OAuth", "TypeScript", "Sanity"],
    imageUrl: "/eduIA.png",
    projectUrl: "https://eduia.up.railway.app/",
  },
] as const;

export const SKILLS_DATA = [
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "React Native", icon: React.createElement(SiExpo) },
  { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
  { name: "Bootstrap", icon: React.createElement(FaBootstrap) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "FastAPI", icon: React.createElement(SiFastapi) },
  { name: "TensorFlow", icon: React.createElement(SiTensorflow) },
  { name: "Prisma", icon: React.createElement(SiPrisma) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "MySQL", icon: React.createElement(SiMysql) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "Firebase", icon: React.createElement(SiFirebase) },
  { name: "Supabase", icon: React.createElement(SiSupabase) },
  { name: "Oracle DB", icon: React.createElement(SiOracle) },
  { name: "Docker", icon: React.createElement(FaDocker) },
  { name: "Swagger", icon: React.createElement(SiSwagger) },
  { name: "JWT", icon: React.createElement(SiJsonwebtokens) },
  { name: "Zod", icon: React.createElement(SiZod) },
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
