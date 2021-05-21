import { StyleSheet } from 'react-native';
import { spacing } from '../../core/theme/metrics';


export const controlButtonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: spacing.size06
    },
    buttonContainer: {
        width: '100%',
        height: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '400',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: 40,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
})