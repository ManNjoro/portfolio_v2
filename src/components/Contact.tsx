import { motion } from "framer-motion";
import React, { useRef, useState } from 'react';
import { BsSendArrowUp } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FadeInView } from './FadeInView';
import { Link } from "react-router-dom";
import { GITHUB, LINKEDIN } from "@/Constants";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [notification, _setNotification] = useState(null);
  const setNotification = (message) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification(null);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("loading");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PK
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("success");
          setNotification("Message sent successfully!");
          // alert('');
        },
        (error) => {
          console.log(error.text);
          setFormStatus("error")
          setNotification(
            "Failed to send the message, please try again later."
          );
          // alert('');
        }
      );
    setFormStatus("idle")
    e.target.reset();
  };
  return (
    <section id="contact" className="py-20 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and build something
              amazing together.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeInView>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/20 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Your name"
                    name='name'
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/20 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                    name="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/20 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Your message..."
                    name='message'
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {formStatus === "loading" ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <BsSendArrowUp size={16} />
                      </>
                    )}
                  </span>
                </motion.button>
                {formStatus === "success" && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="text-green-400 text-center"
                  >
                    {notification}
                  </motion.p>
                )}
                {formStatus === "error" && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="text-red-400 text-center"
                  >
                    {notification}
                  </motion.p>
                )}
              </form>
            </FadeInView>
            <FadeInView>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-gray-400">
                    Whether you have a project in mind or just want to chat
                    about technology, I'm always open to discussing new
                    opportunities and ideas.
                  </p>
                </div>
                <div className="space-y-4">
                  <Link
                    to="mailto:elijohnmwoho@gmail.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <MdMail size={20} />
                    <span>elijohnmwoho@gmail.com</span>
                  </Link>
                  <Link
                    to={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </Link>
                  <Link
                    to={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>GitHub Profile</span>
                  </Link>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
  )
}
