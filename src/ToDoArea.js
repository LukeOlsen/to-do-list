import React from 'react';
import ToDoCard from './ToDoCard';
import CreateToDo from './CreateToDo';

const ToDoArea = (props) => {
   
    const goTime = props.todos.map(function(e, index) {
        if (e.edit === false) {
            return(
                <div key={index}>
                    <ToDoCard 
                    key={e.key}
                    test={props.key}
                    title={e.title}
                    description={e.description}
                    date={e.date}
                    complete={e.complete}
                    edit={e.edit}
                    changeEdit={props.handleEditChange}
                    />
                </div>
            )
        } else if (e.edit === true) {
            return (
                <div key={index}>
                    <CreateToDo
                    title={e.title}
                    description={e.description}
                    date={e.date}
                    key={e.key}
                    handleTitleChange={props.handleTitleChange}
                    handleDescriptionChange={props.handleDescriptionChange}
                    handleDateChange={props.handleDateChange}
                    />
                </div>
            )
        }
    });


    return(
        <div>
            {goTime}
        </div>
    );
}

export default ToDoArea;