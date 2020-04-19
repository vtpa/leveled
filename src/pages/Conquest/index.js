import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

import goldcupImg from '../../assets/goldcup.png'
import facebookImg from '../../assets/facebook.png'
import instagramImg from '../../assets/instagram.png'
import shareImg from '../../assets/share.png'

export default function Conquest() {

    return (
        <>
        <Header />
        <div className="conquest-container">
            <section className="identif-container">
                <div className="img-conquest">
                    <img src={goldcupImg} className="img-person" alt="Troféu"/>
                </div>
                <div className="person-container">
                    <h3>Missão Diária Ouro</h3>
                    <p className="space">Parabéns aventureira!</p>
                    <p>Você ganhou esse troféu por</p>
                    <p>Assistir Todas as Missões Diárias</p>
                    <p>durante um mês. Continue assim!</p>
                    <p className="space">Compartilhar via:</p>
                    <div className="share">
                        <img src={facebookImg} alt="Facebook"/>
                        <p>Facebook</p>
                    </div>
                    <div className="share">
                        <img src={instagramImg} alt="Instagram"/>
                        <p>Instagram</p>
                    </div>
                    <div className="share">
                        <img src={shareImg} alt="Copiar Link"/>
                        <p>Copiar Link</p>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
        </>
    );
}