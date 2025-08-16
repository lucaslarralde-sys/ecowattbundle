import React from 'react'

export default function Hero() {
  return (
    <header className="relative h-[72vh] md:h-[78vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/logo/logo-ecowatt.png"
      />
      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-4">
        <img
          src="/logo/logo-ecowatt.png"
          className="h-10 md:h-12"
          alt="Ecowatt"
        />
        <span className="text-white/70 text-xs md:text-sm tracking-wider">
          INGENIERÍA AMBIENTAL
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-10 max-w-5xl mt-10 md:mt-14">
        <p className="text-ecoGreen font-semibold tracking-widest text-sm md:text-base mb-3">
          TRATAMIENTO DE AGUAS Y EFLUENTES LÍQUIDOS
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-[1.15]">
          Soluciones integrales con foco<br/>en desempeño ambiental
        </h1>
        <p className="text-white/85 text-lg md:text-xl mt-5 max-w-3xl">
          Diseño, operación y optimización de plantas. Reúso y eficiencia de recursos.
        </p>

        <div className="flex gap-4 mt-8">
          <a href="#areas" className="bg-ecoGreen hover:bg-green-600 text-white font-semibold rounded-full px-6 py-3">
            Conocer áreas
          </a>
          <a href="#contacto" className="border border-white/70 hover:bg-white/10 text-white font-semibold rounded-full px-6 py-3">
            Contactar
          </a>
        </div>
      </div>
    </header>
  )
}
