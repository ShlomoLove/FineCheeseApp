import React from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton'
import FrankLogo from '../../Assets/FFC_logo_2_dark.png'

const BottomContainer = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;  
  justify-content: space-between; 
  background: #211B1B;
  width: 100%;
  height: 110px; 
`

const LogoContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: auto;
  object-fit: contain;
  margin-left: 30px; 
`

const StyledLogo = styled.img`
  width: 140px;
  height: auto; 
`

const BottomCheckOutContainer = props => {
  const { gotoCheckout, myCart } = props
  const cartLength = myCart.length
  const background = cartLength > 0 ? '#EE8C1D' : '#BFBFBF'
  const hover = cartLength > 0 ? '#FACA66' : '#BFBFBF'
  const color = cartLength > 0 ? '#211B1B' : '#EFEFF4'
  return (
    <>
      <BottomContainer>
        <LogoContainer>
          <StyledLogo src={FrankLogo}/>
        </LogoContainer>
        <StyledButton
          background={background}
          hover={hover}
          color={color}
          margin={'30px'}
          type="button"
          value="Checkout"
          onClick={()=> gotoCheckout()}  
        />
      </BottomContainer>
    </>
  )
}

export default BottomCheckOutContainer