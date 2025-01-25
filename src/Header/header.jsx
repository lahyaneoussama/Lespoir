import React from 'react'
import './css/Header.css'

export default function Header() {
  return (
    <div className='Header'>
            <div className="logo">
            <img src="./images/logo.png" alt="L'Espoir Logo" />
            </div>
        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <button className="login-btn">Connexion</button>
    </div>
  )
}
