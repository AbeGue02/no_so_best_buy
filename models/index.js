const mongoose = require('mongoose')
const CuisineSchema = require('./cuisine')
const RecipeSchema = require('./recipe')
const DirectionSchema = require('./direction')
const IngredientSchema = require('./ingredient')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const Cuisine  = mongoose.model('Cuisine', CuisineSchema )
const Recipe = mongoose.model('Recipe', RecipeSchema)
const Direction = mongoose.model('Direction', DirectionSchema)
const Ingredient = mongoose.model('Ingredient', IngredientSchema)


module.exports = {
    Cuisine,
    Recipe,
    Direction,
    Ingredient 
}