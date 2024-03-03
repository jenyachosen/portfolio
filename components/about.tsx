'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

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
        After graduating with a degree in{' '}
        <span className="font-medium">Economics</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{' '}
        <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and TypeORM. I am always looking to
        learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p className="mb-3">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        floorball or swimming, watching movies, and walking with friends. I also
        enjoy <span className="font-medium">help people</span> and learning new
        things.
      </p>

      <p className="mb-3">
        I especially try to help{' '}
        <span className="font-medium">displaced people</span> or those who{' '}
        <span className="font-medium">suffered</span> from the{' '}
        <span className="font-bold">war in Ukraine</span>.
      </p>

      <p>Currently I am learning about history and philanthropy.</p>

      {/* <p>
        Currently I live in the peaceful place of Ukraine (only 50 km from Slovakia, the Mukachevo city)
        I am free from army service and can go across the border of Ukraine freely if needed but for personal reasons still wanna live in Ukraine.
      </p> */}
    </motion.section>
  );
}
