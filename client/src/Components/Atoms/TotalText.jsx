import styled from 'styled-components'

const TotalText = styled.div` 
  margin-right: ${props => props.right}; 
  margin-left: ${props => props.left}; 
  font-family: 'Cera Pro Bold';
  font-size: 28px;
  color:${props=> props.color};  

  @media screen and (max-width: 725px) and (min-width: 580px) {
    font-size: 23px; 
  }

  @media (max-width: 580px) {
    font-size: 4vw; 
  }
`

export default TotalText