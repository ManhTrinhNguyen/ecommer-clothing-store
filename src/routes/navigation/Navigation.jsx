import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown (1).svg"
import { UserContext } from '../../context/UserContext';
import { signOutAuthUser } from '../../utils/firebase/Firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import { CartContext } from '../../context/CartContext';
import { NavigationContainer, LogoContainer, NavLinksContainer, LinkContainer } from './navigation.styles';

function Navigation() {
  const { currentUser } = useContext(UserContext)
  const {toggle} = useContext(CartContext)

   async function signOutUser() {
     await signOutAuthUser();
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
            <CrwnLogo />
        </LogoContainer>

        <NavLinksContainer>
          <LinkContainer to="/shop">
            Shop
          </LinkContainer>
          {currentUser ?
            (<LinkContainer as="span" onClick={signOutUser}>Sign Out</LinkContainer>)
            :
            (
            <LinkContainer to="/auth">
              Sign In
              </LinkContainer>
            )}
          <CartIcon />
        </NavLinksContainer>
        {toggle && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation