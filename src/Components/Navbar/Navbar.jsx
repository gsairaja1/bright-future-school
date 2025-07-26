import React, { useEffect, useState } from 'react';
import './Navbar.css';
// import logo from '../../assets/logo.png';
const logo = "https://img.freepik.com/premium-vector/school-logo-vector-design-with-white-background_579306-14617.jpg?w=2000";
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prev => !prev);
  };

  const handleLinkClick = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="brand-container">
        <img src={logo} alt="School Logo" className='logo' />
        <span className='school-name'>Bright Future School</span>
      </div>
      <ul className={`nav-links ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={handleLinkClick}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>Subjects</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={handleLinkClick}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>School Tour</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>Student Voices</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} onClick={handleLinkClick} className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="Toggle Menu" className='menu-icon' onClick={toggleMenu} aria-label="Toggle navigation" />
    </nav>
  );
};

export default Navbar;
