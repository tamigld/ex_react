import React from 'react'
import ReactDOM from 'react-dom/client'

import {Route, Routes, BrowserRouter} from 'react-router-dom'


// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaServ from './pages/ListaServ'
import ListaDevs from './pages/listaDevs'
import Login from './pages/login'
import Header from './components/header'
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServico'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServico'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='listaServicos' element={<ListaServ/>}/>
        <Route path='listaServicos/:idServico' element={<VisualizarServico/>}/>
        <Route path='lista/devs' element={<ListaDevs/>}/>
        <Route path='cadastroUsuario' element={<CadastroUsuario/>}/>
        <Route path='cadastroServico' element={<CadastroServico/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='perfil/:idUsuario' element={<PerfilUsuario/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
