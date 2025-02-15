import { useState } from 'react'
import './App.css'



function App() {

let [counter, setCounter] = useState(19)
    const addValue = () =>{
      // counter = counter +1;
      // console.log(counter)
      setCounter(counter+1)
    }

    const removeValue = ()=>{
      setCounter(counter-1)
    }

  return (
    <>
      <h1>Jab Somil met Avni.</h1>
      <h2>Counting Years: {counter}</h2>
      <button 
      onClick={addValue}> Add value {counter}</button>
      <br></br>
      <button onClick={removeValue}> Remove value {counter}</button>
    </>
  )
}

export default App
