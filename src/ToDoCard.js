import React from 'react';

const ToDoCard = (props) => {

    console.log(props)


    return (
        <div>
            <div className="ToDoTitle">{props.title}</div>
            <div className="ToDoDescription"></div>
            <div className="ToDoDate"></div>
            <div className="ToDoComplete"></div>
        </div>
    );
}

export default ToDoCard;