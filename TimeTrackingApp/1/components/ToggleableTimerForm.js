import React from 'react';
import { StyleSheet, View } from 'react-native';
import TimerForm from './TimerForm';
import TimerButton from './TimerButton';

export default function ToggleableTimerForm({
    isOpen //boolean
}) {
    return (
        <View style={[styles.container, !isOpen && styles.buttonPadding]}>
            {isOpen ? <TimerForm /> : <TimerButton title='+' color='black' />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});