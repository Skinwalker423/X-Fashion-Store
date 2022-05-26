import React, {Fragment, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { auth, signOutUser } from "../../utils/firebase/firebase-utils";


import { UserContext } from "../../context/user-context";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navbar-styles.scss';



const NavBar = () => {
    const {currentUser} = useContext(UserContext);

    // useEffect(() => {
    //     console.log(currentUser)
    // }, [currentUser])

    const logOffAuthUser = async(e) => {

            try{
                await signOutUser();
                console.log('logged off');
            }catch(error){
                alert(error.message)
            }
        }


    const authenticate = () => {

        if(currentUser){
            console.log(currentUser)
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
                    <img src="../logo192.png" width={'50px'} />
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to={'/shop'}>Shop</Link>
                    <Link className='nav-link' to={'/'}>Contact</Link>
                    {authenticate()}
                    <Link className='nav-link' to={'/'}>cart</Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default NavBar;
