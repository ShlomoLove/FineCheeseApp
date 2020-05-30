const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/FranksFineCheeses', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

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