import {useState, useRef} from 'react'
import './App.css';
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css'

const App = () => {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <div>
      <Hero projectsRef={projectsRef} contactRef={contactRef} aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
    </div>
  )
}

export default App;