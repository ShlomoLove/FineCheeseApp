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
import AlertMessage from '../Atoms/AlertMessage'

const TitleContainer = styled.div`
  padding-top: ${props => props.top}; 
  display: flex; 
  width: 100%;
  align-items: flex-end; 
  justify-content: space-between;
  background: ${props => props.background};

  @media(max-width: 480px) {
    flex-direction: column;
  } 
`

const ZipInputContainer = styled.div`
  display: flex; 
  flex-direction: ${props => props.direction}; 
  justify-content: center; 
  align-items: center; 
  background: #211B1B;
  width: 100%; 
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
        zipInput, 
        handleZipButtonClick,
        zip,
        totalItems
      } = props 

  return (
    <>
      <MainCheeseStoreContainer background={'#FACA66'}>
        <TopContainer myCart={myCart} gotoCheckout={gotoCheckout} totalItems={totalItems}/>
        <TitleContainer top={'70px'} background={'#211B1B'}>
          <StoreSubTitle color={'#EE8C1D'}> LOCAL SPECIALS in {zip} </StoreSubTitle>
        </TitleContainer>
        <CheeseSpecialSlider 
          customCheeseInventory={customCheeseInventory}
          handleCartUpdate={handleCartUpdate}
        />
        <ZipInputContainer direction={'column'}>
          <ZipInputContainer direction={'row'}>
            <StyledInput 
              value={zipInput} 
              placeholder='Change ZIP' 
              margin={'20px'} 
              height={'40px'}
              width={'170px'}
              smHeight={'33px'}
              smWidth={'130px'}
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
              height={'42px'}
              width={'170px'}
              smHeight={'33px'}
              smWidth={'110px'}
              value='UPDATE ZIP' 
              onClick={()=> handleZipButtonClick ()}
            />
          </ZipInputContainer>
          {alertMessage !== '' ? 
            <AlertMessage alertMessage={alertMessage}/> 
            :
            <AlertMessage></AlertMessage>
          }
          </ZipInputContainer>
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
          totalItems={totalItems}

        />
      </MainCheeseStoreContainer>
    </>
  )
}

export default InsideTheCheeseStore