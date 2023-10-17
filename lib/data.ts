import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
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
    location: "Odessa Ukraine",
    description:
      "I graduated from IT STEP school after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Front-End Developer",
    location: "Odessa Ukraine",
    description:
      "I worked as a front-end developer for 1 year there. I had a lot of experience with building layouts.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Front-End Developer",
    location: "Odessa Ukraine",
    description:
      "Involved in developing Vue and React applications uses Apollo and GraphQL technologies. Worked closely with the principal to deliver new products and resolve issues.",
    icon: React.createElement(FaVuejs),
    date: "2017 - 2018",
  },
  {
    title: "Front-End Developer",
    location: "Odessa Ukraine",
    description:
      "Developed from scratch a new module of the ui part of settings area of the app. Implemented new components that were reusable throughout the project.",
    icon: React.createElement(FaReact),
    date: "2018 - 2019",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote/Hybrid",
    description:
      "Established core architecture of the ui including security, best practices and standards to increase production efficiency. Developed a library of reusable React components. Wrote unit and e2e tests for.",
    icon: React.createElement(FaReact),
    date: "2020 - Present",
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
