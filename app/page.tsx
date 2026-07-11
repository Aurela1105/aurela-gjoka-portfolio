export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem', background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}>
      <section style={{ maxWidth: '720px', width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '24px', padding: '2.5rem', color: 'white', boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.8, marginBottom: '1rem' }}>Hello, I’m</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', margin: '0 0 1rem' }}>Your Name</h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, opacity: 0.9 }}>
          This portfolio is now ready to be viewed online. I’ve configured the project so it can be published through GitHub Pages.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <a href="mailto:you@example.com" style={{ background: '#fff', color: '#0f172a', padding: '0.75rem 1rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 700 }}>
            Contact Me
          </a>
          <a href="https://github.com" style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'white', padding: '0.75rem 1rem', borderRadius: '999px', textDecoration: 'none' }}>
            View GitHub
          </a>
        </div>
      </section>
    </main>
  )
}
