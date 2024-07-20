import FoodBanner from '../components/FoodBanner'
import Hero from '../components/Hero'
import PopularFoodItems from '../components/PopularFoodItems'

export default function Home() {
    return (
        <div className='home'>
            <Hero/>
            <PopularFoodItems/>
            <FoodBanner/>
        </div>
    )
}
