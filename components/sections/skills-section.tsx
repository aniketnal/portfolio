"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/aceternity-ui/text-reveal";
import { AnimatedGradient } from "@/components/aceternity-ui/animated-gradient";
import { 
  CheckCircle, 
  Code2, 
  Database, 
  Layout, 
  Layers,
  LineChart, 
  Palette, 
  Server,
  Code
} from "lucide-react";

type SkillCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Langugaes",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6 text-primary" />,
    skills: ["Next.js","Reactjs", "HTML/CSS", "JavaScript/TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "Express", "RESTful APIs"],
  },
  {
    id: "database",
    title: "Database",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: [ "Git", "GitHub", "Firebase", "Postman" ,"Vercel", "Netlify"],
  },
  {
    id: "soft",
    title: "Soft Skills",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Agile Methodology"],
  },
];

export default function SkillsSection() {
  return (
    <div id="skills">
      <AnimatedGradient
        containerClassName="py-20 md:py-32"
        gradientColor1="dark:from-gray-950 from-gray-50"
        gradientColor2="dark:to-gray-900 to-gray-100"
        gradientColor3="dark:via-black/30 via-white/30"
        blur="100px"
        shouldAnimate={false}
      >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium">My Expertise</p>
          <TextReveal 
            text="Skills & Technologies"
            className="text-3xl md:text-4xl font-bold mt-2"
          />
          <p className="mt-4 text-muted-foreground">
            A comprehensive overview of my technical capabilities and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-2 text-xl font-bold">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedGradient>
    </div>
  );
}