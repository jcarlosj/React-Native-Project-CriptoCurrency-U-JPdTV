import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

/** Styles */
import { styles } from '../assets/styles/form.styles';

export const Form = () => {
    return (
        <View>
            <Text style={ styles .label }>Moneda</Text>
            <Text style={ styles .label }>Criptomoneda</Text>
        </View>
    )
}
