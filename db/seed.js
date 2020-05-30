const { Cheeses, Specials } = require ('./index.js')
const mongoose = require ('mongoose')
const pathToCheeses = './Data/cheeses.csv'
const pathToSpecials = './Data/specials.csv'
const csv = require('csvtojson')

const seedCheeses = () => {
  csv()
  .fromFile(pathToCheeses)
  .then((cheesesArray) => {
    const cheeseDBArray = cheesesArray.map((cheese) => {
      return {
        id: parseInt(cheese.id),
        name: cheese.name.toString(),
        country: cheese.country.toString(),
        price: parseFloat(cheese.price)
      }
    })
    Cheeses.insertMany(cheeseDBArray) 
    console.log ('seeding of Cheeses complete!')
  })
  .catch((error) => console.log (`error seeding cheeses ${error}`))
}

const seedSpecials = () => {
  csv()
  .fromFile(pathToSpecials)
  .then((specialsArray) => {
    const specialDBArray = specialsArray.map((special) => {
      return {
        zip: parseInt(special.zip),
        cheeseID: parseInt(special.cheese_id),
        discount: parseInt(special.percent_discount),
        outOfStock: special.out_of_stock.toLowerCase() === 'true' ? true : false
      }
    })
    Specials.insertMany(specialDBArray)
    console.log ('seeding of Specials complete!')
  })
  .catch((error) => console.log (`error seeding Specials ${error}`))
}

seedCheeses()
seedSpecials()