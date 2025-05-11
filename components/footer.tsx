import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
          <Link href="/" className="font-bold text-xl">
            <Image
                src="/assets/logo.png"
                alt="Logo"
                width={100}
                height={60}
              />
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Building elegant digital experiences with a focus on performance and usability.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <h3 className="text-base font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/aniketnal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/aniket-nalegaonkar-a866ba252/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://x.com/a_nalegaonkar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aniket Nalegaonkar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed & developed with passion
          </p>
        </div>
      </div>
    </footer>
  );
}