import React from 'react'
import styled from 'styled-components'
import MainCheeseStoreContainer from '../Atoms/MainCheeseStoreContainer'
import CheeseSpecialSlider from '../Molecules/CheeseSpecialSlider'
import TopContainer from '../Atoms/TopContainer'
import CheeseAisle from '../Molecules/CheeseAisle'
import StoreSubTitle from '../Atoms/StoreSubTitle'
import SearchComponent from '../Molecules/SearchComponent'
import BottomCheckOutContainer from '../Atoms/BottomCheckOutContainer'

const TitleContainer = styled.div`
  display: flex; 
  justify-content: flex-start; 
  width: 100%;
  align-items: center; 
  justify-content: space-between;
  background: ${props => props.background}; 
`

const InsideTheCheeseStore = props => {

  const { customCheeseInventory, 
        mainDisplayOptions, 
        handleInput, 
        cheeseInput, 
        myCart, 
        handleCartUpdate,
        gotoCheckout,
        alertMessage, 
      } = props 

  return (
    <>
      <MainCheeseStoreContainer background={'#FACA66'}>
        <TopContainer myCart={myCart} gotoCheckout={gotoCheckout}/>
        <TitleContainer background={'#211B1B'}>
          <StoreSubTitle color={'#EE8C1D'}> LOCAL SPECIALS </StoreSubTitle>
        </TitleContainer>
        <CheeseSpecialSlider 
          customCheeseInventory={customCheeseInventory}
          handleCartUpdate={handleCartUpdate}
        />
        <TitleContainer>
          <StoreSubTitle color={'#211B1B'}> Gourmet Cheeses </StoreSubTitle>
          <SearchComponent 
            handleInput={handleInput}
            cheeseInput={cheeseInput}
            alertMessage={alertMessage}
          />
        </TitleContainer>
        <CheeseAisle 
          mainDisplayOptions={mainDisplayOptions}
          handleCartUpdate={handleCartUpdate}
        />
        <BottomCheckOutContainer 
          gotoCheckout={gotoCheckout}
          myCart={myCart}
        />
      </MainCheeseStoreContainer>
    </>
  )
}

export default InsideTheCheeseStore