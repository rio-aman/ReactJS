import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(15)


  // let counter = 15

  const addValue = () =>{
    console.log("clicked" , counter);
    counter = counter + 1
    setcounter(counter)
  } 

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button><br/>
      <button>Decrease Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

// basically hooks are the methods in react which is use to do changement in UI of react 