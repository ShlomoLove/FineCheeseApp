import React, { Component } from 'react'
import GlobalStyleFont from '../Components/Atoms/GlobalFonts'
import CeraProBlack from '../../src/fonts/CeraProBlack.otf'
import axios from 'axios'
import styled from 'styled-components'

const MainStoreDiv = styled.div`
  font-family: 'Cera Pro Regular';
  font-size: 40px;
  color: red; 
`

class CheeseStore extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  render () {
    return (
      <>
        <GlobalStyleFont />
          <MainStoreDiv>
        HELLO FROM REACT
          </MainStoreDiv>
      </>
    )
  }
}

export default CheeseStore