// actions/index.js
// import axios from 'axios';
// const axios = require('axios')
const BASE_URL = 'http://dev.platform:8000'


function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    let url = `${BASE_URL}/posts/?format=json`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

function addToken(text) {
  return {
    type: 'ADD_TOKEN',
    text
  }
}

module.exports = {itemsIsLoading, itemsHasErrored, itemsFetchData, addToken}
