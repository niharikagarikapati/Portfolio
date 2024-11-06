
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
    <div >
      <div className="form-container flex flex-col max-w-md mx-auto p-3  bg-pink-100 shadow-md rounded-lg text-black">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">
          Contact Me
        </h2>
        <form
          action="/submit"
          className="flex flex-col"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="text-black font-bold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border rounded-lg p-2 mb-4 w-full"
          />

          <label className="text-black font-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border rounded-lg p-2 mb-4 w-full"
          />

          <label className="text-black font-bold">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="border rounded-lg p-2 mb-4 w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-600 text-white rounded-lg p-2 hover:bg-pink-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
