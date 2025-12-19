import React from "react";

export default function Contact() {
  return (
    <section
      className="
        relative
        w-full
        bg-[#020617]
        text-gray-300
        py-32
        z-10
        isolate
      "
    >
      <div
        id="contact"
        className="absolute -top-24 h-[60vh] w-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-semibold text-gray-200">
            Contact
          </h2>
          <div className="mt-3 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind, want to collaborate, or just want to talk?
            I’m always open to meaningful conversations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="
              relative
              rounded-2xl
              border border-white/10
              bg-[#0f172a]/80
              backdrop-blur-lg
              p-10
              shadow-[0_25px_70px_rgba(0,0,0,0.6)]
            "
          >
            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    bg-white/5
                    text-gray-200
                    border border-white/10
                    focus:outline-none
                    focus:border-indigo-400/50
                    focus:ring-1 focus:ring-indigo-400/30
                  "
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    bg-white/5
                    text-gray-200
                    border border-white/10
                    focus:outline-none
                    focus:border-indigo-400/50
                    focus:ring-1 focus:ring-indigo-400/30
                  "
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    bg-white/5
                    text-gray-200
                    border border-white/10
                    resize-none
                    focus:outline-none
                    focus:border-indigo-400/50
                    focus:ring-1 focus:ring-indigo-400/30
                  "
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-indigo-500
                  text-white
                  font-medium
                  transition-all duration-300
                  hover:bg-indigo-600
                  hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)]
                "
              >
                Send Message
              </button>
            </form>

            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
