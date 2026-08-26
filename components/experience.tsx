import { CheckCircle2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'Education',
      icon: '🎓',
      title: 'Frontend Development Student',
      description: 'Currently learning and mastering modern web development technologies.',
      skills: [
        'HTML, CSS, JavaScript',
        'React & Modern Frameworks',
        'Git & GitHub Version Control',
        'Responsive Web Design',
        'API Integration',
      ],
    },
    {
      type: 'Experience',
      icon: '💼',
      title: 'Junior Finance Background',
      description: 'Bringing organizational and analytical skills to my development work.',
      skills: [
        'Attention to Detail',
        'Data Organization',
        'Documentation',
        'Problem Solving',
        'Analytical Thinking',
      ],
    },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Started Learning Web Development',
      description: 'Began the journey into frontend development with HTML, CSS, and JavaScript.',
    },
    {
      year: '2024',
      title: 'Built First Projects',
      description: 'Created multiple projects to strengthen fundamental skills and understanding.',
    },
    {
      year: '2024-2025',
      title: 'Advanced Learning',
      description: 'Diving deep into React, API integration, and modern development practices.',
    },
    {
      year: 'Present',
      title: 'Continuous Growth',
      description: 'Building projects, contributing to open source, and expanding my skillset.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fadeInUp"
            >
              <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{exp.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {exp.type}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">{exp.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  {exp.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">My Journey</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-fadeInUp"
                >
                  <div className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="md:w-1/2">
                      <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300">
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                          {item.year}
                        </p>
                        <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex md:w-0 justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
