'use client';

import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I&apos;d love to hear from you!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="animate-slideInLeft">
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
              <a
                href="mailto:hello@aurela.com"
                className="text-primary hover:text-accent transition-colors"
              >
                hello@aurela.com
              </a>
            </div>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-lg">
                  Ⓛ
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/aurela-gjoka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                linkedin.com/in/aurela-gjoka
              </a>
            </div>
          </div>

          <div className="animate-slideInRight">
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-lg">
                  𝒢
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">GitHub</h3>
              <a
                href="https://github.com/aurela-gjoka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                github.com/aurela-gjoka
              </a>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="mb-16 animate-fadeInUp">
          <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Albania</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-slideInUp max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8">Send me a message</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-scaleIn">
                <p className="text-green-700 font-semibold text-lg">
                  ✓ Thank you for your message! I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
