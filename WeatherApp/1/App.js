import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            // the following is JSX
            // in JSX, braces are a delimiter, signalling to JSX that what resides in between the braces is a JS expression\
            // another delimter is quotes for strings
            <View style={styles.containder}>
                <Text style = {styles.red}>Open up App.js to start working the app</Text>
                <Text>Changes you make will automatically reload</Text>
                <Text>Shake your phone to open the developer menu</Text>
            </View>    
        )  
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    red: {
        color: 'red',
    }
});
