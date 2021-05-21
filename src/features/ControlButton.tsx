import React, { useCallback, useEffect, useState } from 'react';
import { View, Pressable, Text, PressableProps, Modal, TextInput, Switch } from 'react-native';
import { en } from '../core/theme/strings';
import { controlButtonStyles } from './styles/controlButtonStyles';

type ColorPicker = {
    r: string,
    g: string,
    b: string
}
type ButtonSize = {
    height: string,
    width: string
}

const ControlButton = () => {
    const [buttonProps, setButtonProps] = useState<PressableProps>({
        delayLongPress: 500,
        disabled: false,
        hitSlop: 0,
        onLongPress: () => { console.log('Long presss'); },
        onPress: () => null,
        onPressIn: () => { console.log('on press in') },
        onPressOut: () => { console.log('on press out') },
        pressRetentionOffset: { bottom: 30, left: 20, right: 20, top: 20 },
        style: controlButtonStyles.buttonContainer,
    });
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [colorPicker, setColorPicker] = useState<ColorPicker>({
        r: '100',
        g: '100',
        b: '100'
    })
    const [buttonSize, setButtonSize] = useState<ButtonSize>({
        height: '60',
        width: '100%'
    })
    const [disabled, setDisabled] = useState<boolean>(buttonProps.disabled);

    const toggleModal = useCallback(() => {
        setModalVisible(!modalVisible);
    }, [modalVisible])

    const onSubmit = useCallback(() => {
        setButtonProps(prevState => {
            let newStyle = {};
            Object.assign(newStyle, prevState.style)
            newStyle['height'] = parseInt(buttonSize.height, 10);
            newStyle['width'] = buttonSize.width;
            newStyle['backgroundColor'] = `rgb(${colorPicker.r}, ${colorPicker.g}, ${colorPicker.b})`
            return ({ ...prevState, style: newStyle })
        })
        toggleModal();
    }, [toggleModal, buttonSize, colorPicker])

    useEffect(() => {
        setButtonProps(prevProps => ({ ...prevProps, onPress: toggleModal }))
    }, []);

    return (
        <View style={controlButtonStyles.container}>
            <Pressable {...buttonProps}>
                <Text style={controlButtonStyles.buttonText}>{en.controlButtonScreen.loginButtonText}</Text>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View style={controlButtonStyles.modalContainer}>
                    <Text style={controlButtonStyles.buttonText}>{en.controlButtonScreen.modalTitle}</Text>
                    <Text>{en.controlButtonScreen.pickColor}</Text>
                    <View style={controlButtonStyles.row}>
                        <TextInput
                            style={controlButtonStyles.textInput}
                            value={colorPicker.r}
                            onChangeText={(text) => setColorPicker(prevState => ({ ...prevState, r: text }))}
                            maxLength={3}
                        />
                        <TextInput
                            style={controlButtonStyles.textInput}
                            value={colorPicker.g}
                            onChangeText={(text) => setColorPicker(prevState => ({ ...prevState, g: text }))}
                            maxLength={3}
                        />
                        <TextInput
                            style={controlButtonStyles.textInput}
                            value={colorPicker.b}
                            onChangeText={(text) => setColorPicker(prevState => ({ ...prevState, b: text }))}
                            maxLength={3}
                        />
                    </View>
                    <Text >{en.controlButtonScreen.changeSize}</Text>
                    <View style={controlButtonStyles.row}>
                        <Text>{en.controlButtonScreen.height + ' '}</Text>
                        <TextInput style={controlButtonStyles.textInput}
                            value={typeof buttonSize.height === 'number' ? buttonSize.height : buttonSize.height} onChangeText={text => setButtonSize(prevState => ({ ...prevState, height: text }))} />
                    </View>
                    <View style={controlButtonStyles.row}>
                        <Text>{en.controlButtonScreen.width + ' '}</Text>
                        <TextInput style={controlButtonStyles.textInput}
                            value={typeof buttonSize.width === 'number' ? buttonSize.width : buttonSize.width} onChangeText={text => setButtonSize(prevState => ({ ...prevState, width: text }))} />
                    </View>
                    <Pressable onPress={onSubmit}>
                        <Text>{en.controlButtonScreen.submit}</Text>
                    </Pressable>
                    <View style={controlButtonStyles.row}>
                        <Text>{en.controlButtonScreen.disableButton}</Text>
                        <Switch value={disabled} onValueChange={setDisabled} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ControlButton;