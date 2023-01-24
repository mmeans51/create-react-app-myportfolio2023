import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Myworklist from './components/Myworklist'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Myworklist />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;