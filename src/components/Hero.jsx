import React from 'react'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2))' }}></div>
      <img src="/logo/logo-ecowatt.png" alt="Ecowatt" style={{ position: 'absolute', top: '20px', left: '20px', height: '80px' }} />
      <h1 style={{ position: 'absolute', bottom: '40px', left: '20px', color: 'white' }}>Preservando el agua y los recursos</h1>
    </section>
  )
}