function token(state, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {
        id: action.id,
        text: action.text,
        validated: true
      }
    default:
      return state
  }
}
function tokens(state = [], action){
  if (action.error) {
    return {
      result: state.result,
      error: action.error,
    };
  }
  switch (action.type) {
    case 'ADD_TOKEN':
      return [
        ...state,
        token(undefined, action)
      ]
    case 'TOGGLE_TOKEN':
      return state.map(t =>
        token(t, action)
      )
    default:
      return state
  }
}

module.exports = {token, tokens}

