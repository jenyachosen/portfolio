import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import hlmImg from '@/public/hlm.png';
import actsBookImg from '@/public/actsbook.png';
import oliasoftImg from '@/public/oliasoft.png';
import varigImg from '@/public/varig.png';
import chromeriverImg from '@/public/chromeriver.png';
import ringcentralImg from '@/public/ringcentral.png';
import mdconsultImg from '@/public/md.png';
import icsImg from '@/public/ics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Odessa Ukraine',
    description:
      'I graduated from IT STEP school after six months of study and promptly landed a job as a Frontend Developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2016',
  },
  {
    title: 'Frontend Developer',
    location: 'Odessa Ukraine',
    description:
      'I worked as a Frontend Developer there for a year, gaining extensive experience in building layouts.',
    icon: React.createElement(CgWorkAlt),
    date: '2016 - 2017',
  },
  {
    title: 'Frontend Developer',
    location: 'Odessa Ukraine',
    description:
      'Involved in developing Vue and React applications using Apollo and GraphQL technologies. Collaborated closely with the principal to deliver new products and address issues.',
    icon: React.createElement(FaVuejs),
    date: '2017 - 2018',
  },
  {
    title: 'Frontend Developer',
    location: 'Odessa Ukraine',
    description:
      "Developed a new module for the app's settings UI from scratch. Implemented reusable components across the project.",
    icon: React.createElement(FaReact),
    date: '2018 - 2019',
  },
  {
    title: 'Fullstack Developer',
    location: 'Remote/Hybrid',
    description:
      'Established the core UI architecture, emphasizing security, best practices, and standards to enhance production efficiency. Developed a library of reusable React components and wrote unit and end-to-end tests.',
    icon: React.createElement(FaReact),
    date: '2020 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'ActsBook',
    description:
      'Scripture App that lets you read and study Text individually or with others',
    tags: ['React', 'GraphQl', 'Festify', 'Objection.js', 'Postgres'],
    imageUrl: actsBookImg,
    link: 'https://actsbook.io/en',
  },
  {
    title: 'HCM',
    description:
      'An automated HR system that manages and tracks all changes in employee documents and career progressions.',
    tags: ['React', 'Zustand', 'Angular', 'React-Query', 'Mui', 'Cypress'],
    imageUrl: hlmImg,
    link: 'https://hcm.lt/en/',
  },
  {
    title: 'Oliasoft',
    description:
      'A major oil and gas project that visualizes offshore production and mitigates installation risks.',
    tags: ['React', 'Redux-Toolkit', 'D3.js', 'Node', 'PostgreSQL', 'Cypress'],
    imageUrl: oliasoftImg,
    link: 'https://www.oliasoft.com/',
  },
  {
    title: 'Varig',
    description:
      'Varig is dedicated to helping commercial real estate owners, managers, and renters make their buildings sustainable.',
    tags: ['React', 'Apollo', 'GraphQl', 'Jest', 'Express'],
    imageUrl: varigImg,
    link: 'https://www.varig.tech/en/',
  },
  {
    title: 'ChromeRiver',
    description:
      'A large US financial portal for tracking expenses and managing invoices.',
    tags: ['React', 'Apollo', 'GraphQl', 'Cypress', 'Express'],
    imageUrl: chromeriverImg,
    link: 'https://www.emburse.com/products/enterprise',
  },
  {
    title: 'RingCentral',
    description:
      'Development of a robust, large-scale marketing site primarily built on Adobe Experience Manager (AEM).',
    tags: ['AEM', 'JavaScript', 'Java', 'DynamoDB'],
    imageUrl: ringcentralImg,
    link: 'https://www.ringcentral.com/',
  },
  {
    title: 'CVPool',
    description:
      'On this HR platform, users can record videos answering questions and send them to clients for review.',
    tags: ['React', 'Apollo', 'Mui', 'GraphQl', 'Django'],
    imageUrl: mdconsultImg,
    link: 'https://md-recruitment.com/',
  },
  {
    title: 'ICS',
    description:
      'Built a lot of marketing layouts on jquery, some of them were built on vue framework.',
    tags: ['React', 'Vue', 'JQuery', 'PHP'],
    imageUrl: icsImg,
    link: 'https://jeyakoroll.github.io/masterprofy/',
  },
] as const;

export const skillsData = [
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next',
  'Node',
  'GraphQL',
  'Express',
  'Prisma',
  'TypeORM',
  'MongoDB',
  'Postgres',
  'Docker',
] as const;
