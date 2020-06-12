import React from 'react'
import styled from 'styled-components'
import IntroContainer from '../Molecules/IntroContainer'
import StyledInput from '../Atoms/StyledInput'
import StyledButton from '../Atoms/StyledButton'
import MainCheeseStoreContainer from '../Atoms/MainCheeseStoreContainer'
import AlertMessage from '../Atoms/AlertMessage'

const StyledForm = styled.form`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`

const WelcomeScreen = (props) => {
  const { handleInput, handleZipButtonClick, alertMessage, zipInput } = props
  return (
    <>
      <MainCheeseStoreContainer background={'#BFBFBF'}>
        <IntroContainer/>
        {alertMessage !== '' ? 
          <AlertMessage alertMessage={alertMessage}/> : null
        }
        <StyledForm>
          <StyledInput 
            value={zipInput} 
            placeholder='ZIP CODE' 
            margin={'20px'} 
            onKeyDown={(e) => handleInput(e, 'zipInput')}
            onChange={handleInput}
            type="text"
            height={'45px'}
            width={'200px'}
            smWidth={'180px'}
            smHeight={'40px'}

          />
          <StyledButton
            background={'#EE8C1D'}
            hover={'#FACA66'} 
            color={'211B1B'}
            margin={'20px'} 
            type='button' 
            value='ENTER ZIP'
            height={'45px'}
            smHeight={'38px'}
            width={'200px'}
            smWidth={'130px'}
            onClick={()=> handleZipButtonClick ()}/>
        </StyledForm>
      </MainCheeseStoreContainer>
    </>
  )
}

export default WelcomeScreen