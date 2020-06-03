import React from 'react'
import styled from 'styled-components'
import frankLogo from '../../Assets/FFC_logo_2_dark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


const TopWrapper = styled.div`
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

const ShoppingBasketDiv = styled.div`
  font-size: 28px; 
  color: #FACA66;
  margin-right: 25px; 
`

const TopContainer = () => {
  return (
    <TopWrapper>
        <FrankCheeseLogo src={frankLogo}/>
        <ShoppingBasketDiv>
          <FontAwesomeIcon icon={faShoppingBasket}/>
        </ShoppingBasketDiv>
    </TopWrapper>
  )
}

export default TopContainer