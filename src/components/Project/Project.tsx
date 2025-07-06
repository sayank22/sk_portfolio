import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

// New: Add local images (or URLs) for each project
import jivakaImg from "../../assets/jivaka.png";
import budgetImg from "../../assets/budgetbuddy.png";
import dropboxImg from "../../assets/dropbox.png";
import snapshowImg from "../../assets/snapshows.png";
import silentPostImg from "../../assets/silentpost.png";

export function Project() {
  return (
    <section id="project" className="mt-60 px-4">
      <h2 className="text-4xl text-center mb-12 text-sky-400 font-bold">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div className="bg-[#1f1f1f] text-white rounded-xl p-4 flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0f172a] shadow-lg">
              
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-700"
              />

              {/* Header Links */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-sky-400">{project.title}</h3>
                <div className="flex gap-3">
                  {project.links.map((link, i) => (
                    <a key={i} href={link.href} target="_blank" rel="noreferrer">
                      <img src={link.icon} alt="link-icon" className="w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-white/90 text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Tech List */}
              <footer className="mt-auto">
                <ul className="flex flex-wrap gap-2 text-xs">
                  {project.tech.map((t, i) => (
                    <li
                      key={i}
                      className="bg-sky-950 text-sky-300 px-2 py-1 rounded-full tracking-wide"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}

// Updated with image per project
const projects = [
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
