import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

import TimerButton from './TimerButton';

//Note1: in React-Native, all forms are STATEFUL
//Note2(deduct from Note1): in React-Native, all modifications that are made to a component should be handled and kept in state

//Note3: Using a combination of state, the value attribute, and the onChangeText attribute 
//  is the canonical method we use to write form elements in React Native.
export default class TimerForm extends React.Component {
    constructor(props) {
        super(props);
        const { id, title, project } = this.props;
        this.state = {
            title: id ? title : '',
            project: id ? project : ''
        }
    }

    handleTitleChange = title => {
        this.setState({ title });
    };
    handleProjectChange = project => {
        this.setState({ project });
    };



    render() {
        const { id } = this.props;
        const { title, project } = this.state;

        const submitText = id ? 'Update' : 'Create';
        return (
            <View style={styles.formContainer}>
                {/*'Title' part*/}
                <View style={styles.attributeContainer}>
                    <Text style={styles.textInputTitle}>Title</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            value={title}
                            onChangeText={this.handleTitleChange}
                        />
                    </View>
                </View>

                {/*'Project' part*/}
                <View style={styles.attributeContainer}>
                    <Text style={styles.textInputTitle}>Project</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            placeholder={project}
                            value={project}
                            onChangeText={this.handleProjectChange}
                        />
                    </View>
                </View>

                {/*'Buttons' part*/}
                <View style={styles.buttonGroup}>
                    <TimerButton small color='#21BA45' title={submitText} />
                    <TimerButton small color='#DB2828' title='Cancel' />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})