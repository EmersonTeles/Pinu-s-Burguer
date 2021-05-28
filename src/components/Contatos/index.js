import React from 'react';
import './styles.css';

export default function Contatos(){
    const whats = "https://wa.me/5561996232774"
    const insta = "https://www.instagram.com/pinusburguer/"
    return(
        <div id="Contatos" className="Contatos">
            <div className="Area">
                <div className="Endereços">
                    <h2>Localização</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15349.687950479023!2d-48.0160353!3d-15.8869483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e445713e157ddda!2sPinu&#39;s%20Burguer!5e0!3m2!1sen!2sbr!4v1611946787057!5m2!1sen!2sbr" 
                        frameborder="0"
                        allowfullscreen=""
                        aria-hidden="false" 
                        tabindex="0"
                        title="Maps">    
                    </iframe>
                    <div className="Midias">
                        <div className="Whatsapp">                     
                            <a href={whats}  target="_blank"  rel="noopener noreferrer">
                                <i class="fa fa-whatsapp" aria-hidden="true"/>
                                <h3>Whatsapp</h3>
                            </a>
                        </div>  
                        <div className="Instagram">  
                            <a href={insta}  target="_blank"  rel="noopener noreferrer">
                                <i class="fa fa-instagram" aria-hidden="true"/>
                                <h3>Instagram</h3>
                            </a>
                        </div>  
                    </div>
                    <h2>pinusburguer@gmail.com</h2>
                </div>
                
                
                <div className="Horarios">
                    <h2>Segunda-feira: 18h-22h</h2>
                    <h2>Terça-feira: Fechado</h2>
                    <h2>Quarta-feira: 18h-22h</h2>
                    <h2>Quinta-feira: 18h-22h</h2>
                    <h2>Sexta-feira: 18h-22h</h2>
                    <h2>Sábado: 18h-23h</h2>
                    <h2>Domingo: 18h-23h</h2>
                </div>
            </div>
        </div>
    )
}