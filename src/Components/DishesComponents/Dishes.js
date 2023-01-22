import { useSelector } from "react-redux";
import dishesData from "../../data/dishesData";
import Dish from "./Dish";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="container">
            {dishesData
            .filter(dish => {
                return selectedCategory === dish.category;
            })
            .map(dish => <Dish dish = {dish}/>)}
        </div>
    )
}

export default Dishes;