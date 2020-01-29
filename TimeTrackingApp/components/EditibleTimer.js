import React from 'react';
import PropTypes from 'prop-types'; 

import TimerForm from './TimerForm';
import Timer from './Timer';

//(stateless) functional component
// Functional components don't manage states and need any of React's special lifecycle hooks
// Note1: We don't use the keyword 'this' within functional components
// Note2: React still allows us to set propTypes and defaultProps on functional components


//because this component will now actually manage its state --> the editFormOpen state
export default class EditibleTimer extends React.Component{
    static propTypes = {
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        project: PropTypes.string.isRequired, 
        timeElapsed: PropTypes.number.isRequired, 
        isRunning: PropTypes.bool.isRequired, 
        onTimerRemove: PropTypes.func.isRequired,
        onFormSubmit: PropTypes.func.isRequired,  
        onTimerToggle: PropTypes.func.isRequired
    };

    state = {
        editFormOpen: false,
    };
    handleFormClose = () => {
        this.setState({ editFormOpen: false })
    };
    handleFormSubmit = (timer) => {
        const { onFormSubmit } = this.props;
        onFormSubmit(timer);
        this.setState({ editFormOpen: false })
    };
    handleEditPress = () => {
        this.setState({ editFormOpen: true })
    }
    render() {
        const { id, title, project, timeElapsed, isRunning, onTimerRemove, onTimerToggle } = this.props;
        const { editFormOpen } = this.state;
        if (editFormOpen) {
            return <TimerForm 
                        id={id} 
                        title={title} 
                        project={project}
                        onFormClose = {this.handleFormClose}
                        onFormSubmit = {this.handleFormSubmit}
                    />;
        }
        return (
            //The Timer here remains stateless because all of its props so far are passed through its parent's props
            <Timer
                id={id}
                title={title}
                project={project}
                timeElapsed={timeElapsed}
                isRunning={isRunning}
                onEditPress={this.handleEditPress}
                onRemovePress={onTimerRemove}
                onTogglePress={onTimerToggle}
                //onStartPress={onTimerStart}
                //onStopPress={onTimerStop}
            />
        )
    }
    
}