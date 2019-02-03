import React from 'react';

const CreateToDo = (props)  => {   

    return(
        <div className="CreateToDo">
            <input
                type="text" 
                className="tempTitle"
                placeholder={props.title}
                value={props.tempTitle}
                onChange={event => props.handleTitleChange(event.target.value)}
            />

            <input 
                type="text"
                className="tempDescription"
                value={props.tempDescription}
                onChange={event => props.handleDescriptionChange(event.target.value)}
            />

            <input 
                type="date"
                className="tempDate"
                value={props.tempDate}
                onChange={event => props.handleDateChange(event.target.value)}
            />
            <button onClick={() => props.addToDo(props.identity)}>Add This To List!</button>
        </div>
    ) 
}

export default CreateToDo;