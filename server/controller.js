const { Cheeses, Specials } = require ('../db/index.js')

const getCheeses = (req, res) => {
  Cheeses.find()
  .then(cheeses => {
    res.json(cheeses)
  }) 
  .catch(error => {
    res.status(400).send(`error sending cheeses response: ${error}`)
  })
}

const getSpecials = (req, res) => {
  console.log (req.params)
  Specials.find({zip: req.params.zip})
  .then(specials => {
    res.json(specials)
  })
  .catch(error => {
    res.status(400).send(`error sending specials response: ${error}`)
  })
}

module.exports = { getCheeses, getSpecials }