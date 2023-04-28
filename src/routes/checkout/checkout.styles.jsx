import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
   min-height: 90vh; 
   display: flex; 
   flex-direction: column; 
   align-items: center; 
   margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
  width: 100%; 
  padding: 10px 0; 
  display: flex; 
  justify-content: space-between; 
  border-bottom: 1px solid darkgrey;
`
export const HeaderBlock = styled.div`
  text-transform: capitalize; 
  width: 23%;
`

export const Total = styled.span`
  margin-top: 30px; 
  margin-left: auto; 
  font-size: 36px;
`
  //.checkout-container { width: 55%; min-height: 90vh; display: flex; flex-direction: column; align-items: center; margin: 50px auto 0; 
  //.checkout - header { width: 100%; padding: 10px 0; display: flex; justify - content: space - between; border - bottom: 1px solid darkgrey; 
  //.header - block { text - transform: capitalize; width: 23 %; &: last - child { width: 8 %; } } } 
  //.total { margin - top: 30px; margin - left: auto; font - size: 36px; } } // checkout-item.styles.scss .checkout-item-container { width: 100%; display: flex; min-height: 100px; border-bottom: 1px solid darkgrey; padding: 15px 0; font-size: 20px; align-items: center; .image-container { width: 23%; padding-right: 15px; img { width: 100%; height: 100%; } } .name, .quantity, .price { width: 23%; } .quantity { display: flex; .arrow { cursor: pointer; } .value { margin: 0 10px; } } .remove-button { padding-left: 12px; cursor: pointer; } }