import styled from 'styled-components'

const CartGrid = styled.div`
  display: grid; 
  grid-template-columns: ${props => props.grid};
  width: 100%;
  background: ${props => props.background};
  border-bottom: ${props => props.border};

  &:hover {
    background: ${props => props.hover}; 
  }
`

export default CartGrid