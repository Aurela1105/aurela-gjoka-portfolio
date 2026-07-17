'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-20 px-4 md:px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft space-y-6">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
              <Sparkles size={18} />
              <span>Welcome to my portfolio</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Aurela Gjoka
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Frontend Developer
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              I build modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React. Let&apos;s create something amazing together.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary hover:bg-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="hidden md:flex justify-center animate-slideInRight">
            <div className="relative w-72 h-80">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white hover:shadow-3xl transition-all duration-300">
                <img
                  src="/profile.png"
                  alt="Aurela Gjoka - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
