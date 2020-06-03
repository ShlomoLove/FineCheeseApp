import React from 'react'
import styled from 'styled-components'
import InstructionText from '../Atoms/InstructionText'
import StyledInput from '../Atoms/StyledInput'
import AlertMessage from '../Atoms/AlertMessage'

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  margin-bottom: 16px; 
`

const TextContainer = styled.div`
  text-align: right; 
`

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
`

const SearchComponent = props => {
  const { handleInput, cheeseInput, alertMessage } = props
  // const searchValue = cheeseInput !== undefined ? cheeseInput : ''
  return (
    <>
    <SearchContainer>
      <TextContainer>
        <InstructionText size='20px' color='#723503' medSize='16px' smSize='3vw'>Find Your Favorite Cheese</InstructionText>
      </TextContainer>
      <InputContainer>
        <StyledInput
          value={cheeseInput} 
          placeholder='country or name' 
          margin={'5px'}
          onKeyDown={(e) => handleInput(e, 'cheeseInput')}
          onChange={handleInput}
          type="text"
        />
      </InputContainer>
        {alertMessage !== '' ? 
          <AlertMessage alertMessage={alertMessage}/> : null
        }
    </SearchContainer>
    </>
  )
}

export default SearchComponent