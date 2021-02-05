import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet .create({
    title: {
        backgroundColor: '#5E49E2',
        color: '#FFF',
        fontFamily: 'Lato-Black',
        fontSize: 20,
        paddingVertical: 12,
        marginBottom: 30,
        paddingTop: Platform .OS === 'ios' ? 50 : 10,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});