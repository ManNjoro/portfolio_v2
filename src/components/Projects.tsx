import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import projects from "@/api/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#1e293b] rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Lazy-loaded image with blur effect */}
              <div className="h-48 bg-[#0f172a] relative overflow-hidden">
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                  placeholderSrc="/placeholder-image.jpg" // Optional low-res placeholder
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                {/* Technology tags */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project link (auto-detects GitHub) */}
                <div className="flex items-center justify-between mt-auto">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.url.includes('github.com') ? (
                      <>
                        View Code <FaGithub size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        View Project <FaExternalLinkAlt size={16} className="ml-1" />
                      </>
                    )}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}