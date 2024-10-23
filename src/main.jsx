import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Routers/Router.jsx'
import AuthProvider from './Components/Authentication/ContextApi/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
   <RouterProvider router={router}/> 
  </AuthProvider>


  </StrictMode>,
)
