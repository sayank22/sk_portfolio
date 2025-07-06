import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Hello from "../../assets/Hello.gif";
import sayankundu from "../../assets/sayankundu.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 pt-40 lg:px-24 bg-transparent"
    >
      {/* Left Text Section */}
      <div className="text-white flex-1 text-center lg:text-left">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="text-3xl mb-2">
            Hello <img src={Hello} alt="Hello" className="inline w-5" /> I'm
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1 className="text-5xl md:text-6xl font-bold">Sayan Kundu</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3 className="text-3xl bold text-teal-500 mt-4 mb-6">
            Full Stack Developer
          </h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <BrowserRouter>
            <NavHashLink
              smooth
              to="#contact"
              className="inline-block bg-sky-500 text-white px-12 py-6 rounded-md text-2xl font-medium hover:bg-sky-600 transition"
            >
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="flex justify-center lg:justify-start gap-6 mt-10">
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
          </div>
        </ScrollAnimation>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center">
  <ScrollAnimation animateIn="fadeInRight" delay={1000}>
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
  </ScrollAnimation>
</div>
    </section>
  );
}
