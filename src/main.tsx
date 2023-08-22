import React from 'react'
import ReactDOM from 'react-dom/client'

import {Route, Routes, BrowserRouter} from 'react-router-dom'


// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaServ from './pages/ListaServ'
import ListaDevs from './pages/listaDevs'
import CadastroDev from './pages/cadastroDev'
import CadastroServ from './pages/cadastroServ'
import Login from './pages/login'
import Header from './components/header'
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServico'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='listaServicos' element={<ListaServ/>}/>
        <Route path='listaServicos/:idServico' element={<VisualizarServico/>}/>
        <Route path='lista/devs' element={<ListaDevs/>}/>
        <Route path='cadastro/dev' element={<CadastroDev/>}/>
        <Route path='cadastro/serv' element={<CadastroServ/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='perfil/:idUsuario' element={<PerfilUsuario/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
