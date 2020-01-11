import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

//(stateless) functional component
// Functional components don't manage states and need any of React's special lifecycle hooks
// Note1: We don't use the keyword 'this' within functional components
// Note2: React still allows us to set propTypes and defaultProps on functional components


//benefits:
//--managing states in fewer locations
//--creating reusable components
//
export default function EditibleTimer({
    //all of the props are passed in here as the first argument of the function
    id, 
    title, 
    project, 
    timeElapsed,
    isRunning, //booelan
    editFormOpen //boolean
    //destructing
}) {
    //if editFormOpen is not False, or is not undefined
    if (editFormOpen) {
        return <TimerForm id={id} title={title} project={project}/>;
    }

    //the else 
    return (
        <Timer
            id={id}
            title={title}
            project={project}
            timeElapsed={timeElapsed}
            isRunning={isRunning}
        />
    )
}