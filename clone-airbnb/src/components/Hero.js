import React from "react";
import photo from "../images/photo-grid.png"; // Importa a imagem corretamente

export default function Hero() {
    return (
        <section className="hero">
            <img src={photo}  className="hero--photo" alt="Hero"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}