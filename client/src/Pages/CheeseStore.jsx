import React, { Component } from 'react'
import GlobalStyleFont from '../Components/Atoms/GlobalFonts'
import axios from 'axios'
import OuterContainer from '../Components/Atoms/OuterContainer'
import WelcomeScreen from '../Components/Organisms/WelcomeScreen'
import InsideTheCheeseStore from '../Components/Organisms/InsideTheCheeseStore'
import CheckOut from '../Components/Organisms/CheckOut'
import Confirm from '../Components/Organisms/Confirm'

class CheeseStore extends Component {
  constructor () {
    super ()
    this.state = {
      page: 1,
      alertMessage: '',
      zipInput: '',
      cheeseInput: '',
      myCart: {},
      cartTotal: 0,
      totalItems: 0
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

  handleCartUpdate = (cheese, quantity) => {
    const { myCart } = this.state
    let newCheese = cheese
    let newQuantity
    if (!quantity) {
      newQuantity = myCart[cheese.id] ? (myCart[cheese.id].quantity + 1) : 1
    } else {
      newQuantity = Number(quantity)
    }
    newCheese.quantity = newQuantity
    newCheese.total = this.getCheeseTotal(newCheese)
    myCart[cheese.id] = newCheese
    let newCartTotal = this.getTotal(myCart, 'total')
    let newTotalItems = this.getTotal(myCart, 'quantity')
    this.setState({myCart, cartTotal: newCartTotal, totalItems: newTotalItems })
  }

  getCheeseTotal = (cheese) => {
    let discount = cheese.discount
    let price = Number(cheese.price)
    let amountOff = discount ? Number((price/100)*discount) : 0
    let newPrice = Number(Math.round(100*(price - amountOff))/100)
    let cheeseTotal = newPrice * cheese.quantity
    cheeseTotal = Math.round(100*cheeseTotal + Number.EPSILON) / 100
    return cheeseTotal
  }

  removeCheese = (id) => {
    const { myCart } = this.state
    delete myCart[id]
    let newCartTotal = this.getTotal(myCart, 'total')
    let newTotalItems = this.getTotal(myCart, 'quantity')
    this.setState({myCart, cartTotal: newCartTotal, totalItems: newTotalItems })
  }
  getTotal = (cartObject, value) => {
    let output = 0
    Object.keys(cartObject).map(cheeseID => {
      output += cartObject[cheeseID][value]
    })
    if(value === 'total') {
      output = Number(Math.round(100*output + Number.EPSILON)/100)
    }
    console.log (output, typeof output, "QUANTITY")
    return output
  }

  nextPage = () => {
    const { page } = this.state
    let newPage = page
    newPage += 1
    this.setState({ page: newPage })
    }

  prevPage = () => {
    const { page } = this.state
    let newPage = page
    newPage -= 1
    this.setState({ page: newPage })
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
      cartTotal,
      zip, 
      totalItems
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
              nextPage={this.nextPage}
              alertMessage={alertMessage}
              zipInput={zipInput}
              zip={zip}
              totalItems={totalItems}
            />
          )}
          {page === 3 && (
            <CheckOut 
              cartTotal={cartTotal}
              myCart={myCart}
              prevPage={this.prevPage}
              nextPage={this.nextPage}
              handleCartUpdate={this.handleCartUpdate}
              removeCheese={this.removeCheese}
            />
          )}
          {page === 4 && (
            <Confirm 
              myCart={myCart}
              cartTotal={cartTotal}
            />
          )}
        </OuterContainer>
      </>
    )
  }
}

export default CheeseStore