import './cart-dropdown-styles.scss';
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown-context';


const CartItems = () => {

    const {cartItems} = useContext(CartDropdownContext);

    const renderCartItems = () => {
        return cartItems.map(({imageUrl, name, price, id, qty}) => {
            return (
                <div key={id} className='cart-item-container'>
                    <img src={imageUrl} alt={name} />
                    <div className='item-details'>
                        <span className='name'>{name}</span>
                        <span>{qty}x${price} = {price * qty}</span>
                    </div>
                </div>
            )
        })
    }

    return(
            <div className='cart-items'>
                {renderCartItems()}
            </div>
    )
}

export default CartItems;