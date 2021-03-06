import React, { Component } from 'react'
import './styles.css';
import {Link} from 'react-scroll'
import logo from '../../assets/Logo site 2.svg';
import Navbar from '../Sidebar';

export default class Head extends Component{
    render(){
        return(
            <>
                <div className="Head">   
                    <img className="logo" src={logo} alt="Logo Head"/>
                    <div className="HeadContent">
                        <ul className="Options">
                            <li className="ItemLista">
                                <Link activeClass="active" to="Home" spy={true} smooth={true}>Home</Link>
                            </li>
                            <li className="ItemLista">
                                <Link to="Card" spy={true} smooth={true}>Cardápio</Link>
                            </li>
                            <li className="ItemLista">
                                <Link to="Contatos" spy={true} smooth={true}>Contato</Link>
                            </li>
                            <li className="ItemLista">
                                <a href="https://www.ifood.com.br/delivery/brasilia-df/pinus-burguer-riacho-fundo-i/1157a3fa-2fe3-4839-8619-7730465d8520"  target="_blank"  rel="noopener noreferrer">Ifood</a>
                            </li>
                            <li className="ItemLista">
                                <a href="https://www.ubereats.com/brasilia/food-delivery/pinus-burguer/Gs_zoPaFQYinVSHcUtXPqw"  target="_blank"  rel="noopener noreferrer">UberEats</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Navbar className="NavBar"/>
            </>
        )
    }
} 