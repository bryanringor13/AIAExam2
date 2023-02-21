/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '../src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from '../src/app/navigation';
import {makeServer} from '../src/data/miragejs';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('Render App', () => {
  makeServer();

  it('User render correctly', async () => {
    render(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>,
    );
  });
});
