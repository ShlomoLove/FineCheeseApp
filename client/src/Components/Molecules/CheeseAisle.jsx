import React from 'react'
import styled from 'styled-components'
import Cheese from './Cheese'

const CheeseAisleContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
`

const CheeseAisle = props => {
  const { mainDisplayOptions, cart } = props
  return(
    <>
      <CheeseAisleContainer>
        {mainDisplayOptions && (
          mainDisplayOptions.map((cheese => {
            return (
              <Cheese 
                name={cheese.name} 
                key={cheese.cheeseID} 
                id={cheese.id} 
                inStock={!cheese.outOfStock}
                price={cheese.price}
                discount={cheese.discount}
                country={cheese.country}
                cart={cart}
              />
            )
          }
          )))
        }
      </CheeseAisleContainer>
    </>
  )
}

export default CheeseAisle