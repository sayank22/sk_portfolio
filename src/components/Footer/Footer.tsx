import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  return (
    <footer className="bg-[#2b2b2b] px-4 py-12 lg:px-60 mt-40 flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
      {/* Website Logo/Link */}
      <a href="https://sayan-kundu-portfolio.netlify.app" className="text-sky-400 text-3xl font-semibold">
        <span>sayan-kundu-</span>
        <span>portfolio.netlify.app</span>
      </a>

      {/* Made with React */}
      <div className="flex items-center gap-2 text-sm tracking-wider">
        <p className="text-xl flex items-center gap-2">
          This Website was made with{" "}
          <img
            src={reactIcon}
            alt="React"
            className="w-6 h-6 animate-spin-slow"
          />
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/sayan-kundu-70b5442b6"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" className="w-12" />
        </a>
        <a
          href="https://github.com/sayank22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="w-12" />
        </a>
        <a
          href="https://www.instagram.com/sayankun22/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="w-12" />
        </a>
      </div>
    </footer>
  );
}
