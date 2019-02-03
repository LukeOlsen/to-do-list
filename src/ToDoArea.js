import React from 'react';
import ToDoCard from './ToDoCard';
import CreateToDo from './CreateToDo';

const ToDoArea = (props) => {
    console.log(props)
   
    const goTime = props.todos.map(function(e, index) {
        if (e.complete === false) {
            if (e.edit === false) {
                return(
                    <div key={index}>
                        <ToDoCard 
                        identity={e.identity}
                        test={props.identity}
                        title={e.title}
                        description={e.description}
                        date={e.duedate}
                        complete={e.complete}
                        edit={e.edit}
                        changeEdit={props.handleEditChange}
                        completeItem={props.completeItem}
                        />
                    </div>
                )
            } else if (e.edit === true) {
                return (
                    <div key={index}>
                        <CreateToDo
                        title={e.title}
                        description={e.description}
                        date={e.duedate}
                        identity={e.identity}
                        handleTitleChange={props.handleTitleChange}
                        handleDescriptionChange={props.handleDescriptionChange}
                        handleDateChange={props.handleDateChange}
                        tempTitle={props.tempTitle}
                        tempDate={props.tempDate}
                        tempDescription={props.tempDescription}
                        addToDo={props.addToDo}
                        />
                    </div>
                )
            }
        }
    });


    return(
        <div>
            {goTime}
        </div>
    );
}

export default ToDoArea;