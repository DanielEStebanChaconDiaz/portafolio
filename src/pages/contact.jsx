import React from 'react';
import './contact.css';
import Header from './Header';
import Animacion from './animacion';
import emailjs from 'emailjs-com';

export default function Contact() {
    // Configura EmailJS con tu clave pública
    emailjs.init('I4URI1LW1NbP32gVL'); // Reemplaza con tu clave pública

    const sendEmail = (e) => {
        e.preventDefault();

        // Identificadores del servicio y plantilla
        const serviceID = 'service_aycueqt';
        const templateID = 'template_4dd0mgu';

        // Enviar el formulario usando EmailJS
        emailjs.sendForm(serviceID, templateID, e.target)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('¡Mensaje enviado con éxito!');
            }, (error) => {
                console.log('Error sending email:', error.text);
                alert('Ocurrió un error al enviar el mensaje.');
            });
    };

    return (
        <div className="container">
            <Header />
            <Animacion />
            <div className='contact1'>
                <h2>Contacto</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Nombre" required />
                    <input type="email" name="email" placeholder="Correo electrónico" required />
                    <textarea name="message" placeholder="Escribe tu mensaje" required></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}
