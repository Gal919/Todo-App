import React from 'react';
import '../styles/Header.scss'

const Header = ({ titelName }) => (
  <div className='title-container'>
    <h1 className='title'>{titelName}</h1>
  </div>
);

export default Header;
