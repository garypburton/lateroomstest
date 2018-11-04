import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import store from './store';

library.add(faStar);

function App() {
  return (
    <Provider store={store}>
      <div />
    </Provider>
  );
}

export default App;
