import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
  <div className='max-w-screen-lg mx-auto'>
  <RouterProvider router={router} />
  </div>
</StrictMode>
  </AuthProvider>
)
