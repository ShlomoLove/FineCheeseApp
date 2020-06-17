import styled from 'styled-components'

const CheckoutTitle = styled.h1`
font-family: 'Cera Pro Bold';
font-size: 40px;
color: ${props => props.color};
margin-bottom: 6px;
text-align: center; 

@media screen and (max-width: 675px) and (min-width: 510px) {
  font-size: 30px; 
} 
@media (max-width: 510px) {
  font-size: 5.4vw; 
}
`

export default CheckoutTitle