import React from 'react';
import './styles.css';

export default function Footer() {
  const instagram = 'https://www.instagram.com/pinusburguer/';
  return (
    <div className="Footer">
      <div className="Content">
        <div className="Social">
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"> </i>
          </a>
        </div>
        <div className="Copy">
          <h3>&copy; 2020 Pinu's Burguer. Todos os direitos reservados.</h3>
        </div>
      </div>
    </div>
  );
}