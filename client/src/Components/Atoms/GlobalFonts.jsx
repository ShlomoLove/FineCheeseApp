import { createGlobalStyle } from 'styled-components'
import CeraProBlack from '../../fonts/CeraProBlack.otf'
import CeraProBold from '../../fonts/CeraProBold.otf'
import CeraProLight from '../../fonts/CeraProLight.otf'
import CeraProMedium from '../../fonts/CeraProMedium.otf'
import CeraProRegular from '../../fonts/CeraProRegular.otf'
import CeraProThin from '../../fonts/CeraProThin.otf'

const GlobalStyleFont = createGlobalStyle`
  @font-face {
    font-family: 'Cera Pro Black';
    src: url(${CeraProBlack}) format('opentype');
  }
  @font-face {
    font-family: 'Cera Pro Bold';
    src: url(${CeraProBold}) format('opentype');
  }
  @font-face {
    font-family: 'Cera Pro Light';
    src: url(${CeraProLight}) format('opentype');
  }
  @font-face {
    font-family: 'Cera Pro Medium';
    src: url(${CeraProMedium}) format('opentype');
  }
  @font-face {
    font-family: 'Cera Pro Regular';
    src: url(${CeraProRegular}) format('opentype');
  }
  @font-face {
    font-family: 'Cera Pro Thin';
    src: url(${CeraProThin}) format('opentype');
  }
`


export default GlobalStyleFont

