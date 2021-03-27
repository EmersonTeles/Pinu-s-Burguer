import React from 'react';
import './styles.css';
import smashclassico from '../../assets/smash clássico.jpg';
import smashbacon from '../../assets/smash bacon.jpg';
import cheesesalada from '../../assets/cheese salada.jpg';
import cheesebacon from '../../assets/cheese bacon.jpg';
import milkshake from '../../assets/milkshake.jpg';
import batata from '../../assets/batata.jpg';
import cardapio from '../../assets/Cardápio Pinus.png';

export default function Cardapio(){
    return(
        <div id="Card" className="Cardapio">
            <div className="Campo">
                <h1>Hamburguers</h1>
                <ul className="Burguers">
                    <li className="Burguer">
                        <div className="title-burguer">
                            <h2>Smash Clássico</h2>
                            <h3>13,00</h3>
                        </div>
                        <img src={smashclassico} alt="Smash Clássico"/>
                        <h3>Pão Brioche, Smash de 100g, Queijo Prato e Molho Pinu's Especial.</h3>
                    </li>
                    <li className="Burguer">
                        <div className="title-burguer">
                            <h2>Smash Bacon</h2>
                            <h3>15,00</h3>
                        </div>
                        <img src={smashbacon} alt="Smash Bacon"/>
                        <h3>Pão Brioche, Smash de 100g, Queijo Cheddar, Bacon e Molho Pinu's Especial.</h3>
                        
                    </li>
                    <li className="Burguer">
                        <div className="title-burguer">
                            <h2>Cheese Salada</h2>
                            <h3>18,00</h3>
                        </div>
                        <img src={cheesesalada} alt="Cheese Salada"/>
                        <h3>Pão Brioche, Burger de 150g, Queijo Prato, Alface, Tomate e Molho Pinu's Especial.</h3>
                        
                    </li>
                    <li className="Burguer">
                        <div className="title-burguer">
                            <h2>Cheese Bacon</h2>
                            <h3>19,00</h3>
                        </div>
                        <img src={cheesebacon} alt="Cheese Bacon"/>
                        <h3>Pão Brioche, Burger de 150g, Queijo Cheddar, Bacon e Molho Pinu's Especial.</h3>
                        
                    </li>
                </ul>
                <h1>Acompanhamentos</h1>
                <ul className="Acompanhamentos">
        
                    <li className="Acompanhamento">
                        <h2>Batata Individual</h2>
                        <img src={batata} alt="Batata Simples"/>
                    </li>
                    <li className="Milkshake">
                        <h2>Milk Shakes</h2>
                        <img src={milkshake} alt="MilkShake"/>
                        <h3>Sabores de Ovomaltine, Paçoca, Leite Ninho e Nesquik de morango.</h3>
                    </li>
                </ul>
                <div className="Cardapio-img">
                    <img src={cardapio} alt="Cardapio"/>
                </div>
            </div>
        </div>
    )
}