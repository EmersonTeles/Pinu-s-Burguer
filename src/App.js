import React from 'react';
import './App.css';
import Head from './components/Head/';
import Footer from './components/Footer/';
import fundo from './assets/foto de fundo.jpg';

function App() {
  return (
    <div className="Content">

      <Head/>
      <div className="divFundo">
        <img className="Fundo" src={fundo} alt= "fundo"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
