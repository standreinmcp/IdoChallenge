/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import { MainStackNavigator } from './src/navigation/MainNavigator';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MainStackNavigator />
    </View>
  );
};


export default App;
