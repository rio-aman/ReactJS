// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  // let myobj = {
  //   username: "AMAN",
  //   age: 21
  // }

  let newArr = [1,3,6]


  return (
    <>
      <h1 className='bg-green-400'>Tailwind Test</h1>
      <Card username="chai aur code" someobj={newArr} />
      <Card username="Aman" />
    </>
  )
}

export default App
