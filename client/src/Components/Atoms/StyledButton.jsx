import styled from 'styled-components'

const StyledButton = styled.input`
  height: 45px;
  width: 200px;
  background: #EE8C1D;
  color: #211B1B; 
  font-family: 'Cera Pro Black';
  margin: ${props => props.margin};
  font-size: 18.667px;
  border-radius: 10px; 
  letter-spacing: 0.35px;
  border: 0;
  transition: all 0.6s ease;

  :focus {
    outline: none;
  }
  
  &:hover {
    background: #FACA66; 
  } 
`

export default StyledButton