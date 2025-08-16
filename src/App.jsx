import React from 'react'
import Hero from './components/Hero'
import Areas from './components/Areas'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Hero />
      <Areas />
      <Partners variant="image" />
      <Footer />
    </div>
  )
}