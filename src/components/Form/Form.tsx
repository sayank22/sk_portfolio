import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
  const [state, handleSubmit] = useForm("xknkpqry");
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email successfully sent!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="mt-40 text-center text-white">
        <h3 className="text-2xl font-semibold">Thanks for getting in touch!</h3>
        <button
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md uppercase hover:bg-green-600"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to the top
        </button>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="mt-12 grid place-items-center text-sky-400">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in touch using the form</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-2xl px-4"
      >
        <input
          placeholder="Your Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
          className="p-4 rounded-xl bg-transparent border border-white placeholder-white text-white font-semibold focus:outline-none"
        />
        <input
          placeholder="Your Name"
          id="name"
          type="text"
          name="name"
          required
          className="p-4 rounded-xl bg-transparent border border-white placeholder-white text-white font-semibold focus:outline-none"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Send a message"
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          className="p-4 rounded-xl h-52 resize-none bg-transparent border border-white placeholder-white text-white font-semibold focus:outline-none"
        />
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
          className="mt-4 px-10 py-3 uppercase bg-green-500 hover:bg-green-600 disabled:bg-gray-500 rounded-xl text-white font-bold transition"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
