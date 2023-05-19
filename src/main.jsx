import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Mid from './components/Mid/mid';
import Header from './components/Header/header';
import Body from './components/Body/body';
import About from './components/About/about';
import Price from './components/Price/price';
import Faq from './components/Faq/faq';
import Team from './components/Team/team'
import './index.css';
import Footer from './components/footer/footer';
import Contact from './components/Contact/contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Mid/>
    <Body/>
    <About/>
    <Price/>
    <Faq/>
    <Team/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
