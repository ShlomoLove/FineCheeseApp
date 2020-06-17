import React from 'react'
import styled from 'styled-components'
import MainCheeseStoreContainer from '../Atoms/MainCheeseStoreContainer'
import FrankLogo from '../../Assets/FFC_logo_2_light.png'
import BottomContainer from '../Atoms/BottomContainer'
import StyledButton from '../Atoms/StyledButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import TopLogoContainer from '../Atoms/TopLogoContainer'
import CheckoutTitle from '../Atoms/CheckoutTitle'
import CartGrid from '../Atoms/CartGrid'
import CategoryHeaders from '../Atoms/CategoryHeaders'
import StyledLogo from '../Atoms/StyledLogo'
import MainCheckOutContainer from '../Atoms/MainCheckOutContainer'
import ItemInformation from '../Atoms/ItemInformation'
import TotalDiv from '../Atoms/TotalDiv'
import TotalText from '../Atoms/TotalText'

const StyledSelect = styled.select`
  background: rgba(250, 202, 102, .2);
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

  :focus {
    border-color: #EE8C1D; 
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

const DeleteContainer = styled.div `
  display: flex;
  width: 100%;
  justify-content: center; 
  align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
font-size: 18px; 
color: #211B1B;

@media screen and (max-width: 675px) and (min-width: 510px) {
  font-size: 14px; 
}

@media (max-width: 510px) {
  font-size: 3.3vw; 
}

&:hover{
  color: #723503;
  cursor: pointer; 
}
`

const CheckOut = props => {
  const { cartTotal, myCart, prevPage, nextPage, handleCartUpdate, removeCheese } = props
  const quantityArray = [...new Array(10)].map((val, index) => index + 1)
  return (
    <>
      <MainCheeseStoreContainer background={'#E8D7A5'}>
        <TopLogoContainer>
          <StyledLogo src={FrankLogo}/>
        </TopLogoContainer>
        <MainCheckOutContainer>
          <CheckoutTitle color={'#211B1B'}>Review Your Cart</CheckoutTitle>
          <CartGrid background={'#211B1B'}  grid={'3fr 2.5fr 1.5fr 1.5fr 1.5fr 1.5fr .5fr'}>
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
              <CartGrid 
                background={'#E8D7A5'} 
                border={'1px solid #EFEFF4'} 
                hover={'rgba(250, 202, 102, .2)'}
                grid={'3fr 2.5fr 1.5fr 1.5fr 1.5fr 1.5fr .5fr'}
              >
                <ItemInformation>{item.name}</ItemInformation>
                <ItemInformation>{item.country}</ItemInformation>
                <StyledSelect  
                  value={item.quantity}
                  onChange={(e)=> handleCartUpdate(item, e.target.value)}
                >
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
                <DeleteContainer>
                  <StyledIcon icon={faBan} onClick={()=>removeCheese(item.id)}/>
                </DeleteContainer>
              </CartGrid>
            )})}
          <TotalDiv>
            <TotalText color={'#211B1B'} left={'20px'} right={0}>Cart Total</TotalText>
            <TotalText color={'#211B1B'} left={0} right={'20px'}>${cartTotal}</TotalText>
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