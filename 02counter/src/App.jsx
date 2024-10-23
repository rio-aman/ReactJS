import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(15)


  // let counter = 15

  const addValue = () =>{
    console.log("clicked" , counter);
    if (counter == 20) return console.log("No more updation in counter");
    // interview question does below update counter four times or not if not then why 
    // answer--  it will send them in 
    // setcounter(counter + 1)
    // setcounter(counter + 1)
    // setcounter(counter + 1)
    // setcounter(counter + 1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
  } 
  const remValue = () =>{
    console.log("clicked" , counter);
    if(counter == 0) return console.log("counter cannot be negative");
    setcounter(counter - 1)
    setcounter(counter - 1)
    setcounter(counter - 1)
    setcounter(counter - 1)
  } 

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button><br/>
      <button
      onClick={remValue}
      >Decrease Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

// basically hooks are the methods in react which is use to do changement in UI of react 

// video part of a react interview questions on counter are importanat 
