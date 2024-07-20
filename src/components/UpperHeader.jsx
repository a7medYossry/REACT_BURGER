import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faTruck } from '@fortawesome/free-solid-svg-icons';

export default function UpperHeader() {
    return (
        <div className='upper-header'>
            <div className='right-background'></div>
            <div className='left'>
                <span className='percent'>100%</span>
                <span> Secure delivery without contacting the courier</span>
                <span className='truck'><FontAwesomeIcon icon={faTruck} /></span>
                <span>Track Your Order</span>
            </div>
            <div className='right'>
                <div className="search-bar">
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className='social-icons'>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPinterest} />
                    </a>
                </div>
            </div>
        </div>
    )
}
