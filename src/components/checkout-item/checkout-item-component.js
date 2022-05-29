import { useContext} from "react";
import { CartDropdownContext } from "../../context/cart-dropdown-context";



const CheckoutItems = () => {

    const {cartItems, addItemToCart, removeItemToCart, cancelItemFromCart, totalPrice} = useContext(CartDropdownContext);


    const cartList = cartItems.map((item) => {

        const {qty, name, price, imageUrl, id} = item;

        const incrementItem = () => {
            addItemToCart(item);
        }
        const decrementItem = () => {
           removeItemToCart(item);                                
        }
        const cancelItemAndRemoveFromCart = () => {
            cancelItemFromCart(item)
        }

        return (
            <div key={id} className="checkout-item-container">
                <div className="image-container">
                    <img src={imageUrl} alt={name} />
                </div>
                <span className="name">{name}</span>
                <span className="quantity">
                    <div onClick={decrementItem} className="arrow">&#10094;</div>
                    <span className="value">{qty}</span>
                    <div onClick={incrementItem} className="arrow">&#10095;</div>
                </span>
                <span className="price">{price * qty}</span>
                <div onClick={cancelItemAndRemoveFromCart} className="remove-button">&#10005;</div>
            </div>
        )
    })

    

    

    return (
        <>
            {cartList}
            <div className="total">Total: ${totalPrice}</div>
        </>
    )
}

export default CheckoutItems;