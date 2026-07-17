'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Certifications } from '@/components/certifications';
import { Languages } from '@/components/languages';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Languages />
      <Contact />
      <Footer />
    </main>
  );
}
