import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_aomcdmf", "template_bjxnjon", form.current, {
        publicKey: "ee5qxU8UX24yvSNMw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center py-12 ">
      <div className="form-container flex flex-col max-w-lg w-full bg-pink-100 shadow-md rounded-lg p-6 text-black">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black text-center">
          Contact Me
        </h2>
        <form
          className="flex flex-col space-y-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="text-black font-bold text-sm sm:text-base">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border rounded-lg p-2 mb-4 w-full text-sm sm:text-base"
          />

          <label className="text-black font-bold text-sm sm:text-base">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border rounded-lg p-2 mb-4 w-full text-sm sm:text-base"
          />

          <label className="text-black font-bold text-sm sm:text-base">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="border rounded-lg p-2 mb-4 w-full text-sm sm:text-base"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-600 text-white rounded-lg p-3 text-sm sm:text-base hover:bg-pink-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
