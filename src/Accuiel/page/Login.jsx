import React from 'react';
import "./css/Login.css"


export default function Login() {
  return (
    <div className="container">
 
    <div className="left-panel">
        <div className="logoOranges">
            <div className='LogoWhite'>
                <div className="images">
                <img src="./images/logo.png" alt="" />
                </div>
            </div>
        </div>
        <h1>Bienvenue de retour!</h1>
        <p>Pour rester connecté, veuillez vous connecter avec vos informations personnelles.</p>
        <button>S'inscrire</button>
    </div>

   
    <div className="right">
    <div className="right-panel">
        <h2>Bienvenue</h2>
        <p className='Aides'>Connectez-vous à votre compte pour continuer</p> 

        <form>
            <div className="form-group">
                <label for="email">Nom utilisateur</label>
                <input type="email" id="email" placeholder="E-mail" />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
            </div>

            <div className="form-actions">
                <a href="#">Mot de passe oublié?</a>
            </div>

            <button type="submit" class="submit-button">SE CONNECTER</button>
        </form>

        <div class="signup-link">
            <p>Vous n'avez pas de compte ? <a href="#">Inscrivez-vous</a></p>
        </div>
    </div>
</div>
</div>
  )
}
