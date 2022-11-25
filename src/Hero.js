import React from "react";
import HeroImg from './images/photo-airbnb.png'


export default function Hero() {
    return(
        <section className="hero-container">
            <img src={HeroImg} alt="photo-grid" className="hero--img" />
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
    )
}