import React from 'react';
import CakeContiner from './components/cakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import {Provider} from 'react-redux';
import store from './redux/store';

function App () {
  return (
    <div>
      <Provider store={store}>
        <CakeContiner />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
