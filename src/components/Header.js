import React from 'react';
import '../assets/styles/components/header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import iconProfile from '../assets/static/user-icon.svg';

const Header = () => {
  return (
    <header className='header header--purple'>
      <img className='header__img' src={logo} alt='Logo Platzi video' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={iconProfile} alt='Perfil' />
          <p>Perfil</p>
        </div>
        <ul className='header__menu--list'>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <a href='/'>Cerrar Sesion</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
