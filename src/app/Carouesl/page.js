'use client';
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

export default function Func2() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="/1.jpg" className={styles.img} alt="Slide 1" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/2.jpg" className={styles.img} alt="Slide 2" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/3.jpg" className={styles.img} alt="Slide 3" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/4.jpg" className={styles.img} alt="Slide 4" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/5.jpg" className={styles.img} alt="Slide 5" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/6.jpg" className={styles.img} alt="Slide 6" />
                </div>
            </div>

            <div className={styles.cover}></div>
        </div>
    );
}