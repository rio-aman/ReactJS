import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom React ! AMAN</h1>
//     </div>
//   )
// }


// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//   <MyApp />
//   // MyApp() // can by like this function calling but above is recommended 
//   // </StrictMode>,
// )

// <App /> is a custom tag means react create its own tag of html 
// recat use bundler (works behind the scene for syntax modification and shortening)



// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
// above is not syntax if we directly give our element to render 

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
// as this is correct way to write for our own element giving 

const anotherUser = "react learner"

// creating element in way react want 
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google ',anotherUser
)


createRoot(document.getElementById('root')).render(

  // reactElement // this will not show anything 
  // anotherElement
  // <App />
  reactElement
)