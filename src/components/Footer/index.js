import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import trophyImg from '../../assets/trophy.png';
import searchImg from '../../assets/search.png';
import commentImg from '../../assets/comment.png';

export default function Footer(){
  return (
    <footer>
      <ul>
      <li><Link to="/"><img src={searchImg} alt="Busca"/></Link></li>
      <li id="trophy-footer"><Link to="/conquests"><img src={trophyImg} alt="Conquistas"/></Link></li>
      <li><Link to="/"><img src={commentImg} alt="Mensagens"/></Link></li>
      </ul>
    </footer>
  );
}