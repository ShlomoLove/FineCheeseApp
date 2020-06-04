import React from 'react'
import styled from 'styled-components'
import StyledButton from '../Atoms/StyledButton'
import InstructionText from '../Atoms/InstructionText'

const CheeseContainer = styled.div`
  background: #EFEFF4;
  width: 98%;
  min-height: 160px; 
  margin: 3px; 
  border-radius: 5px;
  border: solid .5px #EE8C1D; 
`

const CheeseName = styled.h4`
  font-family: 'Cera Pro Medium';
  font-size: 32px;
  color: #211B1B;
  margin: 5px;
  
  @media screen and (max-width: 750px) and (min-width: 550px) {
    font-size: 26px; 
  } 
  @media(max-width: 550px) {
    font-size: 4vw; 
  } 
`

const PriceSpan = styled.span`
  font-family: 'Cera Pro Bold';
`

const Cheese = props => {
  const { inStock, name, id, price, discount, country, handleCartUpdate} = props
  
  const findPrice = (price, disc) => {
    const amountOff = (price/100)*disc
    const total = parseFloat(price - amountOff).toFixed(2)
    return total
  }
  const thisCheese = { name, id, price, discount, country }
  const displayCountry = (country ) ? country : 'Origin Not Specified'

  return (
    <>
      {inStock ? (
      <CheeseContainer>
        <CheeseName>{name}</CheeseName>
        <InstructionText size='24px' color='#723503' medSize='20px' smSize='3.5vw'>{displayCountry}</InstructionText>
        {discount === undefined && (
          <InstructionText size='18.75px' color='#EE8C1D' medSize='15px' smSize='3.2vw'><PriceSpan>${price}</PriceSpan></InstructionText>
        )}
        {discount !== undefined && (
          <InstructionText size='18.75px' color='#EE8C1D' medSize='15px' smSize='3.2vw'>SPECIAL: <PriceSpan>${findPrice(price, discount)}</PriceSpan> (Normally: <PriceSpan>${price}</PriceSpan>)</InstructionText>
        )}
        <form>
          <StyledButton
            background={'#EE8C1D'}
            hover={'#FACA66'}
            color={'211B1B'}
            margin={'10px'} 
            type='button' 
            value='Add to Cart' 
            onClick={() => handleCartUpdate(thisCheese)}
          />
        </form>
      </CheeseContainer>
      ) : null}
    </>
  )
}

export default Cheese
