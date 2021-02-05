import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet .create({
    title: {
        paddingTop: Platform .OS === 'ios' ? 50 : 10
    }
});