import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

/** Dependencies */
import { Picker } from '@react-native-picker/picker';

/** Styles */
import { styles } from '../assets/styles/form.styles';

export const Form = () => {
    return (
        <View>
            <Text style={ styles .label }>Moneda</Text>
            <Picker>
                <Picker.Item 
                    label="Seleccione..."
                    value=""
                />
                <Picker.Item 
                    label="Peso Colombiano"
                    value="COP"
                />
                <Picker.Item 
                    label="Peso Mexicano"
                    value="MXN"
                />
                <Picker.Item 
                    label="Peso Argentino"
                    value="ARS"
                />
                <Picker.Item 
                    label="Bolivar Soberano"
                    value="VES"
                />
                <Picker.Item 
                    label="Dólar Americano"
                    value="USD"
                />
                <Picker.Item 
                    label="Dólar Canadiense"
                    value="CAD"
                />
                <Picker.Item 
                    label="Euro"
                    value="EUR"
                />
                <Picker.Item 
                    label="Libra Esterlina"
                    value="GBP"
                />
            </Picker>
            <Text style={ styles .label }>Criptomoneda</Text>
        </View>
    )
}
