import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import projects from "@/api/projects";
import { loading } from "@/logos";
import { GITHUB } from "@/constants";

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
                  placeholderSrc={loading}
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

        {/* Check More Projects Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Check More Projects on GitHub
            <FaArrowRight className="ml-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}