import { GraduationCap } from 'lucide-react';

export function Experience() {
  const education = [
    {
      degree: 'Master of Science in Mathematics and Computer Science',
      university: 'Aleksandër Moisiu University, Durrës',
      date: 'Nov 2021 – Jul 2023',
    },
    {
      degree: 'Bachelor’s Degree in Mathematics and Computer Science',
      university: 'Aleksandër Moisiu University, Durrës',
      date: 'Oct 2018 – Jul 2021',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center justify-center mb-4">
            <GraduationCap
              size={48}
              className="text-primary"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <div
              key={item.degree}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              className="animate-fadeInUp"
            >
              <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-xl hover:border-primary transition-all duration-300 hover:-translate-y-1">

                <div className="flex flex-col md:flex-row md:items-start gap-5">

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <GraduationCap
                        size={28}
                        className="text-primary"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Education
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {item.degree}
                    </h3>

                    <p className="text-base text-muted-foreground font-medium mb-3">
                      {item.university}
                    </p>

                    <p className="text-sm text-primary font-semibold">
                      {item.date}
                    </p>
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