

import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import redux from "../../assets/redux.svg";
import nestjs from "../../assets/nextjs.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import materialui from "../../assets/materialui.svg";
import nodejs from "../../assets/nodejs.svg";
import postgresql from "../../assets/postgresql.svg";
import mysql from "../../assets/mysql.svg";
import mongodb from "../../assets/mongodb.svg";
import cloudinary from "../../assets/cloudinary.svg";
import firebase from "../../assets/firebase.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import vercel from "../../assets/vercel.svg";
import netlify from "../../assets/netlify.svg";
import vscode from "../../assets/vscode.svg";
import figma from "../../assets/figma.svg";
import postman from "../../assets/postman.svg";
import expressjs from "../../assets/expressjs.png";
import render from "../../assets/render.jpg";

import React from "react";
import { motion } from "framer-motion";

// Import all icons as you already did
// ...

interface Skill {
  name: string;
  icon: string;
}

interface SkillBoxProps {
  title: string;
  skills: Skill[];
  color: "blue" | "green" | "yellow";
}

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills }) => (
  <motion.div
    className="rounded-2xl p-6 bg-teal-500 shadow hover:bg-red-400 transition-all w-full"
    {...fadeIn(0.2)}
  >
    <h4 className="text-4xl font-bold text-blue-700 mb-4 text-center">{title}</h4>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <div key={i} className="flex flex-col items-center text-sm">
          <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-4" />
          <span className="text-gray-100 text-xl text-center whitespace-nowrap">{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export function About() {
  const frontendSkills: Skill[] = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Vue", icon: vueIcon },
    { name: "Bootstrap", icon: boostrapIcon },
    { name: "Tailwind", icon: tailwindcss },
    { name: "Material UI", icon: materialui },
    { name: "Redux", icon: redux },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", icon: nodejs },
    { name: "Express.js", icon: expressjs },
    { name: "Next.js", icon: nestjs },
    { name: "Python", icon: python },
    { name: "Java", icon: java },
    { name: "MySQL", icon: mysql },
    { name: "PostgreSQL", icon: postgresql },
    { name: "MongoDB", icon: mongodb },
    { name: "Firebase", icon: firebase },
    { name: "Cloudinary", icon: cloudinary },
  ];

  const toolsSkills: Skill[] = [
    { name: "WordPress", icon: wordpress },
    { name: "Shopify", icon: shopify },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Vercel", icon: vercel },
    { name: "Netlify", icon: netlify },
    { name: "Render", icon: render },
    { name: "VS Code", icon: vscode },
    { name: "Figma", icon: figma },
    { name: "Postman", icon: postman },
  ];

  return (
    <div id="about" className="px-4 py-16 lg:px-20 bg-[#111827] text-white">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full">
          <motion.h2 className="text-4xl font-bold text-sky-400 mb-6 border-b-2 border-sky-600 inline-block pb-2" {...fadeIn()}>
            About Me
          </motion.h2>

          <motion.p className="text-2xl leading-relaxed text-gray-300 mb-6" {...fadeIn(0.1)}>
            Hi there! I'm <span className="font-semibold text-white">Sayan</span>, a passionate Software Engineer skilled in web development and scalable software solutions.
          </motion.p>

          <motion.p className="text-2xl leading-relaxed text-gray-300 mb-6" {...fadeIn(0.2)}>
            I build responsive web applications, design interactive user interfaces with intuitive UX, and implement robust backend services.
          </motion.p>

          <motion.div
            className="bg-[#1f2937] border border-sky-700 rounded-lg p-6 shadow-md mt-4"
            {...fadeIn(0.3)}
          >
            <h3 className="text-2xl font-semibold text-sky-400 mb-2">Education</h3>
            <h4 className="text-xl font-medium text-teal-300 mb-1">B.Tech in Computer Science</h4>
            <p className="text-gray-400">Netaji Subhash Engineering College, Kolkata | 2021 - 2025</p>
          </motion.div>
        </div>
      </div>

      {/* Skills */}
      <motion.h3 className="text-xl text-sky- mb-2" {...fadeIn(0.4)}>
        Here are some of the skills I've worked with:
      </motion.h3>
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <SkillBox title="Frontend" skills={frontendSkills} color="blue" />
        <SkillBox title="Backend" skills={backendSkills} color="green" />
        <SkillBox title="Tools & Platforms" skills={toolsSkills} color="yellow" />
      </div>
    </div>
  );
}
