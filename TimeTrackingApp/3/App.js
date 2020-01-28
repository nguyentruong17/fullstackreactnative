import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import EditibleTimer from './components/EditibleTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

import uuidv4 from 'uuid/v4';

export default class App extends React.Component {
    //Babel plugin transform-class-properties
    state = {
        timers: [
            {
                title: 'Title 1',
                project: 'Project 1',
                id: uuidv4(),
                timeElapsed: 10000,
                isRunning: true
            },
            {
                title: 'Title 2',
                project: 'Project 2',
                id: uuidv4(),
                timeElapsed: 20000,
                isRunning: false
            },
        ],
    }
    render () {
        const { timers } = this.state;

        return(
            <View style={styles.appContainer}>
                <View>
                    <ToggleableTimerForm
                        isOpen={false} //determine whether this displays '+' or the form
                    />
                </View>
                <ScrollView style={styles.timerList}> 
                    {timers.map(({ title, project, id, timeElapsed, isRunning })=> (
                        <EditibleTimer
                            key={id} //this is ued by React Native framework, and it needs to be unique
                            id={id}
                            title={title}
                            project={project}
                            timeElapsed={timeElapsed}
                            isRunning={isRunning}
                        />
                        /*this is an array of EditableTimer components*/
                    ))}

                    
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