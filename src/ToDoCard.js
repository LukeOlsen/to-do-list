import React from 'react';

const ToDoCard = (props) => {

    console.log(props)
    console.log(props.title)


    return (
        <div className="ToDoCard">
            <div className="ToDoTitle">{props.title}</div>
            <div className="ToDoDescription">{props.description}</div>
            <div className="ToDoDate">{props.date}</div>
            <div className="ToDoComplete">{props.complete}</div>
            <button onClick={() => props.changeEdit(props.identity)}>Edit</button>
        </div>
    );
}

export default ToDoCard;