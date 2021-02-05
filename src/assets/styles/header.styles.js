import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet .create({
    title: {
        fontFamily: 'Lato-Black',
        paddingTop: Platform .OS === 'ios' ? 50 : 10,
    }
});