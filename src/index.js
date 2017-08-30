import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import users from './reducers';
import registerServiceWorker from './registerServiceWorker';
import throttle from 'lodash/throttle'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const persistedState = loadState()
const store = createStore(users, persistedState, applyMiddleware(logger));

store.subscribe(throttle(() => {
  saveState({
    users: store.getState().users
  });
}, 1000));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
