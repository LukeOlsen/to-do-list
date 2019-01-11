import React from 'react';
import ToDoCard from './ToDoCard';

const ToDoArea = (props) => {
    let keyTrack = 0;
    const goTime = props.title.map(e =>
            <ToDoCard 
            key={e.title}
            title={e.title}
            description={e.description}
            date={e.date}
            complete={e.complete}
            />,
        );


    return(
        <div>
            {goTime}
        </div>
    );
}

export default ToDoArea;