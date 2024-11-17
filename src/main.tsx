import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/Layout.tsx'
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>,
)
