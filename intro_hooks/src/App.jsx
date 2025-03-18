import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0
  const [counter, setCount] = useState(0)
  let increVal=()=>{
    if(counter<=20){
      setCount(counter+1)

    }
  }
  let decreVal=()=>{
    if(counter>0){
      setCount(counter-1)

    }
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increVal}>Increment</button>
      <br /><br />
      <button onClick={decreVal}>Decrement</button>
    </>
  )
}

export default App
