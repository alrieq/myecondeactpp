import React from "react";
import grid from './../images/photo-grid.png';

export default function Hero() {
    return (
        <section className="hero">
            <img src={grid} alt="grid" className="hero--grid" />
            <h1 className="hero--h1">Online Experiences</h1>
            <p className="hero--p">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}