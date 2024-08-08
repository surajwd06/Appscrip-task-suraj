import React from 'react';
import './header.css'

const TopNav = () => {
  return (
    <div className="top-nav">
    <div className='left_logo'>
      <div className="logo">LOGO</div>
    </div>
    <div className='right_item'>
      <ul>
        <li><i class="fa-sharp fa-solid fa-magnifying-glass"></i></li>
        <li><i class="fa-regular fa-heart"></i></li>
        <li><i class="fa-duotone fa-solid fa-bag-shopping"></i></li>
        <li><i class="fa-regular fa-user"></i></li>
        <li>Eng</li>
      </ul>
    </div>
    </div>
  );
};

export default TopNav;
