import React from 'react'
import styled from 'styled-components'
import StyledInput from '../Atoms/StyledInput'
import StyledButton from '../Atoms/StyledButton'
import MainCheeseStoreContainer from '../Atoms/MainCheeseStoreContainer'
import CheeseSpecialSlider from '../Molecules/CheeseSpecialSlider'
import TopContainer from '../Atoms/TopContainer'
import CheeseAisle from '../Molecules/CheeseAisle'
import StoreSubTitle from '../Atoms/StoreSubTitle'
import SearchComponent from '../Molecules/SearchComponent'
import BottomCheckOutContainer from '../Atoms/BottomCheckOutContainer'

const TitleContainer = styled.div`
  padding-top: ${props => props.top}; 
  display: flex; 
  justify-content: flex-start; 
  width: 100%;
  align-items: center; 
  justify-content: space-between;
  background: ${props => props.background};

  @media(max-width: 480px) {
    flex-direction: column;
  } 
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
        zipInput
      } = props 

  return (
    <>
      <MainCheeseStoreContainer background={'#FACA66'}>
        <TopContainer myCart={myCart} gotoCheckout={gotoCheckout}/>
        <TitleContainer top={'70px'} background={'#211B1B'}>
          <StoreSubTitle color={'#EE8C1D'}> LOCAL SPECIALS </StoreSubTitle>
          <StyledInput 
            value={zipInput} 
            placeholder='ZIP CODE' 
            margin={'20px'} 
            onKeyDown={(e) => handleInput(e, 'zipInput')}
            onChange={handleInput}
            type="text"
          />
          <StyledButton
            background={'#EE8C1D'}
            hover={'#FACA66'} 
            color={'211B1B'}
            margin={'20px'} 
            type='button' 
            value='ENTER ZIP' 
            onClick={()=> handleZipButtonClick ()}/>
        </TitleContainer>
        <CheeseSpecialSlider 
          customCheeseInventory={customCheeseInventory}
          handleCartUpdate={handleCartUpdate}
        />
        <TitleContainer top={'0px'}>
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