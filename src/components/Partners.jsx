import React from 'react'

const logos = [
  { src: '/partners/FUCHS.png', alt: 'FUCHS', href: '#', w: 'w-[220px]' },
  { src: '/partners/aqana.png', alt: 'Aqana', href: '#', w: 'w-[200px]' },
  { src: '/partners/daga.png', alt: 'DAGA', href: '#', w: 'w-[220px]' },
  { src: '/partners/2g.png', alt: '2G', href: '#', w: 'w-[160px]' },
  { src: '/partners/airclean.png', alt: 'Air Clean', href: '#', w: 'w-[150px]' },
]

export default function Partners({ theme = 'green' }) {
  const TopWhite = (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6">
        <h2 className="text-ecoBlue text-xl md:text-2xl font-extrabold">
          Alianzas estratégicas
        </h2>
      </div>
    </div>
  )

  const isGreen = theme === 'green'
  const containerCls = isGreen
    ? 'bg-ecoGreen'
    : 'bg-no-repeat bg-cover bg-center relative'

  const bgStyle = isGreen
    ? {}
    : { backgroundImage: "linear-gradient(to right, rgba(11,74,139,0.95) 0%, rgba(11,74,139,0.85) 40%, rgba(11,74,139,0.80) 70%), url('/partners/blue-texture.jpg')" }

  return (
    <section aria-labelledby="partners">
      {TopWhite}
      <div className={containerCls} style={bgStyle}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
            {logos.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer"
                className={`opacity-95 hover:opacity-100 transition`}>
                <img src={l.src} alt={l.alt} className={`${l.w} max-h-[60px] object-contain`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
