import React from 'react'
import MainCheeseStoreContainer from '../Atoms/MainCheeseStoreContainer'
import TopLogoContainer from '../Atoms/TopLogoContainer'
import StyledLogo from '../Atoms/StyledLogo'
import FrankLogo from '../../Assets/FFC_logo_1.png'
import MainCheckOutContainer from '../Atoms/MainCheckOutContainer'
import CheckoutTitle from '../Atoms/CheckoutTitle'
import ItemInformation from '../Atoms/ItemInformation'
import CartGrid from '../Atoms/CartGrid'
import TotalDiv from '../Atoms/TotalDiv'
import TotalText from '../Atoms/TotalText'
import CategoryHeaders from '../Atoms/CategoryHeaders'

const Confirm = props => {
  const { myCart, cartTotal } = props
  return (
    <>
    <MainCheeseStoreContainer background={'#211B1B'}>
      <TopLogoContainer>
        <StyledLogo src={FrankLogo}/>
      </TopLogoContainer>
      <MainCheckOutContainer>
        <CheckoutTitle color={'#EE8C1D'}>
          Thank You For Your Order
        </CheckoutTitle>
        <CartGrid background={'#211B1B'}  grid={'3fr 3fr 1.5fr 1.5fr 1.5fr 1.5fr'}>
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
            grid={'3fr 3fr 1.5fr 1.5fr 1.5fr 1.5fr'}
          >
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
          </CartGrid>
        )})}
          <TotalDiv>
            <TotalText color={'#EE8C1D'} left={'22px'} right={0}>Order Total</TotalText>
            <TotalText color={'#EE8C1D'} left={0} right={'22px'}>${cartTotal}</TotalText>
          </TotalDiv>
      </MainCheckOutContainer>
    </MainCheeseStoreContainer>
    </>
  )
}

export default Confirm