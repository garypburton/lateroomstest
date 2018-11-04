import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Home from './scenes/home/HomeContainer';

library.add(faStar);

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
