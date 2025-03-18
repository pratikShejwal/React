import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
    <div className="main" class=" h-screen w-full duration-200" style={{backgroundColor:color}}> </div>
     <div className="buttons" class="flex-1/2 justify-center align-middle space-x-1.5 bottom-12">4
      <button onClick={()=>setColor("red")}>red</button>
      <button onClick={()=> setColor("Blue")}>Blue</button>
      <button onClick={()=>setColor("Green")}>Green</button>
      <button onClick={()=>setColor("Orange")}>Orange</button>
     </div>
   
    </>
  )
}

export default App
