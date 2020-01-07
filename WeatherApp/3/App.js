import React from 'react';
import {
    StyleSheet, 
    Text, 
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import SearchInput from './components/SearchInput'



export default class App extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.containder} behavior='padding'>
                
                <Text style = {[styles.textStyle, styles.largeText]}>Ho Chi Minh City</Text> 
                <Text style = {[styles.textStyle, styles.smallText]}>Sunny</Text>
                <Text style = {[styles.textStyle, styles.largeText]}>96°</Text>
                
                <SearchInput 
                    placeholder="Search any city" />

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
});
