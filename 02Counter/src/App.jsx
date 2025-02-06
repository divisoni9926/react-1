import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(15)
//setCounter function hai jo ki responsible hai "counter" ko update krne me


  //let Counter = 15


  const addValue = () => {
    
    console.log("clicked " , Counter);
    //Counter = Counter + 1;
    setCounter(Counter + 1);

    //setCounter(prevCounter => prevCounter + 1)
    //setCounter(prevCounter => prevCounter + 1)
    //setCounter(prevCounter => prevCounter + 1)
    //setCounter(prevCounter => prevCounter + 1)
   
    // console.log("value added" , Math.random());

  } 

  const removeVlaue = () => {
    setCounter(Counter - 1)

    
  }
  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value : {Counter}</h2>

      <button
      onClick={addValue}
      >Add value {Counter}</button>
      <br />
      <br />
      <button
      onClick={removeVlaue} 
      >Remove value{Counter}</button>
    </>
  )
}

export default App
