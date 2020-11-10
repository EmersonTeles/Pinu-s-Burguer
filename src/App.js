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
        <div className="maps">
          <p>Venha nos visitar: </p>
          <p Style="font-size:12px;">localização atualizada em 10/11/2020 às 17:00</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.388305201997!2d-48.010690970792716!3d-15.880062309388643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2dd1f100abb3%3A0x9f28188f90de4e3f!2s1%20-%20Riacho%20Fundo%20QN%201%20-%20Riacho%20Fundo%20I%2C%20Bras%C3%ADlia%20-%20DF%2C%2071805-100!5e0!3m2!1spt-BR!2sbr!4v1605039467564!5m2!1spt-BR!2sbr"
                    aria-hidden="false" 
                    tabindex="0"
                    title="Location"
                    allowfullscreen>
                    
          </iframe>
          </div>
      </div>
    </div>
  );
}

export default App;
