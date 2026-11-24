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
        I&apos;ve been into technology for as long as I can remember, and what I enjoy most is
        seeing an idea become something people actually use.
      </p>

      <p className="mb-3">
        I&apos;m finishing my degree in{" "}
        <b className="font-medium">Information Systems Engineering</b> at Universidad Nacional,
        where I spent the last couple of years building{" "}
        <b className="font-medium">full-stack web applications</b> for real projects, both inside
        the university and for a consulting firm.
      </p>

      <p className="mb-3">
        I also enjoy the people side of software. As PM of{" "}
        <b className="font-medium">Digital Kids</b>, I coordinated a team of 20 to deliver a
        progress-reporting platform for a daycare. With <b className="font-medium">JCraft</b>, an
        educational programming language we designed for children, I presented our research at
        the University of Hong Kong.
      </p>

      <p>
        I work mainly with{" "}
        <b className="font-medium">TypeScript, React, Node.js and Python</b>, and right now
        I&apos;m learning to build applications with large language models. I&apos;m open to{" "}
        <b className="font-medium">Software Engineer roles</b> and ready to start right away.
      </p>
    </motion.section>
  );
};

export default About;
