import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const AppStore = createStore(
  reducers, // Todos los reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
