import React from 'react';
import './App.css';
import Head from './components/Head/';
import Banner from './components/Banner/';

import Cardapio from './components/Cardapio/';
import Contatos from './components/Contatos/';
import Footer from './components/Footer/';
function App() {
  return (
    <div className="Content">
      <Head/>
      <Banner/>
      <Cardapio/>
      <Contatos/>
      <Footer/>
    </div>
  );
}

export default App;
