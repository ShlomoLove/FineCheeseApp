import styled from 'styled-components'

const MainCheeseStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  max-width: 768px; 
  min-height: 100vh; 
  width: 100%;
  background: ${props => props.background};
`

export default MainCheeseStoreContainer