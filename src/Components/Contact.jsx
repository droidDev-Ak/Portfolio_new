import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-16 text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-2xl w-full border border-white/20">
        <h2 className="text-4xl font-bold mb-2 text-center text-white">
          Let's Connect
        </h2>
        <p className="text-center text-gray-300 mb-8 text-sm">
          Got a project idea, collaboration, or just want to say hi? Drop a message below!
        </p>

        <form
          action="https://formspree.io/f/yourformid" // replace with your Formspree ID
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl"
          >
            🚀 Send Message
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-8">
          I usually reply within 24 hours. Looking forward to hearing from you!
        </p>
      </div>
    </div>
  );
}
