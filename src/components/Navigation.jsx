import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src="src/assets/burger-logo.svg" alt="burger-logo" className="nav__logo-image" />
          <h1 className="nav__logo-name">React Burger</h1>
        </Link>
      </div>
      <div className="nav__links">
        <Link to="/" className="nav__link">Home</Link>
        <Link to="/shop" className="nav__link">Shop</Link>
        <Link to="/blog" className="nav__link">Blog</Link>
        <Link to="/aboutus" className="nav__link">About Us</Link>
        <Link to="/contact" className="nav__link">Contact</Link>
      </div>
      <div className='nav__actions-container'>
        <div className="nav__cart">
          <div className='test'></div>
          <Link to="/cart">
          <FontAwesomeIcon icon={faBagShopping} />
            <span className="nav__cart-count">0</span>
          </Link>
        </div>
        <div className="nav__contact-button">
          <button>CONTACT US</button>
        </div>
        <div className="nav__burger-button">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
