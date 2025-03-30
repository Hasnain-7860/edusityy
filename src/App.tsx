
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import Programs from './components/Programs/Programs'
import About from './components/About/About'
import Title2 from './components/Title2/Title2'
import Campos from './components/Campos/Campos'
import Title3 from './components/Title3/Title3'
import Testimonials from './components/Testimonials/Testimonials'
import Title4 from './components/Title4/Title4'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <div>
      <Navbar/> 
     <Hero/>
     <Title/>
     <Programs/>
     <About/>
    <Title2/>
    <Campos/>
    <Title3/>
    <Testimonials/>
    <Title4/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App