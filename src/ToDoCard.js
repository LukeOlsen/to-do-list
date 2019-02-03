import React from 'react';

const ToDoCard = (props) => {

    console.log(props)
    console.log(props.title)


    return (
        <div className="ToDoCard">
            <div className="TextArea">
                <div className="ToDoTitle"><p>{props.title}</p></div>
                <div className="ToDoDescription"><p>{props.description}</p></div>
                <div className="ToDoDate"><p>{props.date}</p></div>
            </div>
            <div className="ButtonArea">
                <button className="EditButton" onClick={() => props.changeEdit(props.identity)}>EDIT</button>
                <button className="CompleteButton" onClick={() => props.completeItem(props.identity)}>COMPLETE</button>
            </div>
        </div>
    );
}

export default ToDoCard;