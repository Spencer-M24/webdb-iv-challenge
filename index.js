
// moduels 
const express = require('express');

const helmet = require('helmet');

const morgan = require('morgan');

const knexConfig = require('./knexfile');

const db = require('./database/dataModelRecipe');


const server = express();

server.use(express.json());

server.use(helmet());

server.use(morgan('dev'));

// First

server.get('/', (req, res) => {

    res.send('Testing!');
})

// Second

server.get('/dishes', (req, res) => {

    db.getDishes()

    .then(dishes => res.status(200).json(dishes))

    .catch(err => res.status(500).json({ message: 'Error Occured on dishes' }))
})

server.get('/dishes/:id', (req, res) => {
  
    db.getDish(req.params.id)
  
    .then(dish => res.status(200).json(dish))
  
    .catch(err => res.status(500).json({ message: err }))
})

// Start Of Recipe

server.get('/recipes', (req, res) => {
  
    db.getRecipes()
  
    .then(recipes => res.status(200).json(recipes))
  
    .catch(err => res.status(500).json({ message: 'Error known recipe' }))
})

server.get('/recipes/:id', (req, res) => {
  
    db.getRecipe(req.params.id)
  
  .then(recipe => res.status(200).json(recipe))
  
  .catch(err => res.status(500).json({ message: 'Error cant get the recipe' }))
})

// Ingredient Part

server.get('/ingredients', (req, res) => {


    db.getIngredients()

    
    .then(ingredients => res.status(200).json(ingredients))

    .catch(err => res.status(500).json({ message: 'Problem on Ingreidents' }))
})


const port = 3300

server.listen(port, function() {
