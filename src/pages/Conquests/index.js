import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

import trophy2Img from '../../assets/trophy2.png'

import silvercupImg from '../../assets/silvercup.png'
import goldcupImg from '../../assets/goldcup.png'
import bacteriaImg from '../../assets/bacteria.png'
import treasureImg from '../../assets/treasure.png'

export default function Conquests() {

    return (
        <>
        <Header />
        <div className="conquests-container">
            <section className="identif-container">
                <img src={trophy2Img} className="img-person" alt="Troféu"/>
                <div className="person-container">
                    <h3>Conquistas</h3>
                    <p>Esta é a sua sala de Troféus. Ganhe mais</p>
                    <p>cumprindo missões diárias e exercícios.</p>
                </div>
            </section>
            <div className="square-buttons">
                <div>
                    <img src={silvercupImg} alt="Prata"/>
                    <h4>Missão Diária Prata</h4>
                </div>
                <Link to="/conquest">
                    <div>
                        <img src={goldcupImg} alt="Ouro"/>
                        <h4>Missão Diária Ouro</h4>
                    </div>
                </Link>
                <div>
                    <img src={bacteriaImg} alt="Jedi"/>
                    <h4>Jedi da Biologia</h4>
                </div>
                <div>
                    <img src={treasureImg} alt="Aventureiro"/>
                        <h4>Aventureiro da História</h4>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}