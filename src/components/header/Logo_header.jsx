import React from 'react';
import './header.css'

const TopNav = () => {
  return (
    <div className="top-nav">
    <div className='logo_icon'><i className="fa-brands fa-react"></i></div>
    <div className='left_logo'>
      <div className="logo">LOGO</div>
    </div>
    <div className='right_item'>
      <ul>
        <li><i className="fa-sharp fa-solid fa-magnifying-glass"></i></li>
        <li><i className="fa-regular fa-heart"></i></li>
        <li><i className="fa-duotone fa-solid fa-bag-shopping"></i></li>
        {/* {<li><i className="fa-regular fa-user"></i></li>} */}
        {/* <li>Eng <i className="fa-duotone fa-solid fa-angle-down"></i></li> */}
      </ul>
    </div>
    </div>
  );
};

export default TopNav;
