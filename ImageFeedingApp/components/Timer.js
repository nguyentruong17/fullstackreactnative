import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types'; 

import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

export default class Timer extends React.Component{

    static propTypes = {
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        project: PropTypes.string.isRequired, 
        timeElapsed: PropTypes.number.isRequired, 
        isRunning: PropTypes.bool.isRequired, 
        onEditPress: PropTypes.func.isRequired,
        onRemovePress: PropTypes.func.isRequired,  
        onTogglePress: PropTypes.func.isRequired
    }

    handleRemove = () => {
        const { id, onRemovePress } = this.props;
        onRemovePress(id);
    };

    /*
    handleStart = () => {
        const { id, onStartPress } = this.props;
        onStartPress(id);
    };

    handleStop = () => {
        const { id, onStopPress } = this.props;
        onStopPress(id);
    } 
    */

    handleToggle = () =>{
        const { id, onTogglePress } = this.props;
        onTogglePress(id);
    }
    
    render() {
        const { title, project, timeElapsed, isRunning, onEditPress } = this.props;

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
                    <TimerButton small color='blue' title='Edit' onPress={onEditPress} />
                    <TimerButton small color='blue' title='Remove' onPress={this.handleRemove} />
                </View>
                <TimerButton 
                    small 
                    color='red' 
                    title={isRunning? 'Stop' : 'Start'} 
                    onPress = {this.handleToggle}
                />
            </View>
        )
    }    
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