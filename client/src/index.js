import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './containers/App';
import reducers from './data/reducers';
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
(function(store) {
  console.log('this it the store')
  console.log(store)
})();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);


