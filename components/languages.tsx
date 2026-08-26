export function Languages() {
  const languages = [
    {
      name: 'English',
      level: 'Professional Working Proficiency',
      proficiency: 95,
      icon: '🇬🇧',
    },
    {
      name: 'Spanish',
      level: 'Full Professional Proficiency',
      proficiency: 90,
      icon: '🇪🇸',
    },
    {
      name: 'Albanian',
      level: 'Native or Bilingual',
      proficiency: 100,
      icon: '🇦🇱',
    },
    {
      name: 'Turkish',
      level: 'Limited Working Proficiency',
      proficiency: 60,
      icon: '🇹🇷',
    },
    {
      name: 'French',
      level: 'Elementary Proficiency',
      proficiency: 40,
      icon: '🇫🇷',
    },
    {
      name: 'Italian',
      level: 'Elementary Proficiency',
      proficiency: 40,
      icon: '🇮🇹',
    },
  ];

  return (
    <section id="languages" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Languages</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Fluent in multiple languages, enabling effective communication in diverse professional environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {languages.map((language, index) => (
            <div
              key={language.name}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fadeInUp"
            >
              <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{language.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{language.name}</h3>
                        <p className="text-sm text-primary font-semibold">{language.level}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="mb-2">
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-1000 ease-out"
                      style={{ width: `${language.proficiency}%` }}
                    />
                  </div>
                </div>
                <p className="text-right text-sm text-muted-foreground font-medium">
                  {language.proficiency}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
