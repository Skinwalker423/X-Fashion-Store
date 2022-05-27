import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import './cart-icon-styles.scss';
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown-context';

const CartIcon = () => {

    const {cartDropdownDisplayed, setCartDropdownDisplayed} = useContext(CartDropdownContext)

    const  toggleCart = () => {
        setCartDropdownDisplayed(!cartDropdownDisplayed);
        console.log(cartDropdownDisplayed);
    }

    return (
        <div onClick={toggleCart} className='cart-icon-container'>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;