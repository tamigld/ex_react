import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaServ from './pages/ListaServ'
import Header from './components/header'
import Footer from './components/footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Footer/>
  </React.StrictMode>,
)
