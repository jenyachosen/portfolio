import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hlmImg from "@/public/hlm.png";
import oliasoftImg from "@/public/oliasoft.png";
import varigImg from "@/public/varig.png";
import chromeriverImg from "@/public/chromeriver.png";
import ringcentralImg from "@/public/ringcentral.png";
import mdconsultImg from "@/public/md.png";
import icsImg from "@/public/ics.png";

export const links = [
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

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HCM",
    description:
      "A big automated HR processes system with control of all changes in documents and careers of workers.",
    tags: ["React", "Zustand", "react-query", "mui", "cypress"],
    imageUrl: hlmImg,
  },
  {
    title: "Oliasoft",
    description:
      "Huge oil and gas project which visualizes the production of oil and gas in the ocean, prevents risks during the installation.",
    tags: ["React", "Redux-toolkit", "D3.js", "Node", "PostgreSQL", "cypress"],
    imageUrl: oliasoftImg,
  },
  {
    title: "Varig",
    description:
      "Varig is a company on a mission to empower those who own, manage, or rent commercial real estate in making their buildings sustainable.",
    tags: ["React", "Apollo", "styled-components", "graphQl", "jest"],
    imageUrl: varigImg,
  },
  {
    title: "ChromeRiver",
    description:
      "Huge US financial portal with counting expenses and invoices.",
    tags: ["React", "Apollo", "styled-components", "graphQl", "cypress"],
    imageUrl: chromeriverImg,
  },
  {
    title: "RingCentral",
    description:
      "Development of a robust a big marketing site mostly built on AEM",
    tags: ["AEM", "JavaScript", "Java", "dynamoDB"],
    imageUrl: ringcentralImg,
  },
  {
    title: "CVPool",
    description:
      "On that HR platform users can record video while they will answer to the questions and will send it to the client for preview.",
    tags: ["React", "Apollo", "mui", "graphQl", "django"],
    imageUrl: mdconsultImg,
  },
  {
    title: "ICS",
    description:
      "Built a lot of marketing layouts on jquery, some of them were built on vue framework.",
    tags: ["React", "Vue", "jQuery", "REST"],
    imageUrl: icsImg,
  },
] as const;

export const skillsData = [
  "Scss",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Apollo",
  "Node.js",
  "GraphQL",
  "Express",
  "Git",
  "TypeORM",
  "MongoDB",
  "PostgreSQL",
  "Python",
] as const;
