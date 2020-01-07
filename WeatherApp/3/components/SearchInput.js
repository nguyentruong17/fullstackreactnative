import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'


export default class SearchInput extends React.Component {
    // this method is called before render()

    render () {
        const { placeholder } = this.props;
        return (
            <View style = {styles.container}>
                <TextInput

                    autoCorrect = {false}

                    //this prop is responsible for the actual content inside the input field

                    //this.props is actually owned by App and not the child component - SearchInput
                    //in fact, it is immutable and only creates a one-way pipeline to stream data from parent to children
                    placeholder = {placeholder} // this 'this' keyword is bound to the component's class
                    
                    placeholderTextColor = 'white'
                    underlineColorAndroid = 'transparent' //remove the the dark underline shows by default in Android
                    style = {styles.textInput}
                    clearButtonMode = 'always' // This shows a button on the right side of the input field when characters are inserted that allows us to clear the text (only iOS)
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: 'white',
    }

})