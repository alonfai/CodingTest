import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import * as serviceWorker from './serviceWorker';

// Use react-bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css';

// https://redux-starter-kit.js.org/tutorials/advanced-tutorial#rendering-the-provider
const render = () => {
  const App = require('./App').default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  (module as any).hot.accept('./App', render);
}

serviceWorker.register();
