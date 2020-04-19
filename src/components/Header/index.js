import React from 'react';
import { Link } from 'react-router-dom';

import menuImg from '../../assets/menu-button.png';
import powerImg from '../../assets/power-1.png';

import './styles.css';

export default function Header(){
  return (
    <nav>
      <ul>
      <li id="menu"><Link to="/profile"><img src={menuImg} alt="Menu"/></Link></li>
      <li><Link className="link-home" to="/">LevelED</Link></li>
      <li id="logout"><Link to="/"><img src={powerImg} alt="Logout"/></Link></li>
      </ul>
    </nav>
  );
}