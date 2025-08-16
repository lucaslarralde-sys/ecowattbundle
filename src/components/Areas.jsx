import React, { useState } from 'react'
import Modal from './Modal'

const AREAS = [
  {
    id: 'industriales',
    title: 'Efluentes industriales y biogás',
    brief: 'Tratamiento biológico, físico-químico y valorización energética.',
    body: (
      <>
        <p className="mb-3">
          Diseñamos y optimizamos plantas para industrias (alimentos, bebidas, curtiembres, química, etc.).
          Aplicamos procesos biológicos aerobios/anaerobios, DAF, MBR, MBBR y tecnologías de deshidratación.
        </p>
        <p className="mb-3">
          Integramos digestión anaerobia para producción de biogás, upgrading y cogeneración, mejorando
          la eficiencia energética y reduciendo huella de carbono.
        </p>
      </>
    )
  },
  {
    id: 'urbanos',
    title: 'Efluentes urbanos',
    brief: 'Saneamiento, ampliaciones y performance de PTAR.',
    body: (
      <>
        <p className="mb-3">
          Soluciones para plantas de tratamiento municipales, con foco en eficiencia, control de olores,
          reutilización y cumplimiento normativo sostenido.
        </p>
        <p className="mb-3">
          Puesta a punto, troubleshooting y operación asistida para alcanzar y sostener parámetros.
        </p>
      </>
    )
  },
  {
    id: 'aguas',
    title: 'Aguas',
    brief: 'Potabilización, reúso y calidad de agua de proceso.',
    body: (
      <>
        <p className="mb-3">
          Sistemas de potabilización, remoción de sales/metales, filtros multimedia, carbón activado,
          UF/RO y producción de agua de proceso con especificación garantizada.
        </p>
      </>
    )
  },
  {
    id: 'aire',
    title: 'Aire',
    brief: 'Control de emisiones y tratamiento de olores.',
    body: (
      <>
        <p className="mb-3">
          Diseño de sistemas para emisiones gaseosas y control de olores en plantas de tratamiento y procesos
          industriales: scrubbers, biofiltros y soluciones combinadas.
        </p>
      </>
    )
  },
]

export default function Areas() {
  const [openId, setOpenId] = useState(null)
  const open = (id) => setOpenId(id)
  const close = () => setOpenId(null)

  return (
    <section id="areas" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-18">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ecoBlue mb-8">
          Áreas de servicio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {AREAS.map(a => (
            <div key={a.id} className="rounded-2xl border border-gray-200 p-5 hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-ecoBlue mb-2">{a.title}</h3>
              <p className="text-gray-600 mb-4">{a.brief}</p>
              <button onClick={() => open(a.id)} className="text-ecoGreen font-semibold hover:underline">
                Ver más
              </button>

              <Modal open={openId === a.id} onClose={close} title={a.title}>
                {a.body}
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
