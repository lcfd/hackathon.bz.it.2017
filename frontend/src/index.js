import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
import './css/global.css';
// import createHistory from 'history/createBrowserHistory';

import Routes from './routes';

// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
    <Routes />
    {/* <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/:user" component={App} />
        <Route component={App} />
      </Switch>
    </Router> */}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
