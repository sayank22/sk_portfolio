import React from "react";
import { motion } from "framer-motion";

/* =======================
   Types
======================= */
interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string[];
  techStack: string[];
  logo: string;
}

/* =======================
   Data
======================= */
const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "MathSense Academy",
    role: "Full Stack Developer",
    duration: "October 2025 – Present",
    location: "Remote",
    logo: "/images/mathsense.png",
    description: [
      "Developed a scalable full-stack EdTech platform to manage students, courses, batches, exams, and fee workflows for a mathematics coaching institute",
      "Built role-based student and admin dashboards with real-time profile management, batch assignment, fee tracking, and automated email notifications",
      "Implemented dynamic course management for short- and long-term programs, enabling class-wise creation, editing, activation, and lifecycle control",
      "Designed and delivered a secure exam system supporting Excel-to-JSON MCQ uploads, class- and batch-wise exam assignment, timed auto-submission, and automated evaluation workflows"
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Firebase",
      "Tailwind CSS",
      "JWT",
      "Nodemailer",
      "Editor.js",
      "React Quill",
      "XLSX",
      "Multer"
    ]
  },
  {
    id: 2,
    company: "Scalenow Technosolutions Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "June 2025 – October 2025",
    logo: "/images/scalenow.jpeg",
    description: [
      "Developed a full-stack FinTech SPA using Next.js and TypeScript with secure MongoDB data storage and Google Sheets API integration for automated exports",
      "Improved performance and UX by implementing city-based salary calculations and reducing page load time by ~15% through frontend optimizations"
    ],
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "TypeScript",
      "Google Sheets API",
      "Clerk"
    ]
  }
];

/* =======================
   Animations
======================= */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

/* =======================
   Component
======================= */
const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 flex justify-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-20 text-sky-400">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-sky-700/60">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-20 ml-8 relative"
            >
              {/* Dot */}
              <span className="absolute -left-[14px] top-6 w-7 h-7 bg-sky-500 rounded-full border-4 border-[#020617]" />

              {/* Card */}
              <div className="bg-[#0f172a] rounded-2xl p-6 md:p-8 shadow-xl border border-sky-900/40 hover:border-sky-500/40 transition">
                {/* Header */}
                <div className="flex items-center gap-6">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-20 h-20 object-contain rounded-md bg-white/5 p-2"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-sky-400">
                      {exp.role}
                    
                    <span className="ml-2 text-sm text-gray-400">
                      {exp.duration}
                    </span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="mt-6 space-y-3 text-gray-300 text-xl leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
