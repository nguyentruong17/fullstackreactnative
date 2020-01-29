import React from 'react';
import PropTypes from 'prop-types'; 
import { StyleSheet, View } from 'react-native';
import TimerForm from './TimerForm';
import TimerButton from './TimerButton';

//because this component will now actually manage its state --> the isOpen state
export default class ToggleableTimerForm extends React.Component{
    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
    };

    state = {
        isOpen: false, // this the form to be closed at first
    };

    //property initializer in order to ensure 'this' inside the function is bound to the component
    handleFormOpen = () =>{
        this.setState({ isOpen: true });
    };

    handleFormClose = () => {
        this.setState({ isOpen: true });
    }

    handleFormSubmit = (timer) => {
        const { onFormSubmit } = this.props;
        onFormSubmit(timer);
        this.setState({ isOpen: false });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <View style={[styles.container, !isOpen && styles.buttonPadding]}>
                {isOpen ? (
                    <TimerForm
                        onFormSubmit = {this.handleFormSubmit}
                        onFormClose = {this.handleFormClose}
                    /> 
                ) : (
                    <TimerButton title='+' color='black' onPress={this.handleFormOpen} />
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});