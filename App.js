import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './src/assets/styles/app.styles';
import { Form } from './src/components/Form';

/** Components */
import { Header } from './src/components/Header';

/** Functional Component */
const App: () => React$Node = () => {
    return (
        <>
            <Header />
            <Image
                style={ styles .image }
                source={ require( './src/assets/images/cryptomonedas.png' ) }
            />
            <View style={ styles .content }>
                <Form />
            </View>
        </>
    );
};

export default App;
