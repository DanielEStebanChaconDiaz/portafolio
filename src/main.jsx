import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cursor from './pages/cursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cursor />

  </StrictMode>,
)
