import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

import personImg from '../../assets/person.png'
import levelImg from '../../assets/level.png'

import XPpotionImg from '../../assets/XPpotion.png'
import XPcoinImg from '../../assets/XPcoin.png'

export default function Profile() {

    return (
        <>
        <Header />
        <div className="profile2-container">
            <section className="identif-container">
                <img src={personImg} className="img-person" alt="Person"/>
                <div className="person-container">
                    <h3>Patricia Silva</h3>
                    <p>Aventureira do 9º ano</p>
                    <span>Nível 03</span>
                </div>
            </section>

            <section>
                <div className="mission-container">
                    <h4>Pontos de Experiência</h4>
                    <p>530 pontos</p>
                </div>
                <img src={XPpotionImg} className="img-xp" alt="Mission"/>
                <div className="mission-container-center">
                    <img src={levelImg} className="img-level" alt="530 Pontos"/><br />
                    <span>Faltam 76 pontos para você atingir o nível 4!</span>
                </div>
            </section>

            <section>
                <div className="mission-container">
                    <h4>Moedas</h4>
                    <p>326 moedas</p>
                </div>
                <img src={XPcoinImg} className="img-xp" alt="Mission"/>
                <div className="mission-container-center">
                    <button className="button-adquira">Adquira novos itens!</button>
                </div>
            </section>

        </div>
        <Footer />
        </>
    );
}