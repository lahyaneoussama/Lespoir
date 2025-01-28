import React from 'react';
import "./css/contact.css"

export default function Contact() {
  return (
    <div class="contact-section">
    <div class="contact-container">
      <div class="contact-form">
        <h2>Contactez-nous</h2>
        <form>
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div class="map">
        <img src="./images/map.jpg" alt="Map" />
      </div>
    </div>
  </div>
  )
}
