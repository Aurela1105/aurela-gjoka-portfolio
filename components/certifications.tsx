'use client';

import { useState } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const educationSkills = [
    'Advanced Programming',
    'Machine Learning & AI',
    'Data Analysis & Modeling',
    'Algorithm Design & Optimization',
    'Research & Analytical Thinking',
  ];

  const certifications = [
    {
      id: 0,
      title: 'Master\'s Degree in Mathematics & Computer Science',
      issuer: 'University of Tirana',
      date: '2021 - 2023',
      certificateId: 'MASTER-2023',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jfif-iyhteltuCHksc8iID935OmgBmNMoUL.jpeg',
      icon: '🎓',
      credentialUrl: '#',
      type: 'education',
      skills: educationSkills,
    },
    {
      id: 1,
      title: 'Bachelor\'s Degree in Mathematics & Computer Science',
      issuer: 'Universiteti Aleksander Moisiu',
      date: '2018 - 2021',
      certificateId: 'BACHELOR-2021',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jfif-iyhteltuCHksc8iID935OmgBmNMoUL.jpeg',
      icon: '📜',
      credentialUrl: '#',
      type: 'education',
      skills: educationSkills,
    },
    {
      id: 2,
      title: 'AI Frontend Engineer: Building Web Applications with Modern AI Tools',
      issuer: 'Mayerfeld Consulting',
      date: 'Jun 2026',
      certificateId: '7820c130-c5be-482b-8c01-5b3fb6358f9e',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jfif-iyhteltuCHksc8iID935OmgBmNMoUL.jpeg',
      icon: '🤖',
      credentialUrl: '#',
    },
    {
      id: 3,
      title: 'Mayerfeld Practicum Program® in Frontend Development',
      issuer: 'Mayerfeld Consulting',
      date: 'Jul 2026',
      certificateId: '0a7a9ef8-7d1a-4eb1-a5f1-dff18fc1d5f0',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jfif-Eqi8F9hZqzlo41jBgHQbvpvTLnXN9G.jpeg',
      icon: '💼',
      credentialUrl: '#',
    },
    {
      id: 4,
      title: 'JavaScript from Scratch',
      issuer: 'Software Development Academy Albania (Protik)',
      date: 'Jul 2025',
      certificateId: 'AL/29/06/2025',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jfif-6Ts4w4tL1yt4uDM9BpoEv4UgOcHcaT.jpeg',
      icon: '📚',
      credentialUrl: '#',
    },
    {
      id: 5,
      title: 'Java Programming Course',
      issuer: 'Crystal Talent Solutions',
      date: 'Feb 2021',
      certificateId: 'CRYSTAL-CERTIFIED',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jfif-Ea8H8k3eSn1v8OE0GnePrYE6eE8cHN.jpeg',
      icon: '☕',
      credentialUrl: '#',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="text-5xl">🎓</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Education & Professional Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced academic credentials and industry-recognized certifications demonstrating expertise in frontend development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              style={{ animationDelay: `${index * 80}ms` }}
              className="animate-fadeInUp group cursor-pointer"
              onClick={() => setSelectedCert(cert.id.toString())}
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-border shadow-md hover:shadow-2xl hover:border-primary transition-all duration-300 overflow-hidden flex flex-col">
                {/* Top Accent Bar */}
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />

                {/* Icon & Header */}
                <div className="p-6 pb-4">
                  <div className="text-5xl mb-3 inline-block p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {cert.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight line-clamp-3 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-primary">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      📅 {cert.date}
                    </p>
                  </div>

                  {/* Certificate ID */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-4">
                      <span className="font-semibold">Certificate ID:</span>
                      <br />
                      <code className="text-primary font-mono text-xs mt-1 break-all">{cert.certificateId}</code>
                    </p>

                    {/* Click to View */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <ExternalLink size={16} />
                      Click to view certificate
                    </div>
                  </div>
                </div>

                {/* Hover Overlay Indicator */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal - Full Screen Viewer */}
        {selectedCert && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl overflow-hidden animate-scaleIn flex flex-col max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-accent text-white px-6 md:px-8 py-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {certifications.find((c) => c.id.toString() === selectedCert)?.title}
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content - Skills or Certificate Image */}
              <div className="overflow-auto flex-1">
                {certifications.find((c) => c.id.toString() === selectedCert)?.type === 'education' ? (
                  /* Education Skills Display */
                  <div className="p-8 md:p-12">
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-foreground mb-6">Key Skills & Knowledge</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {certifications.find((c) => c.id.toString() === selectedCert)?.skills?.map((skill, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 hover:shadow-md transition-all"
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-2xl mt-1">✓</div>
                              <div>
                                <p className="font-bold text-foreground">{skill}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-secondary/30 rounded-xl border border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Issuer:</span> {certifications.find((c) => c.id.toString() === selectedCert)?.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-semibold text-foreground">Period:</span> {certifications.find((c) => c.id.toString() === selectedCert)?.date}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Professional Certificate Image */
                  <img
                    src={certifications.find((c) => c.id.toString() === selectedCert)?.image}
                    alt="Certificate"
                    className="w-full h-auto"
                  />
                )}
              </div>

              {/* Footer with Actions */}
              <div className="border-t border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 px-6 md:px-8 py-4 flex gap-3 flex-col sm:flex-row">
                {certifications.find((c) => c.id.toString() === selectedCert)?.type !== 'education' && (
                  <a
                    href={certifications.find((c) => c.id.toString() === selectedCert)?.image}
                    download
                    className="flex-1 bg-primary hover:bg-accent text-white py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    <Download size={18} />
                    Download Certificate
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className={certifications.find((c) => c.id.toString() === selectedCert)?.type === 'education' ? 'flex-1 bg-primary hover:bg-accent text-white py-3 rounded-xl font-bold transition-all duration-300' : 'flex-1 border-2 border-primary text-primary hover:bg-primary/5 py-3 rounded-xl font-bold transition-all duration-300'}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
