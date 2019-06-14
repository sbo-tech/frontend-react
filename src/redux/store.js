const { createStore, applyMiddleware } = require('redux')

const thunk = require('redux-thunk');

const { createLogger } = require('redux-logger');

const logger = createLogger({})
const rootReducer = require('./reducers');


function configureStore(initialState) {
  return createStore(rootReducer,
    applyMiddleware(
      thunk.default, logger
    )
  )
}
module.exports = configureStore({})
