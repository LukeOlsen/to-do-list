import React from 'react';

const CreateToDo = (props)  => {
    

    return(
        <div className="CreateToDo">
            <input 
                className="tempTitle"
                value={props.tempTitle}
                onChange={event => props.handleTitleChange(event.target.value)}
            />

            <input 
                className="tempDescription"
                value={props.tempDescription}
                onChange={event => props.handleDescriptionChange(event.target.value)}
            />

            <input 
                className="tempDate"
                value={props.tempDate}
                onChange={event => props.handleDateChange(event.target.value)}
            />
            <button onClick={props.addToDo}>Add This To List!</button>
        </div>
    ) 
}

export default CreateToDo;