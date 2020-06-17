import React from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton'
import FrankLogo from '../../Assets/FFC_logo_2_dark.png'
import BottomContainer from './BottomContainer'

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
  const { nextPage, totalItems } = props
  const background = totalItems > 0 ? '#EE8C1D' : '#BFBFBF'
  const hover = totalItems > 0 ? '#FACA66' : '#BFBFBF'
  const color = totalItems > 0 ? '#211B1B' : '#EFEFF4'
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
          height={'45px'}
          smHeight={'38px'}
          width={'200px'}
          smWidth={'130px'}
          onClick={()=> nextPage()}  
        />
      </BottomContainer>
    </>
  )
}

export default BottomCheckOutContainer