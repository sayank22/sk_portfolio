import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Hello from "../../assets/Hello.gif";
import sayankundu from "../../assets/sayankundu.jpg";

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

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 pt-40 lg:px-24 bg-transparent"
    >
      {/* Left Text Section */}
      <div className="text-white flex-1 text-center lg:text-left">
        <motion.p className="text-3xl mb-2" {...fadeInUp()}>
          Hello <img src={Hello} alt="Hello" className="inline w-5" /> I'm
        </motion.p>

        <motion.h1 className="text-5xl md:text-6xl font-bold" {...fadeInUp(0.2)}>
          Sayan Kundu
        </motion.h1>

        <motion.h3
          className="text-3xl font-semibold text-teal-500 mt-4 mb-6"
          {...fadeInUp(0.4)}
        >
          Full Stack Developer
        </motion.h3>

        <motion.div {...fadeInUp(0.8)}>
          <BrowserRouter>
            <NavHashLink
              smooth
              to="#contact"
              className="inline-block bg-sky-500 text-white px-12 py-6 rounded-md text-2xl font-medium hover:bg-sky-600 transition"
            >
              Contact
            </NavHashLink>
          </BrowserRouter>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-start gap-6 mt-10"
          {...fadeInUp(1)}
        >
          <a
            href="https://www.linkedin.com/in/sayan-kundu-70b5442b6"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="w-14 h-14" />
          </a>
          <a
            href="https://github.com/sayank22"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="w-14 h-14" />
          </a>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <motion.div className="flex-1 flex justify-center" {...fadeInRight(1)}>
        <img
          src={sayankundu}
          alt="sayankundu"
          className="
            w-[300px] h-[300px]
            sm:w-[300px] sm:h-[300px]
            md:w-[300px] md:h-[300px]
            lg:w-[400px] lg:h-[400px]
            xl:w-[500px] xl:h-[500px]
            rounded-full object-cover border-8 border-teal-400 shadow-xl
            transition-all duration-500 ease-in-out
            hover:scale-105 hover:shadow-2xl hover:border-sky-400
          "
        />
      </motion.div>
    </section>
  );
}
