"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
        <div className="h-1.5 w-20 bg-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="relative border-l border-neutral-800 ml-4 md:ml-0 md:left-1/2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-12 relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] md:left-1/2 md:translate-x-[-50%] top-0">
              <div className="w-4 h-4 rounded-full bg-indigo-500 border-4 border-background" />
            </div>

            {/* Content Side */}
            <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="glass-card p-6 rounded-2xl border border-neutral-800/50 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium mb-2">
                  <Calendar size={14} />
                  <span>{exp.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 text-neutral-400 font-medium mb-4">
                  <Briefcase size={14} />
                  <span>{exp.company}</span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-[11px] text-neutral-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Spacer for other side */}
            <div className="hidden md:block md:w-[45%]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
