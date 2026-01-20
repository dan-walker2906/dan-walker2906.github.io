"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-neutral-400 max-w-xl">
            A selection of professional and academic projects that demonstrate my problem-solving capabilities.
          </p>
        </div>
        <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors flex items-center gap-2">
          View all projects <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.link} className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform">
                  <Github size={20} />
                </a>
                <a href={project.link} className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <project.icon size={20} />
                </div>
                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-bold py-1 px-2 bg-neutral-900 text-neutral-500 rounded border border-neutral-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
