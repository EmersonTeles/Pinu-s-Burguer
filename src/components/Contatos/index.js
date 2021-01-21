import React from 'react';
import './styles.css';

export default function Contatos(){
    const whats = "https://wa.me/5561996232774"
    const insta = "https://instagram/pinusburguer/"
    return(
        <div id="Contatos" className="Contatos">
            <div className="Area">
                <div className="Endereços">
                    <h2>Localização</h2>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.83873778018702!2d-48.01620845045539!3d-15.887062827678788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUzJzEzLjEiUyA0OMKwMDAnNTguMCJX!5e0!3m2!1spt-BR!2sbr!4v1611249399042!5m2!1spt-BR!2sbr" 
                        frameborder="0" 
                        allowfullscreen="" 
                        aria-hidden="false" 
                        tabindex="0"
                        title="Maps">
                    </iframe>
                    <div className="Midias">                    
                        <a href={whats}  target="_blank"  rel="noopener noreferrer">
                            <i class="fa fa-whatsapp" aria-hidden="true"/>
                        </a>
                        <h3>Whatsapp</h3>
                        <a href={insta}  target="_blank"  rel="noopener noreferrer">
                            <i class="fa fa-instagram" aria-hidden="true"/>
                        </a>
                        <h3>Instagram</h3>
                    </div>
                    <h2>pinusburguer@gmail.com</h2>
                </div>
                
                <h1>Horário de Funcionamento</h1>
                <div className="Horarios">
                    <h2>Segunda-feira: 18h30-23h</h2>
                    <h2>Terça-feira: 18h30-23h</h2>
                    <h2>Quarta-feira: 18h30-23h</h2>
                    <h2>Quinta-feira: 18h30-23h</h2>
                    <h2>Sexta-feira: 18h30-23h</h2>
                    <h2>Sábado: 18h30-23h</h2>
                    <h2>Domingo: Fechado</h2>
                </div>
            </div>
        </div>
    )
}