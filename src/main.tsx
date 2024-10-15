import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Signin } from './screens/Signin.tsx'
import { Signup } from './screens/Signup.tsx'
import { TrackPetHome } from './screens/TrackPetHome.tsx'

import './index.css'
import { MyPets } from './screens/MyPets.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/home" element={<TrackPetHome />} />
        <Route path="/myPets" element={<MyPets />} />
        <Route path="/petinfo" element={<></>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
