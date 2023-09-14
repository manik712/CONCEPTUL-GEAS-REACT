/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-2xl text-white mb-5'>Vite + React</h1>
      <Home></Home>
    </>
  )
}

export default App

