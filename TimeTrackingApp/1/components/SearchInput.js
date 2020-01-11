import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'; // this object instruct React to validate the props given to this component


export default class SearchInput extends React.Component {
    //class properties transformation from Babel
    static propTypes = {
        onSubmit: PropTypes.func.isRequired, //specifying given onSubmit prop must be a function and it is required (not optional)
        placeholder: PropTypes.string, //specifying the given placeholder prop must be a string
    };
    
    static defaultProps = {
        placeholder: '', //making the placeholder prop an optional one
    }    
    state = {
          inputText: '',
    }  
    
    
    // this is a property initializer, which has a different scope than handleTextChange(newLocation) {}
    handleTextChange = (newLocation) => {
        this.setState({
            inputText: newLocation,
        });
    };

    handleSubmitEditing = () => {
        

        const { onSubmit } = this.props;
        const { inputText } = this.state;

        if (!inputText) return;

        onSubmit(inputText);
        this.setState({
            inputText: '',
        });

    };
    render () {
        const { placeholder } = this.props;
        const { inputText } = this.state;
        return (
            <View style = {styles.container}>
                <TextInput

                    autoCorrect = {false}

                    //this prop is responsible for the actual content inside the input field
                    value = {inputText}

                    //this.props is actually owned by App and not the child component - SearchInput
                    //in fact, it is immutable and only creates a one-way pipeline to stream data from parent to children
                    placeholder = {placeholder} // this 'this' keyword is bound to the component's class
                    
                    placeholderTextColor = 'white'
                    underlineColorAndroid = 'transparent' //remove the the dark underline shows by default in Android
                    style = {styles.textInput}
                    clearButtonMode = 'always' // This shows a button on the right side of the input field when characters are inserted that allows us to clear the text (only iOS)
                    
                    onChangeText = {this.handleTextChange} // i think this is really dedundant, but somehow it keeps showing up from place to place....
                    onSubmitEditing = {this.handleSubmitEditing}
                />
            </View>
        )
    }

};

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