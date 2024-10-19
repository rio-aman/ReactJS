import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />  
  // </StrictMode>,
)

// <App /> is a custom tag means react create its own tag of html 