import React from 'react';
import './styles.css';
import smash from '../../assets/smash.jpeg';
import suco from '../../assets/suco.png';
import milkshake from '../../assets/milkshake.jpg';
import refri from '../../assets/refri.jpg';
import batata from '../../assets/batata.jpeg';
import batataCheddar from '../../assets/batata cheddar.jpg';
import salada from '../../assets/salada.jpg';

export default function Cardapio(){
    return(
        <div id="Card" className="Cardapio">
            <div className="Campo">
                <h1>Hamburguers</h1>
                <ul className="Burguers">
                    <li className="Burguer">
                        <h2>Smash Clássico</h2>
                        <img src={smash} alt="Smash Burguer"/>
                    </li>
                    <li className="Burguer">
                        <h2>Smash Bacon</h2>
                        <img src={smash} alt="Smash Burguer"/>
                    </li>
                    <li className="Burguer">
                        <h2>Pinu's Burguer</h2>
                        <img src={smash} alt="Smash Burguer"/>
                    </li>
                </ul>
                
                <h1>Bebidas</h1>
                <ul className="Drinks">
                    <li className="Drink">
                        <h2>Refri Lata</h2>
                        <img src={refri} alt="Refrigerante lata"/>
                    </li>
                    <li className="Burguer">
                        <h2>Suco</h2>
                        <img src={suco} alt="Suco"/>
                    </li>
                    <li className="Burguer">
                        <h2>MilkShake</h2>
                        <img src={milkshake} alt="MilkShake"/>
                    </li>
                </ul>
                <h1>Acompanhamentos</h1>
                <ul className="Acompanhamentos">
                    <li className="Acompanhamento">
                        <h2>Batata Simples</h2>
                        <img src={batata} alt="Batata Simples"/>
                    </li>
                    <li className="Burguer">
                        <h2>Batata Cheddar</h2>
                        <img src={batataCheddar} alt="Batata Cheddar Bacon"/>
                    </li>
                    <li className="Burguer">
                        <h2>Salada</h2>
                        <img src={salada} alt="Salada"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}