export function Skills() {
  const skills = [
    { name: 'HTML', icon: '🏗️' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Git', icon: '🔀' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Responsive Design', icon: '📱' },
    { name: 'Figma', icon: '🎭' },
    { name: 'API Integration', icon: '🔗' },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-fadeInUp"
            >
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary border border-border transition-all duration-300 group cursor-pointer hover:-translate-y-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              category: 'Frontend Development',
              skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Responsive Design', 'Accessibility'],
            },
            {
              category: 'Tools & Platforms',
              skills: ['Git & GitHub', 'Figma', 'VS Code', 'NPM/Yarn', 'Chrome DevTools', 'Terminal/CLI'],
            },
            {
              category: 'Other Skills',
              skills: ['API Integration', 'Rest API', 'Problem Solving', 'Web Performance', 'SEO Basics', 'Documentation'],
            },
          ].map((section, idx) => (
            <div
              key={section.category}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="animate-fadeInUp"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
