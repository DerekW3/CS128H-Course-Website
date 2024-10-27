import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CourseInfo from './pages/CourseInfo.tsx'
import Lectures from './pages/Lectures'
import Grades from './pages/Grades'
import Staff from './pages/Staff'
import NoPage from './pages/NoPage.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CourseInfo" element={<CourseInfo />} />
        <Route path="/Lectures" element={<Lectures />} />
        <Route path="/Grades" element={<Grades />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
