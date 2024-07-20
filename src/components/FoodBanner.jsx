
import fiftyPercentage from '../images/homePage/foodBanner/50percent-off.png'
import burgerDecor from '../images/homePage/foodBanner/burger-text.png'
import mainFood from '../images/homePage/foodBanner/main-food.png'
import pizzaText from '../images/homePage/foodBanner/pizza-text.png'
import pizzaText2 from '../images/homePage/foodBanner/pizza-text-2.png'
import pizza2 from '../images/homePage/foodBanner/pizza-2.png'
export default function FoodBanner() {
    return (
        <section className='food-banner'>
            <div className='banner1'>
                <div className="super-delicious">
                    <h3 className="crispy">CRISPY, EVERY BITE TASTE
                    </h3>
                    <h1 className="super">SUPER
                        DELICIOUS
                    </h1>
                    <div className="decorations">
                        <img src={fiftyPercentage} alt="50%" />
                    </div>
                </div>
                <div className="banner1-img">
                    <img className='decorations' src={burgerDecor} alt="burger-decor" />
                    <img src={mainFood} alt="main-food" />
                </div>
            </div>
            <div className='banner2'>
                <div className="super-delicious-img">
                    <img src={pizzaText} alt="pizza-text" />
                </div>
                <div className="banner2-img">
                    <div className="decorations">
                        <img src={pizzaText2} alt="pizza-text-2" />
                    </div>
                    <div className='pizza-2-img'>
                        <img src={pizza2} alt="pizza-2" />
                    </div>
                </div>
            </div>
        </section >
    )
}
