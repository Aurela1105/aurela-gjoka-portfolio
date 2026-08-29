'use client';

import { useState } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const basePath = '/aurela-gjoka-portfolio';

  const certifications = [
    {
      id: 0,
      title:
        'AI Frontend Engineer: Building Web Applications with Modern AI Tools',
      issuer: 'Mayerfeld Consulting',
      date: 'Jun 2026',
      certificateId: '7820c130-c5be-482b-8c01-5b3fb6358f9e',
      image: `${basePath}/certificates/ai-frontend.jpg`,
      icon: '🤖',
    },
    {
      id: 1,
      title: 'Mayerfeld Practicum Program® in Frontend Development',
      issuer: 'Mayerfeld Consulting',
      date: 'Jul 2026',
      certificateId: '0a7a9ef8-7d1a-4eb1-a5f1-dff18fc1d5f0',
      image: `${basePath}/certificates/practicum.jpg`,
      icon: '💻',
    },
    {
      id: 2,
      title: 'JavaScript from Scratch',
      issuer: 'Software Development Academy Albania (Protik)',
      date: 'Jul 2025',
      certificateId: 'AL/29/06/2025',
      image: `${basePath}/certificates/javascript.jpg`,
      icon: '📚',
    },
    {
      id: 3,
      title: 'Java Programming Course',
      issuer: 'Crystal Talent Solutions',
      date: 'Feb 2021',
      certificateId: 'CRYSTAL-CERTIFIED',
      image: `${basePath}/certificates/java.jpg`,
      icon: '☕',
    },
  ];

  const selectedCertificate =
    selectedCert !== null
      ? certifications.find((cert) => cert.id === selectedCert)
      : null;

  return (
    <section
      id="certifications"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="text-5xl">🎓</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Certifications
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry certifications and professional training in frontend
            development, JavaScript, Java, and modern AI-powered web
            development.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
              className="animate-fadeInUp group cursor-pointer"
              onClick={() => setSelectedCert(cert.id)}
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-border shadow-md hover:shadow-2xl hover:border-primary transition-all duration-300 overflow-hidden flex flex-col">

                {/* Top Accent Bar */}
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />

                {/* Icon */}
                <div className="p-6 pb-4">
                  <div className="text-5xl inline-block p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {cert.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6 flex flex-col flex-1">

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer and Date */}
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-primary">
                      {cert.issuer}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      📅 {cert.date}
                    </p>
                  </div>

                  {/* Certificate ID */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-4">
                      <span className="font-semibold">
                        Certificate ID:
                      </span>

                      <br />

                      <code className="text-primary font-mono text-xs mt-1 break-all">
                        {cert.certificateId}
                      </code>
                    </p>

                    {/* Click to View */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <ExternalLink size={16} />
                      Click to view certificate
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white rounded-2xl md:rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary to-accent text-white px-5 md:px-8 py-4 flex justify-between items-center gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold">
                    {selectedCertificate.title}
                  </h3>

                  <p className="text-sm text-white/80 mt-1">
                    {selectedCertificate.issuer}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="shrink-0 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  aria-label="Close certificate"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="overflow-auto bg-gray-100 p-3 md:p-6 flex-1">
                <div className="flex justify-center items-center min-h-full">
                  <img
                    src={selectedCertificate.image}
                    alt={`${selectedCertificate.title} certificate`}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 px-5 md:px-8 py-4 flex gap-3 flex-col sm:flex-row">

                {/* Download */}
                <a
                  href={selectedCertificate.image}
                  download
                  className="flex-1 bg-primary hover:bg-accent text-white py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                >
                  <Download size={18} />
                  Download Certificate
                </a>

                {/* Close */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 py-3 rounded-xl font-bold transition-all duration-300"
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