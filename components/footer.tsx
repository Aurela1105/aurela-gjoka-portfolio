
'use client';

import { ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: 'GH',
      href: 'https://github.com/aurela-gjoka',
      label: 'GitHub',
    },
    {
      icon: 'LI',
      href: 'https://linkedin.com/in/aurela-gjoka',
      label: 'LinkedIn',
    },
    {
      icon: 'MA',
      href: 'mailto:hello@aurela.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-foreground text-white py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Aurela Gjoka
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              Frontend developer crafting beautiful, responsive, and
              user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links - First Column */}
          <div
            className="animate-fadeInUp"
            style={{ animationDelay: '100ms' }}
          >
            <h4 className="font-bold mb-4">Navigation</h4>

            <ul className="space-y-2">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Second Column */}
          <div
            className="animate-fadeInUp"
            style={{ animationDelay: '200ms' }}
          >
            <h4 className="font-bold mb-4">&nbsp;</h4>

            <ul className="space-y-2">
              {quickLinks.slice(3, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-slideInRight">
            <h4 className="font-bold mb-4">Connect</h4>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-bold"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">

          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {currentYear} Aurela Gjoka. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold text-sm"
          >
            Back to top
            <ExternalLink
              size={16}
              className="rotate-90"
            />
          </button>
        </div>

      </div>
    </footer>
  );
}
