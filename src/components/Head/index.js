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
                            <a href="https://www.ifood.com.br/delivery/brasilia-df/pinus-burguer-riacho-fundo-i/1157a3fa-2fe3-4839-8619-7730465d8520"  target="_blank"  rel="noopener noreferrer">Delivery</a>
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