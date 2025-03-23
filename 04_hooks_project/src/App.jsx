import { useCallback, useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [length,setLength] = useState(8)
let [splCharacterAllowNot , setSplCharAllow] = useState(false);
let [password,setpassword] = useState("")

let passwordGenerator = useCallback(()=>{
  let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let pass = ""
  if(splCharacterAllowNot){
    str+="0123456789"
  }
  for(let i = 1;i<=length;i++){
let char = Math.floor(Math.random()*str.length + 1);
pass+=str.charAt(char)
  }
  setpassword(pass)
},[length,splCharacterAllowNot,setpassword])
useEffect(()=>{
  passwordGenerator()
},[length,splCharacterAllowNot,setpassword])
  return (
    <>
      <h1 className='main' class=" align-text-top text-4xl text-yellow-50 text-center">Password Generator</h1>
     <div className="txt" class="bg-amber-950" >
      
      <input class="w-full px-1 py-3" type="text" value={password}  name="" id="" />
      </div>
<input type="range" name="rg" id="" onChange={
  (e)=>{
    setLength(e.target.value);
  }
} value={length} min={8} max={20}/>
<label htmlFor="rg">Length:{length}</label><br />
      NumAllowed<input type="checkbox" name="" id="" defaultChecked={splCharacterAllowNot }
      onChange={()=>{
        setSplCharAllow((res)=>!res)
      }}
      />
    </>
  )
}

export default App
