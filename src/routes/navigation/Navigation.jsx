import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown (1).svg"
import "./navigation.styles.scss"
import { UserContext } from '../../context/UserContext';
import { signOutAuthUser } from '../../utils/firebase/Firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import { CartContext } from '../../context/CartContext';
function Navigation() {
  const { currentUser } = useContext(UserContext)
  const {toggle} = useContext(CartContext)

   async function signOutUser() {
     await signOutAuthUser();
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to="/">
            <CrwnLogo />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to="/shop">
            Shop
          </Link>
          {currentUser ?
            (<span onClick={signOutUser} className='nav-link'>Sign Out</span>)
            :
            (
            <Link className='nav-link' to="/authentication">
              Sign In
              </Link>
            )}
          <CartIcon />
        </div>
        {toggle && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation