import React, { useState } from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
      <a href="/" className="nav-logo">
        <img src={navlogo} alt="Logo" />
      </a>
      <div className="nav-profile" onClick={toggleDropdown}>
        <img src={navProfile} alt="Profile" />
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="/login">Login</a>
            <a href="/logout">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
