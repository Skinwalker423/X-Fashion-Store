import React, {Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase-utils";
import { UserContext } from "../../context/user-context";
import { CartDropdownContext } from "../../context/cart-dropdown-context";

import CartIcon from "../../components/cart-icon/cart-icon-component";
import './navbar-styles.scss';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";



const NavBar = () => {
    const {currentUser} = useContext(UserContext);
    const {cartDropdownDisplayed} = useContext(CartDropdownContext);

    const logOffAuthUser = async() => {

            try{
                await signOutUser();
                console.log('logged off');
            }catch(error){
                alert(error.message)
            }
        }


    const authenticate = () => {

        if(currentUser){
            return(
                <span onClick={logOffAuthUser} className='nav-link'>Log Out</span>
            )
        }

        return(
                <Link className='nav-link' to={'/auth'}>Sign In</Link>
            )
    } 
    

    return(
        <Fragment>
            <nav className="navigation">
                <Link className="logo-container" to={'/'} >
                    {/* <CrownLogo className='logo' /> */}
                    <img src="../logo192.png" width={'25px'} alt='react logo' />
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to={'/shop'}>Shop</Link>
                    {authenticate()}
                    <CartIcon />
                </div>
            {cartDropdownDisplayed && <CartDropdown />}
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default NavBar;
