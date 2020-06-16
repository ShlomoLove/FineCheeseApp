import React from 'react'
import styled from 'styled-components'
import MainCheeseStoreContainer from '../Atoms/MainCheeseStoreContainer'
import FrankLogo from '../../Assets/FFC_logo_2_light.png'
import BottomContainer from '../Atoms/BottomContainer'
import StyledButton from '../Atoms/StyledButton'

const TopLogoContainer = styled.div`
  width: 100%;
  heigth: 100px;
  display: flex; 
  flex-direction: row;
  justify-content: flex-end; 
  align-items: center;
  position: fixed; 
  top: 0px 
  z-index: 5;
  background: #BFBFBF;
  max-width: 768px;
`

const MainCheckOutContainer = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 75px;
  flex-direction: column; 
  width: 100%;  
`

const StyledLogo = styled.img`
  height: 80px;
  width: auto;
  margin-right: 10px; 
`

const CheckoutTitle = styled.h1`
  font-family: 'Cera Pro Bold';
  font-size: 40px;
  color: #211B1B;
  margin-bottom: 6px;
  text-align: center; 

  @media screen and (max-width: 675px) and (min-width: 510px) {
    font-size: 30px; 
  } 
  @media (max-width: 510px) {
    font-size: 5.4vw; 
  }
`

const CartGrid = styled.div`
  display: grid; 
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 1fr;
  width: 100%;
  background: ${props => props.background};
  border-bottom: ${props => props.border};

  &:hover {
    background: ${props => props.hover}; 
  }
`

const CategoryHeaders = styled.div`
  text-align: left;
  margin: 6px;
  font-family: 'Cera Pro Bold';
  font-size: 22px; 
  color: #FACA66;

  @media screen and (max-width: 725px) and (min-width: 580px) {
    font-size: 18px; 
  }

  @media (max-width: 580px) {
    font-size: 3.2vw; 
  }
`

const ItemInformation = styled.div`
  text-align: left;
  margin: 6px;
  font-family: 'Cera Pro Regular';
  font-size: 18px; 
  color: #723503;

  @media screen and (max-width: 675px) and (min-width: 510px) {
    font-size: 14px; 
  }

  @media (max-width: 510px) {
    font-size: 3.3vw; 
  }
`

const TotalDiv = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;
  align-contents: left;
  width: 100%;
  margin-top: 20px;
`

const TotalText = styled.div` 
  margin-right: ${props => props.right}; 
  margin-left: ${props => props.left}; 
  font-family: 'Cera Pro Bold';
  font-size: 28px;
  color: #211B1B;  

  @media screen and (max-width: 725px) and (min-width: 580px) {
    font-size: 23px; 
  }

  @media (max-width: 580px) {
    font-size: 4vw; 
  }
`

const StyledSelect = styled.select`
  background: #FACA66;
  width: 90%;
  font-family: 'Cera Pro Regular';
  font-size: 20px; 
  line-height: 1.5; 
  text-align: center;
  color: #723503;

  @media screen and (max-width: 675px) and (min-width: 510px) {
    font-size: 14px; 
  }

  @media (max-width: 510px) {
    font-size: 3.3vw; 
  }
`

const StyledOption = styled.option`
  text-align: center; 
  color: #723503;
  background: #FACA66;
  font-family: 'Cera Pro Regular'; 
  font-size: 20px; 

  @media screen and (max-width: 675px) and (min-width: 510px) {
    font-size: 14px; 
  }

  @media (max-width: 510px) {
    font-size: 3.3vw; 
  }
`


const CheckOut = props => {
  const { cartTotal, myCart, prevPage, nextPage } = props
  const quantityArray = [...new Array(10)].map((val, index) => index + 1)
  return (
    <>
      <MainCheeseStoreContainer background={'#E8D7A5'}>
        <TopLogoContainer>
          <StyledLogo src={FrankLogo}/>
        </TopLogoContainer>
        <MainCheckOutContainer>

          <CheckoutTitle>Review Your Cart</CheckoutTitle>
          <CartGrid background={'#211B1B'}>
            <CategoryHeaders>Name</CategoryHeaders>
            <CategoryHeaders>Country</CategoryHeaders>
            <CategoryHeaders>Quantity</CategoryHeaders>
            <CategoryHeaders>Discount</CategoryHeaders>
            <CategoryHeaders>Price</CategoryHeaders>
            <CategoryHeaders>Total</CategoryHeaders>

            </CartGrid>
            {Object.keys(myCart).map(cheeseId => {
              let item = myCart[cheeseId]
              return(
              <CartGrid background={'#E8D7A5'} border={'1px solid #EFEFF4'} hover={'rgba(250, 202, 102, .2)'}>
                <ItemInformation>{item.name}</ItemInformation>
                <ItemInformation>{item.country}</ItemInformation>
                <StyledSelect  value={item.quantity}>
                  {quantityArray.map(val =>(
                    <StyledOption value={val}>{val}</StyledOption>
                  ))}
                </StyledSelect>
                {item.discount !== undefined && (
                  <ItemInformation>{item.discount}%</ItemInformation>
                )}
                {item.discount === undefined && (
                  <ItemInformation></ItemInformation>
                )}
                <ItemInformation>${item.price}</ItemInformation>
                <ItemInformation>${item.total}</ItemInformation>
              </CartGrid>
            )})}
          <TotalDiv>
            <TotalText left={'20px'} right={0}>Cart Total</TotalText>
            <TotalText left={0} right={'20px'}>${cartTotal}</TotalText>
          </TotalDiv>
        </MainCheckOutContainer>
        <BottomContainer>
        <StyledButton
          background={'#EE8C1D'}
          hover={'#FACA66'}
          color={'#211B1B'}
          margin={'30px'}
          type="button"
          value="Back to Store"
          height={'45px'}
          smHeight={'38px'}
          width={'200px'}
          smWidth={'130px'}
          onClick={()=> prevPage()}  
        />
        <StyledButton
          background={'#EE8C1D'}
          hover={'#FACA66'}
          color={'#211B1B'}
          margin={'30px'}
          type="button"
          value="Confirm Order"
          height={'45px'}
          smHeight={'38px'}
          width={'200px'}
          smWidth={'130px'}
          onClick={()=> nextPage()}  
        />
        </BottomContainer>
      </MainCheeseStoreContainer>
    </>
  )
}

export default CheckOut