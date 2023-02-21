/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {Text} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Navigation from './src/app/navigation';
import {persistor, store} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
