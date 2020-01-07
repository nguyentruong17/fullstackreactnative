import React from 'react';
import {
    StyleSheet, 
    Text, 
    KeyboardAvoidingView,
    Platform, // this is a built-in React-Native API
    TextInput,
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            //the virtual keyboard can cover 1/2 the device screen and may cover our components, so this is the solution
            <KeyboardAvoidingView style={styles.containder} behavior='padding'> 
                {/*in case of any repeated attributes in the array of styles, the one at the end takes precedence*/}
                <Text style = {[styles.textStyle, styles.largeText]}>Ho Chi Minh City</Text> 
                <Text style = {[styles.textStyle, styles.smallText]}>Partly Sunny</Text>
                <Text style = {[styles.textStyle, styles.largeText]}>96°</Text>

                <TextInput
                    autoCorrect = {false}
                    placeholder = 'Search any city' 
                    placeholderTextColor = 'white'
                    style = {styles.textInput}
                    clearButtonMode = 'always' // This shows a button on the right side of the input field when characters are inserted that allows us to clear the text (only iOS)
                />  
            </KeyboardAvoidingView>    
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
    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    },
    textInput: {
        backgroundColor: '#666',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },

});
