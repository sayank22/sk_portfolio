import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <section id="contact" className="mt-40 px-4">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-sky-400 font-medium">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
        {/* Email Contact Box */}
        <div className="flex items-center justify-center gap-4 w-full max-w-md bg-teal-500 rounded-xl p-6 transition-colors hover:bg-red-400">
          <a href="mailto:sayank10023@gmail.com">
            <img src={emailIcon} alt="Email" className="w-10" />
          </a>
          <a
            href="mailto:sayank10023@gmail.com"
            className="font-medium text-black hover:text-white transition-colors"
          >
            sayank10023@gmail.com
          </a>
        </div>

        {/* Phone Contact Box */}
        <div className="flex items-center justify-center gap-4 w-full max-w-md bg-teal-500 rounded-xl p-6 transition-colors hover:bg-red-400">
          <a href="tel:+916289867688">
            <img src={phoneIcon} alt="Phone No" className="w-10" />
          </a>
          <a
            href="tel:+916289867688"
            className="font-medium text-black hover:text-white transition-colors"
          >
            (+91) 6289867688
          </a>
        </div>
      </div>

      <Form />
    </section>
  );
}
