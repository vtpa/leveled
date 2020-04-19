import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

import videoImg from '../../assets/video.png'
import rewardImg from '../../assets/reward.png'

export default function Lesson() {

    return (
        <>
        <Header />
        <div className="lesson-container">
            <div className="video-container">
                <img src={videoImg} alt="Video"/>
            </div>
            <h3>Introdução à Química</h3>
            <section>
                <div className="lesson-container">
                    <p>Preparada para essa Missão?</p>
                    <p>Hoje descobriremos o que é a Química,</p>
                    <p>como surgiu e seus principais conceitos.</p>
                    <span>Professor: Evandro Brandão.</span>
                </div>
            </section>
            <div className="award-container">
                <img src={rewardImg} alt="Recompensa"/>
                <p>Recompensa: </p>
                <p>15 pontos de Experiência</p>
                <p>20 moedas</p>
            </div>

        </div>
        <Footer />
        </>
    );
}