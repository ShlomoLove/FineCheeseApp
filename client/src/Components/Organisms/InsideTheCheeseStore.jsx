import React from 'react'
import styled from 'styled-components'
import MainCheeseStoreContainer from '../Atoms/MainCheeseStoreContainer'
import CheeseSpecialSlider from '../Molecules/CheeseSpecialSlider'
import TopContainer from '../Atoms/TopContainer'
import CheeseAisle from '../Molecules/CheeseAisle'
import StoreSubTitle from '../Atoms/StoreSubTitle'
import SearchComponent from '../Molecules/SearchComponent'

const TitleContainer = styled.div`
  display: flex; 
  justify-content: flex-start; 
  width: 100%;
  justify-content: space-between; 
`

const InsideTheCheeseStore = props => {
  const { customCheeseInventory, mainDisplayOptions, handleInput, cheeseInput, myCart, cart } = props 
  return (
    <>
      <MainCheeseStoreContainer>
        <TopContainer/>
        <TitleContainer>
          <StoreSubTitle> LOCAL SPECIALS </StoreSubTitle>
        </TitleContainer>
        <CheeseSpecialSlider customCheeseInventory={customCheeseInventory} />
        <TitleContainer>
          <StoreSubTitle> Gourmet Cheeses </StoreSubTitle>
          <SearchComponent 
            handleInput={handleInput}
            cheeseInput={cheeseInput}
          />
        </TitleContainer>
        <CheeseAisle 
          mainDisplayOptions={mainDisplayOptions}
          cart={cart}
        />
      </MainCheeseStoreContainer>
    </>
  )
}

export default InsideTheCheeseStore