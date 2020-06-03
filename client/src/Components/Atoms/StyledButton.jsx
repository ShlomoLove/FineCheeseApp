import styled from 'styled-components'

const StyledButton = styled.input`
  height: 45px;
  width: 200px;
  background: ${props => props.background};
  color: ${props => props.color};
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
    background: ${props => props.hover};
    cursor: pointer; 
  } 
`

export default StyledButton