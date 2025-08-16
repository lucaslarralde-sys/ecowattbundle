import React from 'react'

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <div className="px-6 py-5 leading-relaxed text-gray-700">
          {children}
        </div>
        <div className="px-6 py-4 border-t text-right">
          <button onClick={onClose} className="bg-ecoBlue text-white px-5 py-2 rounded-lg hover:bg-blue-800">Cerrar</button>
        </div>
      </div>
    </div>
  )
}
