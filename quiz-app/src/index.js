import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './main/App';
import Reducer from './reducers/quizReducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


