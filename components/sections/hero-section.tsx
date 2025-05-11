"use client";

import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/aceternity-ui/typing-text";
import { AnimatedGradient } from "@/components/aceternity-ui/animated-gradient";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <AnimatedGradient
      containerClassName="min-h-screen flex items-center"
      gradientColor1="dark:from-gray-950 from-gray-50"
      gradientColor2="dark:to-gray-900 to-gray-100"
      gradientColor3="dark:via-black/30 via-white/30"
      blur="100px"
    >
      <div id="home" className="max-w-screen-xl mx-auto px-4 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center xl:ml-52">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-primary font-medium"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              >
                Aniket Nalegaonkar
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-4 text-xl md:text-2xl text-muted-foreground"
              >
                I'm a{" "}
                <TypingText
                  text="Full Stack Engineer"
                  className="text-foreground font-medium"
                />
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-md"
            >
              Crafting elegant, user-centric digital experiences with clean code and thoughtful design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="rounded-full">
                <Download className="mr-2 h-4 w-4" /> <a href="https://drive.google.com/file/d/1yAxvGiTMH5Yy6v4xlSWuw0DPIclZDo6S/view?usp=sharing">Download Resume</a>
              </Button>
              
              <Button variant="ghost" size="icon" className="rounded-full">
                <Link href="https://github.com/aniketnal" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent z-10 rounded-2xl" />
              <Image
                src="/assets/profile.jpeg"
                alt="Aniket Nalegaonkar"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/10 backdrop-blur-md" />
          </motion.div>
        </div>
      </div>
    </AnimatedGradient>
  );
}