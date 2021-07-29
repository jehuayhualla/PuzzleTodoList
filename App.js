// @flow
import * as React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';

import type { Element } from 'react'

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = (): Element<any> => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="main" component={MainScreen} />
            <Stack.Screen name="addtask" component={AddTaskScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;