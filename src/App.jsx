import { useState } from 'react'

import './App.css'

import Navbar from './components/NavBar'
import MainRoute from './components/MainRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MainRoute />
    </>
  )
}

export default App
