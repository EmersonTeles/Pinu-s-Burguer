import React from 'react';
import './App.css';
import Head from './components/Head/';
import Banner from './components/Banner/';

import Cardapio from './components/Cardapio/';
import Contatos from './components/Contatos/';
import Footer from './components/Footer/';
function App() {
  return (
<<<<<<< HEAD
    <div className="Content">
      <Head/>
      <Banner/>
      <Cardapio/>
      <Contatos/>
      <Footer/>
=======
    <div className="App">
      <div className="Content">
        <div className="Head">
          <img src={logo} alt="logo pinus"/>
          <h1>Em breve aqui o novo site Pinu's Burger!</h1>
        </div>
        <div className="Social">
          <p>Nos acompanhe no instagram:</p>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"> </i>
          </a>
        </div>
        <div className="Cardapio">
          <p>Confira nosso cardápio:</p>
          <a href="https://ibb.co/hLjznq6" rel="noopener noreferrer" target="_blank" className="cardapio_link">
            <i class="fa fa-book" aria-hidden="true"></i>
          </a>
        </div>
      </div>
>>>>>>> master
    </div>
  );
}

export default App;
