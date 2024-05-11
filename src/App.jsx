import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Skills from './Components/Skills'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App