import React from "react";
import { FadeInView } from "./FadeInView";
import {
  django,
  javascript,
  mysql,
  nodejs,
  python,
  reactjs,
  tailwind,
  typescript,
  vite,
} from "../logos";
import { SkillCard } from "./SkillCard";

export interface Skill {
  title: string;
  logo: string;
}

const skills: Skill[] = [
  {
    title: "django",
    logo: django,
  },
  {
    title: "javascript",
    logo: javascript,
  },
  {
    title: "mysql",
    logo: mysql,
  },
  {
    title: "nodejs",
    logo: nodejs,
  },
  {
    title: "python",
    logo: python,
  },
  {
    title: "react",
    logo: reactjs,
  },
  {
    title: "tailwind",
    logo: tailwind,
  },
  {
    title: "typescript",
    logo: typescript,
  },
  {
    title: "vite",
    logo: vite,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#1e293b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Expertise & Technologies
          </h2>
        </FadeInView>
        <FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {skills.map((skill, index) => (
              <SkillCard title={skill.title} key={index} logo={skill.logo} />
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
