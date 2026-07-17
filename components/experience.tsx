import { CheckCircle2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'Education',
      icon: '🎓',
      title: 'Master\'s in Mathematics & Computer Science',
      description: 'University of Tirana (2021-2023) - Advanced studies in mathematical principles and computational techniques.',
      skills: [
        'Advanced Mathematics',
        'Algorithm Design',
        'Data Structures',
        'Machine Learning Fundamentals',
        'Statistical Analysis',
      ],
    },
    {
      type: 'Education',
      icon: '📚',
      title: 'Bachelor\'s in Mathematics & Computer Science',
      description: 'Universiteti Aleksander Moisiu (2018-2021) - Strong foundation in core computer science and mathematics.',
      skills: [
        'Programming Fundamentals',
        'Mathematics',
        'Problem Solving',
        'Software Development',
        'Analytical Thinking',
      ],
    },
  ];

  const workExperience = [
    {
      title: 'Administrative Assistant',
      company: 'Meliá Hotels International',
      period: 'Feb 2024 - Nov 2025',
      description: 'Organized and proactive administrative support for executives and teams in hospitality industry.',
      skills: ['Office Management', 'Calendar Coordination', 'Correspondence', 'Meeting Coordination'],
    },
    {
      title: 'Data Entry Specialist',
      company: 'MVA (Keystone Social)',
      period: 'Sep 2022 - Jan 2024',
      description: 'Detail-oriented data entry specialist managing large volumes of financial data accurately and efficiently.',
      skills: ['Data Management', 'Data Analysis', 'Software Proficiency', 'Attention to Detail'],
    },
    {
      title: 'Investor Services Representative',
      company: 'Teleperformance',
      period: 'Sep 2020 - Jun 2022',
      description: 'Provided high-quality support to investors handling inquiries and processing investment-related requests.',
      skills: ['Customer Service', 'Investment Management', 'Communication', 'Problem Solving'],
    },
    {
      title: 'Educator & Teacher',
      company: 'SFC (Specialist Finance Centre)',
      period: 'Jan 2020 - Jun 2020',
      description: 'Created engaging lesson plans and delivered effective instruction in financial education.',
      skills: ['Teaching', 'Instruction Design', 'Student Development', 'Communication'],
    },
    {
      title: 'English Tutor',
      company: 'Peace Corps',
      period: 'Feb 2019 - Dec 2019',
      description: 'Enthusiastic tutor helping students achieve academic success with focus on English language proficiency.',
      skills: ['Tutoring', 'Teaching', 'English Proficiency', 'Student Engagement'],
    },
  ];

  const timeline = [
    {
      year: '2018-2021',
      title: 'Bachelor\'s Degree',
      description: 'Completed Bachelor\'s in Mathematics & Computer Science at Universiteti Aleksander Moisiu.',
    },
    {
      year: '2021-2023',
      title: 'Master\'s Degree',
      description: 'Earned Master\'s in Mathematics & Computer Science from University of Tirana.',
    },
    {
      year: '2019-2025',
      title: 'Professional Experience',
      description: 'Gained diverse experience in education, administration, customer support, and data management.',
    },
    {
      year: '2025-Present',
      title: 'Frontend Development Journey',
      description: 'Transitioned to frontend development, combining technical skills with professional experience.',
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

        {/* Work Experience */}
        <div className="my-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Professional Experience</h3>
          
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fadeInUp"
              >
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{job.title}</h4>
                      <p className="text-primary font-semibold text-sm">{job.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm whitespace-nowrap ml-4">{job.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-primary font-medium border border-primary/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Education Journey</h3>
          
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
