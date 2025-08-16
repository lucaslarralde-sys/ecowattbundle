import React from 'react'

export default function Partners({ variant }) {
  const bg = variant === "green" ? "#0a7f42" : "url('/image/brand-water.jpg') center/cover no-repeat"
  return (
    <section style={{ padding: '40px 20px', background: bg, color: 'white' }}>
      <h2>Alianzas Estratégicas</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <img src="/img/partners/partner1.png" alt="Partner 1" style={{ height: '60px' }} />
        <img src="/img/partners/partner2.png" alt="Partner 2" style={{ height: '60px' }} />
      </div>
    </section>
  )
}