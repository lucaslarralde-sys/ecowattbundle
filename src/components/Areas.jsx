import React from 'react'
import Modal from 'react-modal'

const areas = [
  { name: "Efluentes industriales y biogás", text: "Texto preliminar de área industrial y biogás..." },
  { name: "Efluentes urbanos", text: "Texto preliminar de área urbana..." },
  { name: "Aguas", text: "Texto preliminar de área aguas..." },
  { name: "Aire", text: "Texto preliminar de área aire..." }
]

Modal.setAppElement('#root')

export default function Areas() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [activeArea, setActiveArea] = React.useState(null)

  function openModal(area) {
    setActiveArea(area)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    setActiveArea(null)
  }

  return (
    <section style={{ padding: '60px 20px', background: 'white' }}>
      <h2>Nuestras Áreas</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {areas.map((area, idx) => (
          <button key={idx} onClick={() => openModal(area)}>{area.name}</button>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>{activeArea?.name}</h2>
        <p>{activeArea?.text}</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </section>
  )
}