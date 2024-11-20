import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotivaApp } from './MotivaApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotivaApp />
  </StrictMode>,
)
