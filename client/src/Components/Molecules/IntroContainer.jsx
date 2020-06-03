import React from 'react'
import styled from 'styled-components'
import frankLogo from '../../Assets/FFC_logo_1.png'

const WelcomeText = styled.p`
  font-family: 'Cera Pro Regular';
  font-size: 24px; 
  color: #211B1B;
  margin: 6px;
  text-align: left;  

  @media screen and (max-width: 675px) and (min-width: 510px) {
    font-size: 20px; 
  } 

  @media (max-width: 510px) {
    font-size: 4vw; 
  }
`

const InstructionsWrapper = styled.div`
  display: flex; 
  width: 70%; 
  flex-direction: column;
  justify-content: center; 
  align-items: left;   
`

const MiddleWrapper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100%; 
`

const FrankCheeseLogoContainer = styled.div`
  display: flex; 
  width: 30%;
  height: auto; 
  object-fit: contain;
  justify-content: center; 
  align-items: center; 
`

const FrankCheeseLogo = styled.img`
  width: 90%;
  height: auto; 
`

const WelcomeTitle = styled.h1`
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

const WelcomeIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  justify-content: center;
  align-items: center;
`

const IntroContainer = () => {
  return (
    <>
      <WelcomeIntroWrapper>
        <WelcomeTitle>Welcome to Frank's Fine Cheeses</WelcomeTitle>
        <MiddleWrapper>
          <InstructionsWrapper>
            <WelcomeText>We are purveyors of the highest quality cheeses available in Los Angeles. We take pride in providing you with the most unique selection of gourmet cheeses catered to your neighborhood.</WelcomeText>
            <WelcomeText>Enter your ZIP CODE to enter your local store.</WelcomeText>
          </InstructionsWrapper>
          <FrankCheeseLogoContainer>
            <FrankCheeseLogo src={frankLogo}/>
          </FrankCheeseLogoContainer>
        </MiddleWrapper>
      </WelcomeIntroWrapper>
    </>
  )
}

export default IntroContainer