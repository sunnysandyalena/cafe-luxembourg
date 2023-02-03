import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return (
        <div className="container-dishes" key = {dish.id}>
            <h2 className='heading'>{dish.name}</h2>
            <img className="dish-img" src ={dish.img} alt = {dish.name}/>
            <p className="text">{dish.description}</p>
            <h3>${dish.price}</h3>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}} className="add-btn">ADD</button>
        </div>
    )
}

export default Dish;