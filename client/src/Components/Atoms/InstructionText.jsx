import styled from 'styled-components'

const InstructionText = styled.p`
  font-family: 'Cera Pro Regular';
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin: 5px;
  @media screen and (max-width: 750px) and (min-width: 550px) {
    font-size: ${props => props.medSize}; 
  } 
  @media(max-width: 550px) {
    font-size: ${props => props.smSize}; 
  } 
`

export default InstructionText