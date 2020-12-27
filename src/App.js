import React from 'react';
import './App.css';
import Head from './components/Head/';
import Banner from './components/Banner/';
import Footer from './components/Footer/';
import Cardapio from './components/Cardapio/';

function App() {
  return (
    <div className="Content">

      <Head/>
      <Banner/>
      <Cardapio/>
      <Footer/>
    </div>
  );
}

export default App;
