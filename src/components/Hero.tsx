"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { MapPin, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm mb-8">
          <MapPin size={14} className="text-indigo-400" />
          <span>{personalInfo.location}</span>
          <span className="w-1 h-1 bg-neutral-700 rounded-full mx-1" />
          <span className="text-indigo-400 font-medium">Available for select projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          I&apos;m <span className="gradient-text">{personalInfo.name}</span>
          <br />
          <span className="text-neutral-200">{personalInfo.role}</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
          {personalInfo.tagline} With <span className="text-white font-semibold">{personalInfo.experience_years} of professional journey</span>, I architect enterprise solutions that bridge business needs and technical power.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
          >
            Work with me <ArrowRight size={18} />
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neutral-900 border border-neutral-800 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-neutral-800 transition-all"
          >
            Download CV <Download size={18} />
          </motion.a>
        </div>

        <div className="mt-16 flex items-center gap-6">
          {socialLinks.map((social) => (
            <a 
              key={social.label} 
              href={social.href} 
              className="text-neutral-500 hover:text-indigo-400 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
