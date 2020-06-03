const express = require ('express')
const router = require('express').Router()
const { getCheeses, getSpecials, getAllCheeses } = require('./controller.js')

router 
.route('/cheeses')
.get(getAllCheeses)

router
.route('/specials/:zip')
.get(getSpecials)

router
.route('/cheeses/:id')
.get (getCheeses)

module.exports = router