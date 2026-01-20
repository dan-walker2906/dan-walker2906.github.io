"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s build something <span className="gradient-text">extraordinary</span> together.</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Open for senior engineering roles, architectural consultations, or high-impact freelance opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 rounded-xl">
                  <Mail className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Email</p>
                  <p className="text-neutral-200">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 rounded-xl">
                  <MessageSquare className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Chat</p>
                  <p className="text-neutral-200">LinkedIn Messaging</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all text-neutral-400"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 focus:border-indigo-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 focus:border-indigo-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <textarea 
                rows={4}
                placeholder="Your Message" 
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 focus:border-indigo-500 outline-none transition-colors resize-none"
                required
              />
            </div>
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 text-center text-neutral-600 text-sm">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Framer Motion & Love.</p>
      </footer>
    </section>
  );
}
