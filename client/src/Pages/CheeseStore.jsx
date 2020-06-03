import React, { Component } from 'react'
import GlobalStyleFont from '../Components/Atoms/GlobalFonts'
import axios from 'axios'
import styled from 'styled-components'
import OuterContainer from '../Components/Atoms/OuterContainer'
import WelcomeScreen from '../Components/Organisms/WelcomeScreen'
import InsideTheCheeseStore from '../Components/Organisms/InsideTheCheeseStore'

class CheeseStore extends Component {
  constructor () {
    super ()
    this.state = {
      page: 1,
      alertMessage: '',
      zipInput: '',
      cheeseInput: '',
      myCart: []
    }
  }

  componentDidMount() {
    this.getAllCheeses()
  }

  getAllCheeses = () => {
    let countriesList = []
    let cheeseList = []
    let countryObject = {}
    let cheeseObject = {}
    axios
    .get('/cheeses/')
    .then(({data}) => {
      for (let cheese of data) {
        if (cheese.country && !countryObject[cheese.country]) {
          countryObject[cheese.country] = true
          countriesList.push(cheese.country)
        }
        if (cheeseObject[cheese.name] !== cheese.name) {
          cheeseObject[cheese.name] = true
          cheeseList.push(cheese.name)
        }
      }
      this.setState({
        entireCheeseInventory: data,
        cheeseList,
        countriesList
      })
    })
    .catch(error => console.log (`error getting Cheeses from Server: ${error}`))
  }

  handleInput = (event, key) => {
    event.preventDefault()
    const inputString = this.state[key]
    const newKey = event.key
    let newKeyValue = inputString
    if (newKey.length === 1) {
      newKeyValue = `${inputString}${newKey}`
    } 
    if (newKey === 'Backspace') {
      newKeyValue = inputString.slice(0, -1)
    }
    if (newKey === 'Enter') {
      if (key === 'zipInput') {
        this.handleZipButtonClick()
      }
      if (key === 'cheeseInput') {
        this.handleCheeseSearch()
        return
      }
    }
    this.setState({[key]: newKeyValue})
  }

  cart = () => {
    console.log ( 'cheese pressed')
  }

  handleZipButtonClick = () => {
    const { zipInput } = this.state
    if (parseFloat(zipInput) > 90000 && parseFloat(zipInput) < 100000) {
      this.getSpecials(zipInput) 
    } else {
      this.setState({alertMessage: 'notValid'})
    }
  }

  handleCheeseSearch = () => {
    const { cheeseInput, entireCheeseInventory } = this.state
    const filterCheeses = (cheese) => {
      return (cheese.name.toLowerCase().includes(cheeseInput.toLowerCase()) || cheese.country.toLowerCase().includes(cheeseInput.toLowerCase()))
    }
    const cheeseSearchResults = entireCheeseInventory.filter(cheese => filterCheeses(cheese))
    if (cheeseSearchResults.length > 90) cheeseSearchResults.splice(90)
    this.setState({ cheeseInput: '', mainDisplayOptions: cheeseSearchResults })
  }

  getSpecials = (zip) => {
    axios
    .get(`/specials/${zip}`)
    .then(({data}) => {
      if (data.length === 0) {
        this.setState({alertMessage: 'errorResponse'})
      } else {
        this.getCheeses(data)
      }
    })
    .catch((error) => console.log (`error getting data from DB: ${error}`))
  }

  getCheeses = (specialsArray) => {
    const { page, zipInput, entireCheeseInventory } = this.state
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
      let cheeseSpecials = {}
      for (let i = 0; i < cheeseArray.length; i++) {
        let specialsObject = {...cheeseArray[i], ...specialsArray[i]}
          cheeseSpecials[specialsObject.cheeseID] = specialsObject
          specialsArray[i].outOfStock ? null : customCheeseInventory.push(specialsObject)
      }
      const updatedCheeseInventory = []
      for (let cheese of entireCheeseInventory) {
        if (cheeseSpecials[cheese.id]){
          cheeseSpecials[cheese.id].outOfStock ? null : updatedCheeseInventory.push(cheeseSpecials[cheese.id])
        } else {
          updatedCheeseInventory.push(cheese)
        }
      }
      let newPageNum = page
      const newMainDisplay = updatedCheeseInventory.slice(0, 20)
      if (customCheeseInventory.length > 0 && page === 1) {
        newPageNum += 1;
      }
      this.setState({
        customCheeseInventory,
        page: newPageNum,
        zip: zipInput,
        zipInput: '',
        alertMessage: '',
        entireCheeseInventory: updatedCheeseInventory,
        mainDisplayOptions: newMainDisplay, 
      })
    })
    .catch((error) => console.log(error))
  }

  render () {
    const { page,
      customCheeseInventory, 
      alertMessage, 
      zipInput, 
      mainDisplayOptions,
      cheeseInput,
      myCart
    } = this.state
    console.log (this.state, 'state')
    return (
      <>
        <GlobalStyleFont />
        <OuterContainer>
          {page === 1 && (
            <WelcomeScreen 
              handleZipButtonClick={this.handleZipButtonClick} 
              handleInput={this.handleInput} 
              alertMessage={alertMessage}
              zipInput={zipInput}
            />
          )}
          {(page === 2 && customCheeseInventory) && (
            <InsideTheCheeseStore 
              customCheeseInventory={customCheeseInventory}
              mainDisplayOptions={mainDisplayOptions}
              handleInput={this.handleInput}
              cheeseInput={ cheeseInput }
              myCart={myCart}
              cart={this.cart}
            />
          )}
        </OuterContainer>
      </>
    )
  }
}

export default CheeseStore