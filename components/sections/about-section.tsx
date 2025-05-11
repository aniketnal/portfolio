"use client";

import { TextReveal } from "@/components/aceternity-ui/text-reveal";
import { AnimatedCard } from "@/components/aceternity-ui/animated-card";
import { motion } from "framer-motion";
import { Brain, Code, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Development",
      description: "Building cutting-edge web applications with modern technologies and frameworks."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Problem Solving",
      description: "Creating efficient solutions to complex technical challenges."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver outstanding results."
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Continuous Learning",
      description: "Constantly exploring new technologies and improving skills."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/40">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium">About Me</p>
          <TextReveal 
            text="Passionate developer crafting digital experiences"
            className="text-3xl md:text-4xl font-bold mt-2"
          />
          <p className="mt-4 text-muted-foreground">
            With a blend of technical expertise and creative insight, I build solutions that make an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
            > 
            <Users className="w-64 h-64 text-primary/80" />
            </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
            I'm a pre-final year Computer Engineering student with a strong passion for web development. I love building secure, user-friendly digital solutions and constantly exploring new technologies. Focused on creating real-world impact through innovation, I enjoy learning, collaborating, and growing in the tech space.
            </p>
            <p className="text-muted-foreground">
              My approach combines technical expertise with creative problem-solving to develop applications that are not only functional but also intuitive and aesthetically pleasing.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.5 }}
              viewport={{ once: true }}
            >
              <AnimatedCard
                containerClassName="h-full"
                cardClassName="h-full bg-card rounded-xl border p-6 flex flex-col"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground flex-grow">{card.description}</p>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}