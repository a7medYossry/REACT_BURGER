import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import  { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import decor1 from "../images/homePage/heroSection/Burger-text-ele2.png"
import decor2 from "../images/homePage/heroSection/Burger-text-ele4.png"

export default function PopularFoodItems() {
    const foodItems = useSelector((state) => state.foodItems);
    const [startIndex, setStartIndex] = useState(0);
    const [active, setActive] = useState('');
    const [isAnimating, setIsAnimating] = useState(false); // new state variable
    const itemsToShow = 6;
    console.log(foodItems.length);

    const handleNext = () => {
        if (isAnimating) return; // ignore click if already animating
        setIsAnimating(true);
        setActive('active-next');
        setTimeout(() => {
            setActive('');
            setStartIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
            setIsAnimating(false); // animation complete, allow new clicks
        }, 500);
    };

    const handlePrevious = () => {
        if (isAnimating) return; // ignore click if already animating
        setIsAnimating(true);
        setActive('active-previous');
        setTimeout(() => {
            setActive('');
            setStartIndex((prevIndex) => (prevIndex - 1 + foodItems.length) % foodItems.length);
            setIsAnimating(false); // animation complete, allow new clicks
        }, 500);
    };
    const displayedItems = foodItems
        .slice(startIndex, startIndex + itemsToShow)
        .concat(foodItems.slice(0, Math.max(0, (startIndex + itemsToShow) - foodItems.length)));

    return (
        <section className='popularFoodItems'>
            <div className='header'>
                <div className='text'>
                    <h2 className='top'>
                        CRISPY, EVERY BITE TASTE
                    </h2>
                    <h1 className='bottom'>
                        POPULAR FOOD ITEMS
                    </h1>
                </div>
                <div className='food-list-buttons'>
                    <button className='left' aria-label='Previous' onClick={handlePrevious}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className='right' aria-label='Next' onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <div className={`food-list ${active} `}>
                {displayedItems.map((food) => (
                    <div className='food-item' key={`${startIndex}-${food.id}`}>
                        <div className='img-and-decoration'>
                            <img className='decor1-top' src={decor1} alt="decoration-top" />
                            <img className='decor2-top' src={decor2} alt="decoration-top" />
                            <img className='decor1-bottom' src={decor1} alt="decoration-bottom" />
                            <img className='decor2-bottom' src={decor2} alt="decoration-bottom" />
                            <img className='food-img' src={food.image} alt={food.name} />
                        </div>
                        <div className='line'></div>
                        <div className='name'>
                            <span>
                                {food.name}
                            </span>
                        </div>
                        <div className='numOfProducts'>
                            {food.products} PRODUCTS
                        </div>
                        <div className='food-slogan-1'>BEST</div>
                        <div className='food-slogan-2'>{food.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

PopularFoodItems.propTypes = {
    foodItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            products: PropTypes.number.isRequired,
        })
    ).isRequired,
};
