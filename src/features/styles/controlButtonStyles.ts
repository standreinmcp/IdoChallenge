import { StyleSheet } from 'react-native';
import { spacing } from '../../core/theme/metrics';


export const controlButtonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    buttonContainer: {
        height: 60,
        marginHorizontal: spacing.size06,
        backgroundColor: 'red'
    },
    buttonTextStyles: {
        fontSize: 24,
        fontWeight: '600'
    }
})