import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 class="text-black text-2xl bg-amber-200 rounded-2xl">Tailwind</h1>
     <Card user="Pratik" text="My name is pratik"/>
     <Card user="Nothing"/>
    </>
  )
}

export default App
