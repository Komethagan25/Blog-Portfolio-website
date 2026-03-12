import React from "react";

function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Hire Me</h2>

      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 w-full mb-3"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="border p-2 w-full mb-3"
      />

      <textarea
        placeholder="Project Details"
        className="border p-2 w-full mb-3"
      />

      <button className="button-style w-full">
        Send Message
      </button>
    </div>
  );
}

export default Contact;