import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ControlButton from '../features/ControlButton';

const MainStack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="ControlButton" component={ControlButton} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default App;