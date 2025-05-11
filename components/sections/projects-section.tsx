"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/aceternity-ui/text-reveal";
import { Spotlight } from "@/components/aceternity-ui/spotlight";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

type ProjectCategory = "All" | "Web" | "Mobile" | "Design";

type Project = {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "GoRSVP - An Event Management App",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    category: "Web",
    image: "/assets/gorsvp.png",
    githubUrl: "https://github.com/aniketnal/GoRSVP",
    liveUrl: "https://go-rsvp.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", ]
  },
  {
    id: 2,
    title: "KharchaBuddy - Because every rupee counts",
    description: "An OCR based expense tracker that helps you manage your finances effortlessly.",
    category: "Mobile",
    image: "/assets/kharchabuddy.png",
    githubUrl: "https://github.com/aniketnal/KharchaBuddy",
    technologies: ["React Native", "Firebase", "Expo"]
  },
  {
    id: 3,
    title: "Detoxify-Youtube",
    description: "A youtube extension to keep you focused and productive by blocking distracting content.",
    category: "Web",
    image: "/assets/detoxify.png",
    githubUrl: "https://github.com/aniketnal/detoxify-youtube",
    technologies: ["Javascript","Manifest V3", "HTML", "CSS", ]
  },
  {
    id: 4,
    title: "Twitter Clone",
    description: "A Twitter clone with real-time messaging, user authentication, and a responsive design.",
    category: "Design",
    image: "/assets/clone.png",
    githubUrl: "https://github.com/aniketnal/Twitter-Clone-Tailwind",
    technologies: ["HTML","Tailwind CSS"]
  },
  
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const categories: ProjectCategory[] = ["All", "Web", "Mobile", "Design"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium">My Work</p>
          <TextReveal 
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold mt-2"
          />
          <p className="mt-4 text-muted-foreground">
            Explore my recent projects and the technologies I've worked with.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className="rounded-full px-6"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Spotlight className="rounded-xl overflow-hidden">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center gap-4">
                      {project.githubUrl && (
                        <Button size="icon" variant="secondary" className="rounded-full" asChild>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="icon" variant="secondary" className="rounded-full" asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">Live Demo</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary font-medium hover:text-primary/80"
                  >
                    View Details
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}