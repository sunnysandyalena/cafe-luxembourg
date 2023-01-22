import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from './CartItem';
const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)
    return (
        <div className="container-dish">
            <h2>CART</h2>
            {cartItems.map(cartItem =>  <CartItem cartItem={cartItem} />)}
            <h3>TOTAL: ${totalPrice}</h3>
        </div>
    )
}
export default Cart;