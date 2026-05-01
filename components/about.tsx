"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-20 max-w-[45rem] text-center leading-8  scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I'm a <b className="font-medium">7th-semester Information Systems Engineering</b> student at
        Universidad Nacional, Costa Rica (6/8 semesters completed successfully).
        I specialize in <b className="font-medium">full-stack web development</b> with technologies like
        <b className="font-medium"> Next.js, TypeScript, React, PostgreSQL, and Prisma</b>.
      </p>

      <p className="mb-3">
        This semester I shipped <b className="font-medium">UNAColabora</b> (
        <a href="https://colabora.unasrb.org" target="_blank" rel="noopener noreferrer" className="underline">
          colabora.unasrb.org
        </a>
        ), an academic collaboration platform connecting UNA's university community with companies —
        built with <b className="font-medium">Next.js, TypeScript, PostgreSQL, and Prisma</b>.
        I'm also building <b className="font-medium">Plantia</b>, a mobile botanical diary in
        <b className="font-medium"> React Native (Expo)</b> with a FastAPI + Firebase backend,
        and training a <b className="font-medium">fraud detection model</b> using Python, TensorFlow,
        and scikit-learn for my AI course.
      </p>

      <p className="mb-3">
        In my research course I'm finalizing a study on <b className="font-medium">JCraft</b>, a
        Minecraft-themed educational programming language I built in Python — complete with a
        custom lexer, type checker, interpreter, and integrated IDE. The research involved real
        sessions and interviews with children to evaluate its impact on learning to code.
      </p>

      <p>
        I'm actively looking for <b className="font-medium">job opportunities, internships, and
        freelance projects</b>. I'm driven by continuous learning, AI innovation, and building
        tools that genuinely help people.
      </p>
    </motion.section>
  );
};

export default About;
