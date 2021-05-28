import React, { useState } from 'react';
import {Link} from 'react-scroll';
import ifood from '../../assets/ifood logo.png';
import ubereats from '../../assets/ubereats logo.png';
import whatsapp from '../../assets/whatsapp logo.png';
import './styles.css';

function Navbar(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const whats = "https://wa.me/5561996232774";
    const ifood_link = "https://www.ifood.com.br/delivery/brasilia-df/pinus-burguer-riacho-fundo-i/1157a3fa-2fe3-4839-8619-7730465d8520";
    const ubereats_link = "https://www.ubereats.com/brasilia/food-delivery/pinus-burguer/Gs_zoPaFQYinVSHcUtXPqw";
    return(
        <>
            <div className={sidebar ? "navbar active" : "navbar"}>
                <div className="btn-pedir">
                    <Link to="#" className="menu-bars"  onClick={showSidebar}>
                        <h1>PEÇA AGORA!</h1>
                    </Link>
                </div>
                <div class="deliveries">  
                    <ul className="nav-icons">
                        <li class="delivery">
                            <a href={whats}  target="_blank"  rel="noopener noreferrer">
                                <img src={whatsapp} alt="whatsapp"/>
                            </a>
                        </li>
                        <li class="delivery">
                            <a href={ifood_link}  target="_blank"  rel="noopener noreferrer">
                                <img src={ifood} alt="Ifood"/>
                            </a>
                        </li>
                        <li class="delivery">
                            <a href={ubereats_link}  target="_blank"  rel="noopener noreferrer">
                                <img src={ubereats} alt="ubereats"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;