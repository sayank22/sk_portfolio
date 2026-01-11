import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Hello from "../../assets/Hello.gif";
import sayankundu from "../../assets/sayankundu.jpg";

/* =======================
   Animations
======================= */
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

const fadeInRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { delay, duration: 0.6 },
});

/* =======================
   Roles
======================= */
const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Developer",
  "Programmer",
];

/* =======================
   Component
======================= */
export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 pt-40 lg:px-24 bg-transparent"
    >
      {/* Left Text Section */}
      <div className="text-white flex-1 text-center lg:text-left">
        <motion.p className="text-3xl mb-2 text-teal-500" {...fadeInUp()}>
          Hello <img src={Hello} alt="Hello" className="inline w-6 ml-1" /> I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-sky-400"
          {...fadeInUp(0.2)}
        >
          Sayan Kundu
        </motion.h1>

        {/* Rotating Title */}
        <div className="relative h-10 overflow-hidden mt-4 mb-6">
          <AnimatePresence mode="wait">
            <motion.h3
              key={roles[index]}
              className="absolute w-full text-4xl font-semibold text-teal-500 text-center lg:text-left"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {roles[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center lg:justify-start gap-6 mt-10"
          {...fadeInUp(0.8)}
        >
          <a
            href="https://github.com/sayank22"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-sky-500 p-1 rounded-md hover:bg-sky-600 transition"
          >
            <img src={githubIcon} alt="GitHub" className="w-12 h-12" />
          </a>

          <a
            href="https://www.linkedin.com/in/sayan-kundu-70b5442b6"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={linkedin} alt="LinkedIn" className="w-14 h-14" />
          </a>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <motion.div className="flex-1 flex justify-center" {...fadeInRight(0.6)}>
        <img
          src={sayankundu}
          alt="Sayan Kundu"
          className="
            w-[300px] h-[300px]
            lg:w-[400px] lg:h-[400px]
            xl:w-[500px] xl:h-[500px]
            rounded-full object-cover
            border-8 border-teal-400
            shadow-xl
            transition-all duration-500
            hover:scale-105 hover:shadow-2xl hover:border-sky-400
          "
        />
      </motion.div>
    </section>
  );
}
