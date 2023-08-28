import React from 'react'
import ReactDOM from 'react-dom/client'

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import secureLocalStorage from "react-secure-storage"


// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaServ from './pages/ListaServ'
import ListaDevs from './pages/listaDevs'
import Login from './pages/Login'
import Header from './components/header'
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServico'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServico'


export default function logado() {

  if (secureLocalStorage.getItem("user")) {

    const objetoUsuario: any = secureLocalStorage.getItem("user");

    // APARECE O PRIMEIRO NOME
    const nome:string =  objetoUsuario.user.nome.trim().split(" ")[0]

    return {
      logado: true , nomeUsuario: nome
    }
  } else{
    return { 
      logado: false , nomeUsuario: null
    }
  }

}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header usuario={logado()}/>
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
