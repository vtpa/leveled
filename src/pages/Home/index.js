import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

import personImg from '../../assets/person.png'
import mission1Img from '../../assets/mission1.png'
import mission2Img from '../../assets/mission2.png'
import mission3Img from '../../assets/mission3.png'

export default function Home() {

    return (
        <>
        <Header />
        <div className="profile-container">
            <section>
                <img src={personImg} className="img-person" alt="Person"/>
                <div className="person-container">
                    <h3>Olá, Patricia!</h3>
                    <p>Vamos continuar a jornada?</p>
                    <p>Retorne à missão!</p>
                </div>
            </section>

            <section>
                <div className="mission-container">
                    <h4>1ª Missão do Dia</h4>
                    <p>Completar a aula</p>
                    <p>- Introdução à Quimica</p>
                    <Link to="/lesson"><button>Começar!</button></Link>
                </div>
                <img src={mission1Img} className="img-mission" alt="Mission"/>
            </section>

            <section>
                <div className="mission-container">
                    <h4>2ª Missão do Dia</h4>
                    <p>Completar a aula</p>
                    <p>- Literatura Brasileira</p>
                    <Link to="/lesson"><button>Começar!</button></Link>
                </div>
                <img src={mission2Img} className="img-mission" alt="Mission"/>
            </section>

            <section>
                <div className="mission-container">
                    <h4>Exercícios do Dia:</h4>
                    <p>Química: Páginas 32 a 33</p>
                    <p>Literatura: páginas 45 a  47</p>
                    <button className="exercises">Abrir</button>
                </div>
                <img src={mission3Img} className="img-mission" alt="Mission"/>
            </section>

        </div>
        <Footer />
        </>
    );
}