import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import './cart-icon-styles.scss';
import { useContext, useEffect } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown-context';

const CartIcon = () => {

    const {cartDropdownDisplayed, setCartDropdownDisplayed, totalQuanityInCart, setTotalQuanityInCart, cartItems} = useContext(CartDropdownContext);

    useEffect(() => {
        const totalQty = () => {
            if(!cartItems.length){
                setTotalQuanityInCart(0);
            }
            const q = cartItems.reduce((previous, current) => {
                return previous + current.qty;
            }, 0)
            setTotalQuanityInCart(q);
        }
        totalQty();
    }, [cartItems, setTotalQuanityInCart])

    

    const  toggleCart = () => {
        setCartDropdownDisplayed(!cartDropdownDisplayed);
    }

    return (
        <div onClick={toggleCart} className='cart-icon-container'>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>{totalQuanityInCart}</span>
        </div>
    )
}

export default CartIcon;