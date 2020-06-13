import React from 'react'
import styled from 'styled-components'
import frankLogo from '../../Assets/FFC_logo_2_dark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


const TopWrapper = styled.div`
  max-width: 768px; 
  position: fixed;
  top: 0px;
  z-index: 5; 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100%; 
  height: 70px; 
  background: #211B1B;
`

const FrankCheeseLogo = styled.img`
  height: 90%;
  margin-left: 5px;
  width: auto; 
`

const OuterBasketDiv = styled.div` 
  display: flex; 
  flex-direction: row;
  align-items: center; 
`

const Counter = styled.div`
  background: #EE8C1D;
  width: 30px; 
  height: 30px; 
  border-radius: 50%;
  font-family: 'Cera Pro Bold';
  font-size: 24px; 
  color: #211B1B; 
  text-align: center;
  &:hover {
    cursor: pointer;
    background: #FACA66;
  }  
`

const ShoppingBasketDiv = styled.div`
  font-size: 28px; 
  color: #FACA66;
  margin-right: 25px;

  &:hover{
    cursor: pointer; 
    color: #EE8C1D;
  } 
`

const TopContainer = (props) => {
  const { myCart, gotoCheckout, totalItems } = props
  return (
    <TopWrapper>
        <FrankCheeseLogo src={frankLogo}/>
        <OuterBasketDiv onClick={()=> gotoCheckout()}>
          {totalItems > 0 && (
            <Counter>{totalItems}</Counter>
          )}
          <ShoppingBasketDiv>
            <FontAwesomeIcon icon={faShoppingBasket}/>
          </ShoppingBasketDiv>
        </OuterBasketDiv>
    </TopWrapper>
  )
}

export default TopContainer