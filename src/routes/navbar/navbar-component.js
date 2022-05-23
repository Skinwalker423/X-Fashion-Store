import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import './navbar-styles.scss';
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';



const NavBar = () => {
    return(
        <Fragment>
            <nav className="navigation">
                <Link className="logo-container" to={'/'} >
                    <CrownLogo className='logo' />
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to={'/shop'}>Shop</Link>
                    <Link className='nav-link' to={'/'}>Contact</Link>
                    <Link className='nav-link' to={'/sign-in'}>Sign In</Link>
                    <Link className='nav-link' to={'/'}>cart</Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default NavBar;
