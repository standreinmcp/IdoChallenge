import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { en } from '../core/theme/strings';
import { controlButtonStyles } from './styles/controlButtonStyles';


const ControlButton = () => {
    return (
        <View style={controlButtonStyles.container}>
            <TouchableOpacity style={controlButtonStyles.buttonContainer}>
                <Text style={controlButtonStyles.buttonTextStyles}>{en.controlButtonScreen}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ControlButton;