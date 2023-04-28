import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseButton, InvertedButton, GoogleSignInButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute; 
  width: 240px; 
  height: 340px; 
  display: flex; 
  flex-direction: column; 
  padding: 20px; 
  border: 1px solid black; 
  background-color: white; 
  top: 90px; 
  right: 40px; 
  z-index: 5; 

 ${BaseButton},
 ${GoogleSignInButton},
 ${InvertedButton} {
  margin-top: auto;
 }
`
export const EmptyMessage = styled.span`
  font-size: 18px; 
  margin: 50px auto;
`
export const CartItemStyle = styled.div`
  height: 240px; 
  display: flex; 
  flex-direction: column; 
  overflow: scroll;
`

//.cart-dropdown-container { position: absolute; width: 240px; height: 340px; display: flex; flex-direction: column; padding: 20px; border: 1px solid black; background-color: white; top: 90px; right: 40px; z-index: 5; 
  //.empty - message { font - size: 18px; margin: 50px auto; } 
  //.cart - items { height: 240px; display: flex; flex - direction: column; overflow: scroll; } 
//.checkout - btn { margin - top: auto; } }
//.checkout-btn { min-width: 165px; width: auto; height: 50px; letter-spacing: 0.5px; line-height: 50px; padding: 0 35px 0 35px; font-size: 15px; background-color: black; color: white; text-transform: uppercase; font-family: 'Open Sans Condensed'; font-weight: bolder; border: none; cursor: pointer; display: flex; justify-content: center; &:hover { background-color: white; color: black; border: 1px solid black; } &.google-sign-in { background-color: #4285f4; color: white; &:hover { background-color: #357ae8; border: none; } } &.inverted { background-color: white; color: black; border: 1px solid black; &:hover { background-color: black; color: white; border: none; } } }
