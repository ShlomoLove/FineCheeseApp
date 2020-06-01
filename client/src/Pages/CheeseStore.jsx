import React, { Component } from 'react'
import GlobalStyleFont from '../Components/Atoms/GlobalFonts'
import axios from 'axios'
import styled from 'styled-components'


class CheeseStore extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  handleZipInput = input => {
    this.setState({zip: input})
  }

  handleZipButtonClick = () => {
    const { zip } = this.state
    this.getSpecials(zip)
  }

  getSpecials = (zip) => {
    axios
    .get(`/specials/${zip}`)
    .then(({data}) => {
      this.getCheeses(data)
    })
    .catch((error) => console.log (`error connecting to database: ${error}`))
  }

  getCheeses = (specialsArray) => {
    const idArray = specialsArray.map(cheese => {
      return cheese.cheeseID
    })
    axios
    .all(idArray.map(cheeseID => axios.get(`/cheeses/${cheeseID}`)))
    .then(responses => {
      const cheeseArray = responses.map(response => {
        return response.data[0]
      })
      let customCheeseInventory = []
      for (let i = 0; i < cheeseArray.length; i++) {
        if (cheeseArray[i].id === specialsArray[i].cheeseID) {
          customCheeseInventory.push({...cheeseArray[i], ...specialsArray[i]})
        }
      }
      this.setState({customCheeseInventory})
    })
    .catch((error) => console.log(error))
  }

  render () {
    console.log (this.state, 'state')
    return (
      <>
        <GlobalStyleFont />
          <form>
            <input onChange={(e) => this.handleZipInput(e.target.value)}></input>
            <input type='button' value='Send ZIP'onClick={()=> this.handleZipButtonClick()}/>
          </form>
      </>
    )
  }
}

export default CheeseStore