import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import codesharePic from "@/public/Codeshare-port-pic.png";
import smartCar from "@/public/ai-car-port-bg.png";
import techRecruiter from "@/public/techRecruiter-port-bg.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const experiencesData = [
  {
    employer: "Auda",
    title: "Software Engineer",
    description:
      "Auda is a mobile app which allows users to Share and discover new music with friends. Auda builds technologies that help people connect, find communities, and grow businesses around music. We used technologies like React Native, Expo, Node.js, Express, Redux, and Google Cloud. We also want to put an emphasis on community-created content like playlists and events. Please reach out with any concerns, bugs, or ideas!",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    employer: "ReacType",
    title: "Software Engineer",
    description:
      "ReacType, is an innovative prototyping interface that empowers users to visualize their application architecture dynamically. With its intuitive drag-and-drop canvas interface and interactive, real-time component code preview, ReacType facilitates seamless collaboration, connection with peers.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  [
    {
      title: "Codeshare",
      description:
        "Web app which allows users to share code snippets and connect around tech backgrounds and interests.",
      tags: ["React", "Node.js", "Express.js", "MUI", "MongoDB", "Redux"],
      imageUrl: codesharePic,
    },
  ],
  [
    {
      title: "SmartCar",
      description:
        "I developed an AI car using vanilla JavaScript, leveraging OOP and machine learning to enable autonomous navigation through a neural network of sensors.",
      tags: ["JavaScript", "HTML5", "CSS", "OOP", "ML", "AI", "NN"],
      imageUrl: smartCar,
    },
  ],
  [
    {
      title: "TechRecruiter",
      description:
        "I developed a web app to streamline tech job searches. The platform simplifies the process, offering advanced search features and real-time updates.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: techRecruiter,
    },
  ],
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Next.js",
  "Node",
  "Express",
  "Redux",
  "Redux Toolkit",
  "React Native",
  "Tailwind.css",
  "Framer-Motion",
  "HTML",
  "CSS",
  "Expo Router",
  "Socket.io",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "Postgres",
  "Docker",
  "Kubernetes",
  "AWS",
  "Git",
  "Webpack",
  "Vite",
  "Three.js",
  "Shadcd/ui",
  "Aceturnity",
  "AutoCAD",
  "PhotoShop",
  "Figma",
] as const;
