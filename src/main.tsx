import React from 'react'
import ReactDOM from 'react-dom/client'

import {Route, Routes, BrowserRouter} from 'react-router-dom'


// import App from './App'
import './index.css'
import Home from './pages/home'
import ListaServ from './pages/listaServ'
import ListaDevs from './pages/listaDevs'
import CadastroDev from './pages/cadastroDev'
import Login from './pages/login'
import Header from './components/header'
import Footer from './components/footer'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='lista/servicos' element={<ListaServ/>}/>
        <Route path='lista/devs' element={<ListaDevs/>}/>
        <Route path='cadastro/dev' element={<CadastroDev/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      <Footer/>

    </BrowserRouter>
  </React.StrictMode>,
)
