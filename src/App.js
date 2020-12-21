import React from 'react';
import './App.css';
import Head from './components/Head/';
import fundo from './assets/foto de fundo.jpg';

function App() {
  return (
    <div className="Content">
      <Head/>
      <div>
        <img className="Fundo" src={fundo} alt= "fundo"/>
      </div>
    </div>
  );
}

export default App;
