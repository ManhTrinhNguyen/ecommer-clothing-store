import React from 'react'
import { Outlet } from 'react-router-dom'
import { Fragment,} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown (1).svg"
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import { NavigationContainer, LogoContainer, NavLinksContainer, LinkContainer } from './navigation.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user.selector.js"
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';

function Navigation() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen)

  function signOutUser() {
     dispatch(signOutStart())
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
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation