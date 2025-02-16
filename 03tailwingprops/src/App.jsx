import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Somil Bansal",
    age: 23
  }

  let newArray = [1,2,3,4,5]

  return (
    <>
<h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'   >Tailwind test</h1>
<Card username="Chai aur code frenchaise"/>
<Card username = "Bewakoof T-shirt Ninja" />
    </>
  )
}

export default App
