import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

import reducers from './reducers';

const AppStore = createStore(
  reducers, // Todos los reducers
  {}, // Estado inicial
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
