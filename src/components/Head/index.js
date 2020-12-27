import React from 'react';
import './styles.css';
import logo from '../../assets/Logo site 2.svg';
export default function Head(){
    return(
        <div className="Head">
            <div className="HeadContent">
                <img className="logo" src={logo} alt="Logo Head"/>
                <ul className="Options">
                    <li className="ItemLista">
                        <a href="/">Home</a>
                    </li>
                    <li className="ItemLista">
                        <a href="#Card">Cardápio</a>
                    </li>
                    <li className="ItemLista">
                        <a href="/">Delivery</a>
                    </li>
                    <li className="ItemLista">
                        <a href="/">Contato</a>
                    </li>
                    <li className="ItemLista">
                        <a href="/">Sobre nós</a>
                    </li>
                </ul>
            </div>
        </div>
    )
} 