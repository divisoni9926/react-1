import React from 'react'
import Card from './component/Card'

export default function App() {

  let myObj = {
    userName: "Divi",
    age: 21
  }

  let newArr = [1,2,3,4]

  return (
    <div>
      
      <Card userName="Divyangi" someObj = {newArr}/>
      <Card userName="Mahak" />
    </div>
  )
}
