import React from 'react'
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Mobile App",
                description:
                  "A React Native application leveraging machine learning for real-time object detection and classification.",
              },
              {
                title: "Data Analytics Platform",
                description:
                  "Advanced data visualization and analysis platform built with Python and React Native.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#1e293b] rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div className="h-48 bg-[#0f172a]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    whileHover={{
                      x: 5,
                    }}
                  >
                    View Project <FaExternalLinkAlt size={16} className="ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  )
}
