export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slideInLeft space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate frontend developer with a foundation in finance, bringing a unique perspective of organization and attention to detail to every project. I thrive on creating clean, intuitive, and responsive web experiences that users love.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey into web development started with a desire to build beautiful digital solutions. I&apos;m constantly learning and improving my skills in modern web technologies, with a focus on React, JavaScript, and responsive design.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open-source projects, or documenting my learning journey. I believe in writing clean code and creating user-centered designs that make a difference.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Strengths</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Building responsive, mobile-first web applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Clean, maintainable, and well-documented code
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Attention to detail and user experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Problem-solving and analytical thinking
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="animate-slideInRight">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To craft beautiful, functional, and accessible web experiences that solve real problems and delight users. I&apos;m committed to continuous learning and staying updated with the latest web technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
