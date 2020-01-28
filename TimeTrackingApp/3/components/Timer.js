import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

export default function Timer({
    title,
    project,
    timeElapsed //in millisec 
}) {

    const timeElapsedString = millisecondsToHuman(timeElapsed); //time in millisec to HH:MM:SS

    return (

        <View style={styles.timerContainer}>
            {/* Title, Project part */}
            <Text style={styles.title}>{title}</Text>
            <Text>{project}</Text>

            {/* Timer part */}
            <Text style={styles.elapsedTime}>{timeElapsedString}</Text>

            {/* Buttons */}
            <View style={styles.buttonGroup}>
                <TimerButton small color='blue' title='Edit' />
                <TimerButton small color='blue' title='Remove' />
            </View>
            <TimerButton small color='red' title='Start' />
        </View>

    )
}

const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: 'white',
        borderColor: '#d6d7da',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});