import styled from 'styled-components'

const ItemInformation = styled.div`
  text-align: left;
  margin: 6px;
  font-family: 'Cera Pro Regular';
  font-size: 18px; 
  color: #723503;

  @media screen and (max-width: 675px) and (min-width: 510px) {
    font-size: 14px; 
  }

  @media (max-width: 510px) {
    font-size: 3.3vw; 
  }
`

export default ItemInformation