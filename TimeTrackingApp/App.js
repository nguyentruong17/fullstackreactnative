import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import EditibleTimer from './components/EditibleTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

import { newTimer } from './utils/TimerUtils';

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
    };
    
    handleCreateFormSubmit = timer => {
        const { timers } = this.state;
        this.setState({
            timers: [newTimer(timer), ...timers],
        });
    };

    handleUpdateFormSubmit = existingTimer => {
        const { timers } = this.state;
        this.setState({
            timers: timers.map(timer => {
                if (timer.id === existingTimer.id){
                    const { title, project } = existingTimer;
                    return {
                        ...timer, //spread the whole thing
                        title, //override/update title
                        project //update/override project 
                    };
                }
                return timer;
            }),
        })
    };

    handleTimerRemove = removeTimerId => {
        const { timers } = this.state;
        this.setState({
            timers: timers.filter(timer => timer.id !== removeTimerId)
        })
    };

    /* //my solution here was not good...
    handleTimerStart = (startTimerId) => {
        const { timers } = this.state;
        this.setState({
            timers: timers.map(timer => {
                if (timer.id === startTimerId) {
                    return {
                        ...timer,
                        isRunning: true
                    };
                };
                return timer;
            }),
        });
    };

    handleTimerStop = (stopTimerId) => {
        const { timers } = this.state;
        this.setState({
            timers: timers.map(timer => {
                if (timer.id === stopTimerId) {
                    return {
                        ...timer,
                        isRunning: false
                    };
                };
                return timer;
            }),
        });
    }
    */

    handleTimerToggle = toggleTimerId => {
        const { timers } = this.state;
        this.setState({
            timers: timers.map(timer => {
                if (timer.id === toggleTimerId) {
                    const { isRunning } = timer;
                    return {
                        ...timer,
                        isRunning: !isRunning
                    };
                };
                return timer;
            }),
        });
    };
    
    
    componentDidMount() {
        const TIME_INTERVAL = 1000;

        //capture the return value of setInterval() to the variable this.intervalId
        // so that we can stop the interval at anypoint using clearInterval()

        //by doing this way, we have no way to guarantee that our timers will be updated every 1 sec,
        // or when we quit the app, everything will be 
        this.intervalId = setInterval(() => {
            const { timers } = this.state;
            this.setState({
                timers: timers.map(timer => {
                    const { timeElapsed, isRunning } = timer;

                    return {
                        ...timer,
                        timeElapsed: isRunning ? timeElapsed + TIME_INTERVAL : timeElapsed,
                    };
                })
            });
        }, TIME_INTERVAL);
    };

    //we want to clear the interval if the app component get deleted (unmount)
    // in our app, however, app will never get unmounted
    componentWillUnmount() {
        clearInterval(this.intervalId)
    };

    render () {
        const { timers } = this.state;

        return(
            <View style={styles.appContainer}>
                <View>
                    <ToggleableTimerForm
                        isOpen={false} //determine whether this displays '+' or the form
                        onFormSubmit = {this.handleCreateFormSubmit}
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
                            onFormSubmit = {this.handleUpdateFormSubmit}
                            onTimerRemove = {this.handleTimerRemove}
                            //for stop or start
                            onTimerToggle = {this.handleTimerToggle}
                            //onTimerStart = {this.handleTimerStart}
                            //onTimerStop = {this.handleTimerStop}
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