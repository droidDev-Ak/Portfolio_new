import React from "react";
import { FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="relative w-full bg-[#020617] text-slate-400 py-32 overflow-hidden">

      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />


      <div id="contact" className="absolute -top-24 h-1 w-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-10">
        

        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-white whitespace-nowrap">
            <span className="text-indigo-400 font-mono text-xl mr-2">05.</span> 
            Get In Touch
          </h2>
          <div className="h-[1px] w-full max-w-md bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          

          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Let's build something <span className="text-indigo-400">extraordinary.</span>
            </h3>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-sm">
              I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="space-y-6 pt-4">
              <a href="mailto:you@example.com" className="group flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-indigo-500/30 transition-all">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Email Me</p>
                  <p className="font-semibold">official.akash203@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Location</p>
                  <p className="font-semibold">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 opacity-30">
              <p className="text-xs font-mono uppercase tracking-[0.4em]">
                // availability: 2025 open
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Minimal Form */}
          <div className="lg:col-span-7">
            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 rounded-lg bg-slate-900/50 text-slate-200 border border-slate-800 focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-600 font-medium"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 rounded-lg bg-slate-900/50 text-slate-200 border border-slate-800 focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-600 font-medium"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-lg bg-slate-900/50 text-slate-200 border border-slate-800 focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-600 font-medium"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="How can I help you?"
                required
                className="w-full px-6 py-4 rounded-lg bg-slate-900/50 text-slate-200 border border-slate-800 focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-600 font-medium resize-none"
              />

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all duration-300 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20"
              >
                Send Message
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>


        <footer className="mt-32 pb-10 text-center">
           <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em]">
             Built with React & Passion by Akash Kumar
           </p>
        </footer>
      </div>
    </section>
  );
}