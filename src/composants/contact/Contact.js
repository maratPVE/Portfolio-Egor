import React, { useState } from 'react';
import '../../styles/pages/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className="section contact-section">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <span>hidex0912@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <span>07 69 39 09 74</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <span>Beausoleil (06240)</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-briefcase contact-icon"></i>
              <span>Disponible pour un stage du 7 avril au 21 juillet 2025</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom" className="form-label">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="form-input"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sujet" className="form-label">Sujet</label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                className="form-input"
                value={formData.sujet}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
