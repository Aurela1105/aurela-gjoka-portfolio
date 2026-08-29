import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task Manager',
      description:
        'A modern task manager application for creating, editing, completing, and organizing tasks.',
      technologies: ['Next.js', 'React', 'TypeScript'],
      image: '✅',
      demoLink: '#',
      githubLink: 'https://github.com/Aurela1105/task-manager',
    },
    {
      id: 2,
      title: 'Coffee Shop Website',
      description:
        'A responsive coffee shop website with menu, team section, reviews, and contact area.',
      technologies: ['HTML', 'CSS'],
      image: '☕',
      demoLink: 'https://aurela1105.github.io/coffe-shop-website/#home',
      githubLink: 'https://github.com/Aurela1105/coffe-shop-website',
    },
    {
      id: 3,
      title: 'BurgersWorld',
      description:
        'A modern responsive burger restaurant website built with Next.js and React.',
      technologies: ['Next.js', 'React', 'TypeScript'],
      image: '🍔',
      demoLink: '#',
      githubLink: 'https://github.com/Aurela1105/burgersworld',
    },
    {
      id: 4,
      title: 'Weather App',
      description:
        'A responsive weather application that displays current weather conditions and forecasts using a weather API.',
      technologies: ['Next.js', 'React', 'TypeScript', 'API'],
      image: '🌤️',
      demoLink: 'https://aurela1105.github.io/weather-application/',
      githubLink: 'https://github.com/Aurela1105/weather-application',
    },
    {
      id: 5,
      title: 'Calculator App',
      description:
        'A modern responsive calculator built with JavaScript with full functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '🧮',
      demoLink: 'https://ajajff10-hub.github.io/Calculator/',
      githubLink: 'https://github.com/ajajff10-hub/Calculator',
    },
    {
      id: 6,
      title: 'Dino Jump Game',
      description:
        'A browser game with score tracking, obstacles, pause button, and mobile controls.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '🦕',
      demoLink: 'https://ajajff10-hub.github.io/Jumping-Game/',
      githubLink: 'https://github.com/ajajff10-hub/Jumping-Game',
    },
    {
      id: 7,
      title: 'Math Website',
      description:
        'An interactive mathematics website created to practice and demonstrate web development skills.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '📐',
      demoLink: 'https://aurela1105.github.io/math-website/',
      githubLink: 'https://github.com/Aurela1105/math-website',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for web development.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 75}ms` }}
              className="animate-fadeInUp"
            >
              <div
                onClick={() => {
                  if (project.demoLink !== '#') {
                    window.open(project.demoLink, '_blank');
                  }
                }}
                className={`bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 ${
                  project.demoLink !== '#' ? 'cursor-pointer' : ''
                }`}
              >
                {/* Project Image */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-40 flex items-center justify-center text-6xl overflow-hidden">
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {/* Live Demo */}
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-primary hover:bg-accent text-white py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    {/* Code */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 border-2 border-primary text-primary hover:bg-secondary py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>📝</span>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
