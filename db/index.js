const mongoose = require ('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.catch(error => console.error('error connecting to the mongo database:', error));

const db = mongoose.connection

db.on('error', () => console.log ('error connecting to the database'))
db.once('open', () => console.log ('connected to the database'))

const cheeseSchema = mongoose.Schema({
  id: Number,
  name: String,
  country: String,
  price: Number
})

const specialSchema = mongoose.Schema({
  zip: Number, 
  cheeseID: Number,
  discount: Number,
  outOfStock: Boolean
})

const Cheeses = mongoose.model('Cheeses', cheeseSchema)

const Specials = mongoose.model('Specials', specialSchema)

module.exports = { Cheeses, Specials }