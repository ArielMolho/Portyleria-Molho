import React from "react";
import './ContactPageContainer.css';
import instagram from '../../assets/images/instagram.png';
import email from '../../assets/images/gmail.png';
import whatsapp from '../../assets/images/whatsapp.png';

export default function ContactPageContainer() {
    return(
        <div className="contact-body">
            <h1 className="contact-title">Si querés contactarme, usá alguno de los siguientes canales:</h1>
            <div className="d-flex flex-column justify-content-around align-items-center contact-icons">
                <a href="https://www.instagram.com/portyleria/?hl=es" target="_blank" rel='noreferrer' className="contact-links">
                    <img src={instagram} className="d-block w-25 h-25 mx-auto" alt="instagram"/>
                </a>
                <a href="mailto:email@example.com" className="contact-links">
                    <img src={email} className="d-block w-25 h-25 mx-auto" alt="email"/>
                </a>
                <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Flcm1z0&e=ATNdST8qGve1TfiY1UqxivGPg8RHmuBNoac0pRnt-E7oIZBz4s19xjhF4OHvTAcqE7AmiMXNFK5sjl5O&s=1" target="_blank" rel='noreferrer' className="contact-links">
                    <img src={whatsapp} className="d-block w-25 h-25 mx-auto"  alt="whatsapp"/>
                </a>
            </div>
        </div>
    )
}