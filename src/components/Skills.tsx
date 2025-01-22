import React from 'react'
import { FadeInView } from './FadeInView'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise & Technologies
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-6">
              <FadeInView>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Mobile Development
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "React Native",
                    "iOS",
                    "Android",
                    "Expo",
                    "Mobile UI/UX",
                  ].map((skill) => (
                    <SkillCard key={skill} skill={skill} />
                  ))}
                </div>
              </FadeInView>
            </div>
            <div className="space-y-6">
              <FadeInView>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  Machine Learning
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "TensorFlow",
                    "PyTorch",
                    "Computer Vision",
                    "NLP",
                    "Deep Learning",
                  ].map((skill) => (
                    <SkillCard key={skill} skill={skill} />
                  ))}
                </div>
              </FadeInView>
            </div>
            <div className="space-y-6">
              <FadeInView>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Data Science
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Python",
                    "Pandas",
                    "Scikit-learn",
                    "Data Visualization",
                    "Statistical Analysis",
                  ].map((skill) => (
                    <SkillCard key={skill} skill={skill} />
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>
  )
}
