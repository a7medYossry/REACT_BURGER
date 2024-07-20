
import React from 'react';
import burgerTextele1 from '../images/homePage/heroSection/Burger-text-ele1.png';
import burgerTextele2 from '../images/homePage/heroSection/Burger-text-ele2.png';
import burgerTextele3 from '../images/homePage/heroSection/Burger-text-ele3.png';
import burgerTextele4 from '../images/homePage/heroSection/Burger-text-ele4.png';
import burgerPhoto from '../images/homePage/heroSection/burger-photo2.png';
import todayBestDeal from '../images/homePage/heroSection/todayBestDeal.png';
import textCloud from '../images/homePage/heroSection/text-Cloud.png';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__overlay">
                <img className="burger-photo" src={burgerPhoto} alt="burger" />
                <div className="hero__content">
                    <div className="hero__tagline">
                        <div className="hero__text">
                            <div className="hero__Hot">Hot <span className="hero__and">and</span></div>
                            <div className="hero__Delicious">Delicious</div>
                            <div className="hero__burger">Burger</div>
                        </div>
                        <div className="hero__burger-tagline">
                            <img src={burgerTextele1} className="tagline-burger-text" alt="burger-text-element1" />
                            <img src={burgerTextele2} className="tagline-burger-text1" alt="burger-text-element2" />
                            <img src={burgerTextele3} className="tagline-burger-text2" alt="burger-text-element3" />
                            <img src={burgerTextele4} className="tagline-burger-text3" alt="burger-text-element4" />
                        </div>
                    </div>
                    <div className="hero__deal">

                        <img className="hero__deal-img" src={todayBestDeal} alt="hero__deal" />
                        <div className="hero__deal-num">
                            <img className="deal-cloud" src={textCloud} alt="hero__deal-cloud" />
                            <h2 className="deal-percent">50%</h2>
                            <h3 className="deal-offer">save up to</h3>
                        </div>
                    </div>
                    <div className="hero__offer">
                        <div className='hero__offer-offer'>OFFER</div>
                        <div className='hero__offer-valid'>VALID</div>
                        <div className='hero__offer-for'>FOR</div>
                        <div className='hero__offer-limited'>LIMITED</div>
                        <div className='hero__offer-time'>TIME</div>
                    </div>
                </div>
            </div>
        </section>
    );
}


{/* <div className="hero__contact">
    <p>Stay home & call us for delivery</p>
    <h2>098-65-888</h2>
</div>
<div className="hero__additional-offer">
    <p>Additional 20% off on takeaways</p>
</div>
<div className="hero__info">
    <p>Lorem ipsum dolor sit cons ctetur</p>
</div> */}