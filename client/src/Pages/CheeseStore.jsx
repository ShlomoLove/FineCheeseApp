import React, { Component } from 'react'
import GlobalStyleFont from '../Components/Atoms/GlobalFonts'
import axios from 'axios'
import OuterContainer from '../Components/Atoms/OuterContainer'
import WelcomeScreen from '../Components/Organisms/WelcomeScreen'
import InsideTheCheeseStore from '../Components/Organisms/InsideTheCheeseStore'
import CheckOut from '../Components/Organisms/CheckOut'

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
    .get('http://34.219.13.24:9000/cheeses/')
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
    const { alertMessage } = this.state
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
      if (key === 'zipInput') return this.handleZipButtonClick()
      if (key === 'cheeseInput') {
        this.setState({ [key]: '' })
        this.handleCheeseSearch(newKeyValue)
        return
      }
    }
    const stateObj = (alertMessage === 'notValid' || alertMessage === 'errorResponse') ? {alertMessage: '', [key]: newKeyValue} : {[key]: newKeyValue}
    if (key === 'cheeseInput') this.handleCheeseSearch(newKeyValue)
    this.setState(stateObj)
  }

  handleCartUpdate = (cheese) => {
    const { myCart } = this.state
    myCart.push(cheese)
    this.setState({myCart})
  }

  gotoCheckout = () => {
    const { page, myCart } = this.state
    let newPage = page
    newPage += 1
    if (myCart.length > 0 ) {
      let cartObject = {}
      for (let cheese of myCart) {
        if (!cartObject[cheese.id]) {
          cheese.quantity = 1
          cartObject[cheese.id] = cheese
        } else {
          cartObject[cheese.id].quantity += 1;
        }
      }
      let checkoutCart = []
      let cartTotal = 0
      for (let key in cartObject) {
        let discount = cartObject[key].discount
        let price =  cartObject[key].price
        let quantity = cartObject[key].quantity
        let amountOff = discount ? (price/100)*discount : 0
        let newPrice = Number(price - amountOff)
        let total = Number(newPrice * quantity)
        cartTotal += total
        cartObject[key].total = total.toFixed(2)
        
        checkoutCart.push(cartObject[key])
      }
      cartTotal = cartTotal.toFixed(2)
      this.setState({ page: newPage, checkoutCart, cartTotal })
    }
  }

  handleZipButtonClick = () => {
    const { zipInput } = this.state
    if (parseFloat(zipInput) > 90000 && parseFloat(zipInput) < 100000) {
      this.getSpecials(zipInput) 
    } else {
      this.setState({alertMessage: 'notValid'})
    }
  }

  handleCheeseSearch = (input) => {
    const { entireCheeseInventory } = this.state
    const filterCheeses = (cheese) => {
      return (cheese.name.toLowerCase().includes(input.toLowerCase()) || cheese.country.toLowerCase().includes(input.toLowerCase()))
    }
    const cheeseSearchResults = entireCheeseInventory.filter(cheese => filterCheeses(cheese))
    if (cheeseSearchResults.length > 90) cheeseSearchResults.splice(90)
    const newStateObj = cheeseSearchResults.length >= 1 ? 
    {mainDisplayOptions: cheeseSearchResults, alertMessage: '' } 
    :
    { mainDisplayOptions: cheeseSearchResults, alertMessage: 'noCheeses'}
    this.setState(newStateObj)
  }

  getSpecials = (zip) => {
    axios
    .get(`http://34.219.13.24:9000/specials/${zip}`)
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
    .all(idArray.map(cheeseID => axios.get(`http://34.219.13.24:9000/cheeses/${cheeseID}`)))
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
      myCart,
      checkoutCart,
      cartTotal,
      zip
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
              handleZipButtonClick={this.handleZipButtonClick}  
              customCheeseInventory={customCheeseInventory}
              mainDisplayOptions={mainDisplayOptions}
              handleInput={this.handleInput}
              cheeseInput={ cheeseInput }
              myCart={myCart}
              handleCartUpdate={this.handleCartUpdate}
              gotoCheckout={this.gotoCheckout}
              alertMessage={alertMessage}
              zipInput={zipInput}
              zip={zip}
            />
          )}
          {page === 3 && (
            <CheckOut 
              checkoutCart={checkoutCart}
              cartTotal={cartTotal}
            />
          )}
        </OuterContainer>
      </>
    )
  }
}

export default CheeseStore