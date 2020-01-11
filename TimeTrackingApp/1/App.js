import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import EditibleTimer from './components/EditibleTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

export default class App extends React.Component {

    render () {
        return(
            <View style={styles.appContainer}>
                <View>
                    <ToggleableTimerForm
                        isOpen={false} //determine whether this displays '+' or the form
                    />
                </View>
                <ScrollView style={styles.timerList}> 
                    <EditibleTimer
                        id='1'
                        title='Title 1'
                        project='Project 1'
                        timeElapsed='10000'
                        isRunning //the timer is running
                    />
                    <EditibleTimer
                        id='2'
                        title='Title 2'
                        project='Project 2'
                        timeElapsed='20000'
                        editFormOpen //the form is open
                    />
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    timerList: {
        paddingBottom: 15
    }
})