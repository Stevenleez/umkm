import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Types from './Components/Types'
import Footer from './Components/Footer'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Home />
        <Types />
        <About />
        <Footer />
      </div>
  )
}

export default App
