import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Plans from './components/Plans'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div className="section-wrapper">
        <Programs></Programs>
        <Testimonials></Testimonials>
        <Plans></Plans>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
