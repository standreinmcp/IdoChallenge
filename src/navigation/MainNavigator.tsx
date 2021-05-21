import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ControlButton from '../features/ControlButton';
import { roots } from './roots';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name={roots.controlButtonScreen} component={ControlButton} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

