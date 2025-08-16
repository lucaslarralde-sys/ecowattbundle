import { useState } from 'react'

const AREAS = [
  { id:'industrial', title:'Efluentes industriales y biogás', text:`Soluciones para plantas industriales: pretratamiento, tratamiento biológico, lodos activados, MBBR/IFAS, digestión anaeróbica para producción de biogás y valorización energética. Mejora de eficiencia y OPEX.` },
  { id:'urbanos', title:'Efluentes urbanos', text:`Diseño y optimización de EDAR/WWTP, líneas de agua y fangos, desinfección, monitoreo y performance. Cumplimiento normativo y eficiencia de operación.` },
  { id:'aguas', title:'Aguas', text:`Potabilización, remoción de turbidez y sólidos, filtración y desinfección. Soluciones para reúso seguro y reducción de consumo de agua.` },
  { id:'aire', title:'Aire', text:`Control de olores y emisiones: biofiltros, scrubbers, carbón activado y sistemas combinados. Auditorías y mejora continua.` },
]

function Header(){
  return (
    <header className="header">
      <img className="logo" src="/images/logo-ecowatt.png" alt="Ecowatt" />
      <nav>
        <a href="#areas">Áreas</a>
        <a href="#alianzas">Alianzas</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

function Hero(){
  return (
    <section className="hero">
      {/* IMPORTANTE: colocá tu video en /public/Hero.mp4 */}
      <video src="/Hero.mp4" autoplay="autoplay" muted playsInline loop></video>
      <div className="overlay" />
      <div className="content">
        <div className="kicker">INGENIERÍA AMBIENTAL</div>
        <h1>Soluciones integrales con foco en <span className="accent">desempeño ambiental</span></h1>
        <p className="lead">Diseño, operación y optimización de plantas. Reúso de agua y eficiencia de recursos.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#areas">Conocer áreas</a>
          <a className="btn btn-ghost" href="#contacto">Contactar</a>
        </div>
      </div>
    </section>
  )
}

function Areas(){
  const [open, setOpen] = useState(null)
  const current = AREAS.find(a=>a.id===open)
  return (
    <section id="areas" className="section white-band">
      <div className="container">
        <h2>Áreas de acción</h2>
        <p>Tratamiento de aguas y efluentes líquidos, con soluciones adaptadas a cada proceso.</p>
        <div className="areas-grid">
          {AREAS.map(a => (
            <div key={a.id} className="card" onClick={()=>setOpen(a.id)}>
              <h4>{a.title}</h4>
              <p>Ver más detalles</p>
            </div>
          ))}
        </div>
        {open && (
          <div className="modal-backdrop" onClick={()=>setOpen(null)}>
            <div className="modal" onClick={e=>e.stopPropagation()}>
              <button className="close" onClick={()=>setOpen(null)}>×</button>
              <h3>{current.title}</h3>
              <p>{current.text}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function Partners({band='water'}){
  return (
    <section id="alianzas" className={band==='green' ? 'green-band' : 'water-band'}>
      <div className="container">
        <h3>Alianzas estratégicas</h3>
        <div className="logos" style={{marginTop:'16px'}}>
          <a href="https://www.fuchswater.com/es/" target="_blank" rel="noopener"><img src="/images/FUCHS.png" alt="FUCHS" /></a>
          <a href="https://aqana.com/" target="_blank" rel="noopener"><img src="/images/aqana.png" alt="AQANA" /></a>
          <a href="https://dagaequipment.com/es/" target="_blank" rel="noopener"><img src="/images/daga.png" alt="DAGA" /></a>
          <a href="https://2gservicos.com/" target="_blank" rel="noopener"><img src="/images/2g.png" alt="2G" /></a>
          <a href="https://aircleansrl.com/" target="_blank" rel="noopener"><img src="/images/airclean.png" alt="AIRCLEAN" /></a>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (<footer id="contacto" className="footer">© {new Date().getFullYear()} Ecowatt — Ingeniería Ambiental</footer>)
}

export default function App(){
  return (<>
    <Header />
    <Hero />
    <Areas />
    <Partners band="water" />
    <Footer />
  </>)
}
