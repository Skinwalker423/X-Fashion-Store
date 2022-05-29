import './cart-dropdown-styles.scss';
import Button from '../button/button-component';
import CartItems from './cart-items-list-component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown-context';

const CartDropdown = () => {

    const {setCartDropdownDisplayed} = useContext(CartDropdownContext);

    const closeDropdownCartOnCheckout = () => {
        setCartDropdownDisplayed(false);
    }

    return(
        <div className='cart-dropdown-container'>
            <CartItems />
            <Link to='/checkout'>
                <Button title='checkout' onClickHandler={closeDropdownCartOnCheckout} />
            </Link>
        </div>
    )
}

export default CartDropdown;