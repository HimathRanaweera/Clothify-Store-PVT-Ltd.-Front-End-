import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {} from 'bootstrap/dist/css/bootstrap.min.css'
import {} from 'bootstrap/dist/js/bootstrap.js'
import Header from './Component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
