// Reducer
const { combineReducers } = require('redux');
const { items, itemsHasErrored, itemsIsLoading } = require('./items');
const { tokens } = require('./token')
const rootReducer = combineReducers({
  items,
  tokens,
  itemsHasErrored,
  itemsIsLoading
});

module.exports = rootReducer

