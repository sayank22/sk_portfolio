import { useState } from "react";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import { motion } from "framer-motion";

// Project images
import CodeGeneratorImg from "../../assets/CodeGenerator.png";
import jivakaImg from "../../assets/jivaka.png";
import budgetImg from "../../assets/budgetbuddy.png";
import dropboxImg from "../../assets/dropbox.png";
import snapshowImg from "../../assets/snapshows.png";
import silentPostImg from "../../assets/silentpost.png";

const flipInX = {
  initial: { rotateY: 90, opacity: 0 },
  whileInView: { rotateY: 0, opacity: 1 },
  transition: { duration: 0.6 },
};

export function Project() {
  const [activeProject, setActiveProject] = useState<any | null>(null);

  return (
    <section id="project" className="mt-60 px-4">
      <h2 className="text-4xl text-center mb-12 text-sky-400 font-bold">
        My Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveProject(project)}
            className="cursor-pointer bg-[#1f1f1f] text-white rounded-xl p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f172a] shadow-lg"
            initial={flipInX.initial}
            whileInView={flipInX.whileInView}
            transition={flipInX.transition}
            viewport={{ once: true }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-700"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-sky-400 mb-2">
              {project.title}
            </h3>

            {/* Short Description */}
            <p className="text-white/80 text-sm line-clamp-3">
              {project.description}
            </p>

            {/* Tech */}
            <footer className="mt-4">
              <ul className="flex flex-wrap gap-2 text-xs">
                {project.tech.map((t, i) => (
                  <li
                    key={i}
                    className="bg-sky-950 text-sky-300 px-2 py-1 rounded-full"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </footer>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {activeProject && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            className="bg-[#0f172a] max-w-md w-full rounded-xl p-6 text-white relative"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 text-white/60 hover:text-white"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold text-sky-400 mb-4">
              {activeProject.title}
            </h3>

            {/* Description */}
            <p className="text-white/90 mb-6 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Actions */}
            <div className="flex gap-4">
              <a
                href={activeProject.links[0].href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 transition"
              >
                <img src={githubIcon} alt="github" className="w-5" />
                View Code
              </a>

              <a
                href={activeProject.links[1].href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 transition"
              >
                <img src={externalLink} alt="live" className="w-5" />
                View Live
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

/* ================= DATA ================= */

const projects = [
  {
    title: "AI Testcase Generator",
    description:
      "An AI-powered Test Case Generator that integrates with GitHub to list code files, generate test case summaries. Produce executable test scripts like JUnit, Selenium etc. from selected files and GitHub pull request creation with the generated code.",
    tech: ["Gemini API", "GitHub API(Ocktokit)", "Rest API", "Jest", "React", "Node", "Express", "Tailwind",],
    image: CodeGeneratorImg,
    links: [
      { href: "https://github.com/sayank22/testcase-generator", icon: githubIcon },
      { href: "https://testcase-generator-sayan-kundu.vercel.app", icon: externalLink },
    ],
  },
  {
    title: "Jivaka: Role Based HealthCare Management System",
    description:
      "A role-based healthcare management platform for doctors, hospitals, and patients, with real-time booking and prescription features.",
    tech: ["MongoDb", "Express", "React", "Node", "Framer-Motion", "Clerk", "MUI"],
    image: jivakaImg,
    links: [
      { href: "https://github.com/sayank22/Jivaka", icon: githubIcon },
      { href: "https://jivaka-sayankundu.vercel.app", icon: externalLink },
    ],
  },
  {
    title: "BudgetBuddy",
    description:
      "Track your income and expenses visually. Full CRUD, persistent storage via MongoDB, and clean category-based filtering.",
    tech: ["MongoDb", "Express", "React", "Node", "Redux", "Tailwind"],
    image: budgetImg,
    links: [
      { href: "https://github.com/sayank22/BudgetBuddy", icon: githubIcon },
      { href: "https://budget-buddy-phi-jet.vercel.app/", icon: externalLink },
    ],
  },
  {
    title: "Dropbox Brand Clone",
    description:
      "Frontend clone of Dropbox branding page with animated scroll-triggered grid using GSAP and responsive Tailwind design.",
    tech: ["Next.js", "Typescript", "GSAP", "Tailwind CSS"],
    image: dropboxImg,
    links: [
      { href: "https://github.com/sayank22/Dropbox---clone", icon: githubIcon },
      { href: "https://dropbox-brand-clone-sayankundu.vercel.app/", icon: externalLink },
    ],
  },
  {
    title: "SnapShow",
    description:
      "Create and manage product tours with screenshot uploads, step editor, and dashboard. Supports Clerk login and screen recording.",
    tech: ["MongoDb", "Next.js", "Typescript", "Tailwind", "Cloudinary"],
    image: snapshowImg,
    links: [
      { href: "https://github.com/sayank22/snapshow", icon: githubIcon },
      { href: "https://snapshow-sayankundu.vercel.app/", icon: externalLink },
    ],
  },
  {
    title: "SilentPost",
    description:
      "A secure social media platform with JWT login and real-time post feeds. Anonymous posting and reaction features included.",
    tech: ["MongoDb", "Express", "React", "Node", "CSS"],
    image: silentPostImg,
    links: [
      { href: "https://github.com/sayank22/social-media", icon: githubIcon },
      { href: "https://silentpost-client.vercel.app/", icon: externalLink },
    ],
  },
];
