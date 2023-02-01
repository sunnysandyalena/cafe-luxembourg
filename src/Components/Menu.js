import Dishes from "./DishesComponents/Dishes";
import AllCategories from "./Filters/AllCategories"

const Menu = () => {
    return (
        <div>
            <div className="block">
                <AllCategories/>
            </div>
            <div className="container">
                <Dishes/>
            </div>
        </div>
    )
}

export default Menu;