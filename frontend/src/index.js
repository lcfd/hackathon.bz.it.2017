import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './css/global.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers/index';

function logger({ getState }) {
  return next => action => {
    console.info('dispatching', action);
    const result = next(action);
    console.log('state after', getState());
    return result;
  };
}

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
