import React from 'react';
import './App.css';
import logo from './assets/Logo reta.svg';

function App() {
  const instagram = "https://www.instagram.com/pinusburguer/"
  return (
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
        <p>venha nos visitar: </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.6069337860607!2d-48.016921170792656!3d-15.883054709407705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUyJzU5LjAiUyA0OMKwMDAnNTkuMCJX!5e1!3m2!1spt-BR!2sbr!4v1604776385055!5m2!1spt-BR!2sbr" 
                  allowfullscreen="" 
                  aria-hidden="false" 
                  tabindex="0"
                  title="Location">>
          </iframe>
      </div>
    </div>
  );
}

export default App;
