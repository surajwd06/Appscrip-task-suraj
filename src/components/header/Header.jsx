import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bottom-nav">
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ?<i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>}
      </div>
      <nav className='top_nav_item'>
        <ul className={isOpen ? 'open' : ''}>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
