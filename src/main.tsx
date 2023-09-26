import React from 'react'
import ReactDOM from 'react-dom/client'

import {Route, Routes, BrowserRouter} from 'react-router-dom'

import './index.css'

// pages
import Login from './pages/login'
import Homepage from './pages/home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
