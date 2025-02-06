import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Divi from "./divi"

function App() {

const username = "Divyangi Soni"

  return (
    <div>
    <Divi/>
    <h1>{username}</h1>  
    <p>This is para</p>
    <p>Hellooo</p>
    </div>
  )
}

export default App
