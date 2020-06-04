import styled from 'styled-components'

const StyledInput = styled.input`
  font-family: 'Cera Pro Light';
  font-size: 22px;
  outline: none; 
  height: 45px;
  width: 200px;
  background: #EFEFF4;
  border: solid #EFEFF4;  
  border-radius: 10px;
  margin: ${props => props.margin};
  box-shadow: 1px 2px 20px 3px rgba(33, 27, 27, .4);
  transition: all 0.3s ease; 
  
  :focus {
    border-color: #EE8C1D; 
  }

  @media(max-width: 480px) {
    width: 180px;
    height: 40px; 
  }
`

export default StyledInput