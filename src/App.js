import React from 'react';
import './App.css';
import logo from './assets/Logo reta.svg';

function App() {
  const instagram = "https://www.instagram.com/pinusburguer/"
  return (
    <div className="App">
      <div className="Content">
        <img src={logo} alt="logo pinus"/>
        <h1>Em breve aqui o novo site Pinu's Burger!</h1>
        <div className="Social">
          <p>Nos acompanhe no instagram:</p>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"> </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
