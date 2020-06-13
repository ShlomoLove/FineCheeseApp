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

  @media screen and (max-width: 675px) and (min-width: 510px) {
    font-size: 30px; 
  } 
  @media (max-width: 510px) {
    font-size: 5.4vw; 
  }
`

const CartGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(6, 1fr);
  width: 96%;
`

const CategoryHeaders = styled.div`
  text-align: center;
  margin: 6px;
  font-family: 'Cera Pro Bold';
  font-size: 26px; 
  color: #211B1B;

  @media screen and (max-width: 725px) and (min-width: 580px) {
    font-size: 20px; 
  }

  @media (max-width: 580px) {
    font-size: 3.6vw; 
  }
`

const ItemInformation = styled.div`
  text-align: center;
  margin: 6px;
  font-family: 'Cera Pro Regular';
  font-size: 22px; 
  color: #723503;

  @media screen and (max-width: 675px) and (min-width: 510px) {
    font-size: 15px; 
  }

  @media (max-width: 510px) {
    font-size: 3.3vw; 
  }
`

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-contents: center;
  width: 100%;
  flex-direction: row;
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

const CheckOut = props => {
  const { cartTotal, myCart, prevPage, nextPage } = props
  console.log (myCart, "myCart")
  return (
    <>
      <MainCheeseStoreContainer background={'#E8D7A5'}>
        <TopLogoContainer>
          <StyledLogo src={FrankLogo}/>
        </TopLogoContainer>
        <CheckoutTitle>Review Your Cart</CheckoutTitle>
        <CartGrid>
          <CategoryHeaders>Name</CategoryHeaders>
          <CategoryHeaders>Country</CategoryHeaders>
          <CategoryHeaders>Quantity</CategoryHeaders>
          <CategoryHeaders>Discount</CategoryHeaders>
          <CategoryHeaders>Price</CategoryHeaders>
          <CategoryHeaders>Total</CategoryHeaders>
          {Object.keys(myCart).map(cheeseId => {
            let item = myCart[cheeseId]
            return(
            <>
              <ItemInformation>{item.name}</ItemInformation>
              <ItemInformation>{item.country}</ItemInformation>
              <ItemInformation>{item.quantity}</ItemInformation>
              {item.discount !== undefined && (
                <ItemInformation>{item.discount}%</ItemInformation>
              )}
              {item.discount === undefined && (
                <ItemInformation></ItemInformation>
              )}
              <ItemInformation>${item.price}</ItemInformation>
              <ItemInformation>${item.total}</ItemInformation>
            </>
          )})}
        </CartGrid>
        <TotalDiv>
          <TotalText left={'5.5vw'} right={0}>Cart Total</TotalText>
          <TotalText left={0} right={'5.5vw'}>{cartTotal}</TotalText>
        </TotalDiv>
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