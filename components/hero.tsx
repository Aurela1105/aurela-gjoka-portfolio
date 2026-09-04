'use client';

import { useState } from 'react';
import { ArrowRight, Globe2, Laptop } from 'lucide-react';

export function Hero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const photoTransform =
    'rotateX(' +
    rotation.x +
    'deg) rotateY(' +
    rotation.y +
    'deg)';

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-20 px-4 md:px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}

          <div className="animate-slideInLeft space-y-6">

            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
              <span className="font-mono text-primary text-lg">
                {'</>'}
              </span>

              <span>JavaScript Developer</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Hi, I&apos;m{' '}

              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Aurela
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              JavaScript Developer
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              I&apos;m a motivated and detail-oriented developer with a strong
              background in Mathematics and Computer Science. I build modern,
              responsive, and user-friendly web applications using JavaScript,
              React.js, HTML, CSS, and Node.js, with a passion for
              problem-solving and continuous learning.
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">

              <button
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View Projects
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary hover:bg-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </button>

            </div>
          </div>

          {/* DESKTOP PROFILE */}

          <div className="hidden md:flex justify-center animate-slideInRight">

            <div
              className="relative w-80 h-80"
              style={{
                perspective: '1000px',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >

              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-accent/20 blur-2xl animate-pulse" />

              {/* Pulse ring */}

              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-ping opacity-20" />

              {/* Main orbit */}

              <div className="absolute -inset-7 rounded-full border border-primary/20 animate-[spin_14s_linear_infinite]" />

              {/* Globe */}

              <div className="absolute -inset-7 animate-[spin_14s_linear_infinite]">

                <div className="absolute top-1/2 -right-3 -translate-y-1/2">

                  <div className="w-10 h-10 rounded-full bg-background/95 backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/20 flex items-center justify-center">

                    <Globe2
                      size={22}
                      className="text-primary animate-[spin_6s_linear_infinite]"
                    />

                  </div>

                </div>

              </div>

              {/* Second orbit */}

              <div className="absolute -inset-12 rounded-full border border-accent/10 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Lightning */}

              <div className="absolute -inset-12 animate-[spin_10s_linear_infinite_reverse]">

                <div className="absolute top-1/2 -left-4 -translate-y-1/2">

                  <div className="text-accent text-2xl drop-shadow-lg">
                    ⚡
                  </div>

                </div>

              </div>

              {/* Fixed programmer symbols */}

              <div className="absolute -top-4 left-7 text-primary font-mono font-bold text-xl select-none">
                {'{ }'}
              </div>

              <div className="absolute bottom-6 -right-6 text-accent font-mono font-bold text-xl select-none">
                {'</>'}
              </div>

              {/* Interactive photo */}

              <div
                className="absolute inset-4 rounded-full transition-transform duration-200 ease-out"
                style={{
                  transform: photoTransform,
                  transformStyle: 'preserve-3d',
                }}
              >

                <div className="absolute -inset-2 rounded-full bg-linear-to-br from-primary to-accent opacity-30 blur-md" />

                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/90 bg-background">

                  <img
                    src="/aurela-gjoka-portfolio/ella.jpeg"
                    alt="Aurela Gjoka"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                </div>

              </div>

              {/* Laptop */}

              <div className="absolute -top-7 -right-8 w-14 h-14 rounded-2xl bg-background/95 backdrop-blur-md border border-primary/20 shadow-xl flex items-center justify-center animate-float">

                <Laptop
                  size={27}
                  className="text-primary"
                />

              </div>

              {/* Status */}

              <div className="absolute -bottom-3 -left-8 bg-background/90 backdrop-blur-md border border-primary/20 shadow-xl rounded-full px-4 py-2 flex items-center gap-2 animate-float">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />

                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />

                </span>

                <span className="text-sm font-medium whitespace-nowrap">
                  Available for projects
                </span>

              </div>

            </div>

          </div>

          {/* MOBILE PROFILE */}

          <div className="flex md:hidden justify-center">

            <div className="relative w-64 h-64">

              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-accent/20 blur-2xl animate-pulse" />

              {/* Pulse ring */}

              <div className="absolute -inset-3 rounded-full border-2 border-primary/20 animate-ping opacity-20" />

              {/* Main orbit */}

              <div className="absolute -inset-6 rounded-full border border-primary/20 animate-[spin_12s_linear_infinite]" />

              {/* Globe */}

              <div className="absolute -inset-6 animate-[spin_12s_linear_infinite]">

                <div className="absolute top-1/2 -right-2 -translate-y-1/2">

                  <div className="w-8 h-8 rounded-full bg-background border border-primary/30 shadow-lg flex items-center justify-center">

                    <Globe2
                      size={17}
                      className="text-primary"
                    />

                  </div>

                </div>

              </div>

              {/* Lightning */}

              <div className="absolute -inset-9 animate-[spin_9s_linear_infinite_reverse]">

                <div className="absolute top-1/2 -left-3 -translate-y-1/2 text-accent text-xl">
                  ⚡
                </div>

              </div>

              {/* Fixed symbols */}

              <div className="absolute -top-3 left-4 text-primary font-mono font-bold text-lg">
                {'{ }'}
              </div>

              <div className="absolute bottom-4 -right-4 text-accent font-mono font-bold text-lg">
                {'</>'}
              </div>

              {/* Photo */}

              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-white">

                <img
                  src="/aurela-gjoka-portfolio/ella.jpeg"
                  alt="Aurela Gjoka"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Laptop */}

              <div className="absolute -top-4 -right-4 w-11 h-11 rounded-xl bg-background shadow-lg border border-primary/20 flex items-center justify-center animate-float">

                <Laptop
                  size={21}
                  className="text-primary"
                />

              </div>

              {/* Mobile status */}

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-md border border-primary/20 shadow-xl rounded-full px-4 py-2 flex items-center gap-2">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />

                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />

                </span>

                <span className="text-xs font-medium whitespace-nowrap">
                  Available for projects
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

