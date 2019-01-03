import React from 'react';
import ToDoCard from './ToDoCard';

const ToDoArea = (props) => {
    const keyTrack = 0;
    const goTime = props.title.map(e =>
            <ToDoCard 
            key={keyTrack}
            title={e.title}
            />
        );


    return(
        <div>
            {goTime}
        </div>
    );
}

export default ToDoArea;