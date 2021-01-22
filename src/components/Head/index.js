import React, { Component } from 'react'
import './styles.css';
import {Link} from 'react-scroll'
import logo from '../../assets/Logo site 2.svg';


export default class Head extends Component{
    render(){
        return(
            <div className="Head">
                <div className="HeadContent">
                    <img className="logo" src={logo} alt="Logo Head"/>
                    <ul className="Options">
                        <li className="ItemLista">
                            <Link activeClass="active" to="Home" spy={true} smooth={true}>Home</Link>
                        </li>
                        <li className="ItemLista">
                            <Link to="Card" spy={true} smooth={true}>Cardápio</Link>
                        </li>
                        <li className="ItemLista">
                            <a href="https://order.ubereats.com/brasilia/food-delivery/Pinu's%20Burguer/Gs_zoPaFQYinVSHcUtXPqw/?utm_source=web-restaurant-manager"  target="_blank"  rel="noopener noreferrer">Delivery</a>
                        </li>
                        <li className="ItemLista">
                            <Link to="Contatos" spy={true} smooth={true}>Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
} 