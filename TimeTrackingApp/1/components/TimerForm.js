import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

import TimerButton from './TimerButton';

export default function TimerForm({
    id,
    title,
    project
}) {
    //because we're going to reuse this TimerForm for both the EditibleTimer and ToggleableTimerForm,
    // and the only difference of this component in them are the title of the button -- create or update,
    // so here we needs to decide if it's an update or a create one
    // id? means id is not undefined --> id exists and therefore the user is 'updating' an existing timer; otherwise, they're creating a new one
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
                        defaultValue={title}
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
                        defaultValue={project}
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