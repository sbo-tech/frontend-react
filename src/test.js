// require('./testdom')('<html><body></body></html>');
import test from 'ava';


import store from './redux/store'
import {addToken} from './redux/actions'


test('resolves with unicorn', t => {
  let x = store.getState()
  t.truthy(x)
});

test('returns the setter value we pass it', t => {
  let action = { type: 'ADD_TOKEN', text: 'hello' };
  store.dispatch(addToken('hello'))
  let x = store.getState().tokens
  t.is(x[0].text, 'hello')
})


test('has a new state after mutation', t => {
  let x = store.getState()
  t.truthy(x)
})
