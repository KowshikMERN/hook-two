

import { useState } from 'react'
import './App.css'
import Counting from './components/Counter/Counting'

function App() {
  const [count, setCount] = useState(10)

  const incre = ()=>{
    setCount(count+1)
  }

  const decre = ()=>{
    if(count == 0){

    }else{
      setCount(count-1)
    }
  }
  

  return (
    <>
    <h1>COUNTING : {count}</h1>
    <button onClick = {incre}> increment </button>
    <button onClick = {decre}> decrement </button>
  
    </>
  )
}

export default App
