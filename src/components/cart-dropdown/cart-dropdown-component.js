import './cart-dropdown-styles.scss';
import Button from '../button/button-component';
import CartItems from './cart-items-list-component';

const CartDropdown = () => {

    return(
        <div className='cart-dropdown-container'>
            <CartItems />
            <Button title='checkout' />
        </div>
    )
}

export default CartDropdown;