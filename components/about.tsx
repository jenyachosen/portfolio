"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        <span className="font-medium">Economics</span> graduate who found a true
        calling in programming through a full-stack coding bootcamp. I thrive on
        the <span className="italic">problem-solving</span> aspects of
        development, relishing the moment when a solution clicks. Proficient in{" "}
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">TypeScript</span>,{" "}
        <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">MongoDB</span>, with familiarity in{" "}
        <span className="font-medium">Postgres</span> and{" "}
        <span className="font-medium">Prisma</span>. Constantly exploring new
        technologies, I'm on the lookout for a full-time or part-time software
        developer role.
      </p>
      <p className="mb-3">
        Outside of coding, I enjoy <span className="italic">taekwondo</span>,{" "}
        <span className="italic">swimming</span>,{" "}
        <span className="italic">walking</span>, and{" "}
        <span className="italic">reading books</span>
      </p>
      {/* <p className="mb-3">
        Committed to helping those affected by the{" "}
        <span className="font-bold">war in Ukraine</span>, I dedicate time to
        support displaced individuals. Currently delving into history and
        philanthropy to broaden my horizons.
      </p> */}

      {/* <p>
        I'm completely free from military service and can cross the border of
        Ukraine without any issues. However, for personal reasons, I prefer to
        stay in Ukraine, Mukachevo, Transcarpathia. I live in a peaceful area
        and am exempt from military service. I can also cross the Ukrainian
        border without any issues. However, for my ministry work with kids and
        soldiers, I prefer to stay in Mukachevo, Transcarpathia, Ukraine.
      </p> */}
    </motion.section>
  );
}
