import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Coffee Shop Website',
      description: 'A responsive coffee shop website with menu, team section, reviews, and contact area.',
      technologies: ['HTML', 'CSS'],
      image: '☕',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Calculator App',
      description: 'A modern responsive calculator built with JavaScript with full functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '🧮',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Dino Jump Game',
      description: 'A browser game with score tracking, obstacles, pause button, and mobile controls.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '🦕',
      demoLink: '#',
      githubLink: '#',
    },
{
  id: 4,
  title: 'Weather App',
  description: 'A weather application using an API to show current weather conditions and forecasts.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
  image: '🌤️',
  demoLink: '#',
  githubLink: '#',
},
    {
      id: 5,
      title: 'Todo App',
      description: 'A task manager with add, delete, edit, filter, and local storage functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '✅',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Movie Search App',
      description: 'A movie search app that displays movie details using an API integration.',
      technologies: ['React', 'API'],
      image: '🎬',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 75}ms` }}
              className="animate-fadeInUp"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary transition-all duration-300 group flex flex-col h-full hover:-translate-y-2">
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
                    <a
                      href={project.demoLink}
                      className="flex-1 bg-primary hover:bg-accent text-white py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
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
