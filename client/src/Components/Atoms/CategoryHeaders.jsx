import styled from 'styled-components'

const CategoryHeaders = styled.div`
  text-align: left;
  margin: 6px;
  font-family: 'Cera Pro Bold';
  font-size: 22px; 
  color: #FACA66;

  @media screen and (max-width: 725px) and (min-width: 580px) {
    font-size: 18px; 
  }

  @media (max-width: 580px) {
    font-size: 3.2vw; 
  }
`

export default CategoryHeaders
