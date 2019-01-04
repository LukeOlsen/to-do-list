import React from 'react';
import ReactDOM from 'react-dom';
import ToDoCard from './ToDoCard';
import ToDoArea from './ToDoArea';
import CreateToDo from './CreateToDo';
import './App.css';




class App extends React.Component {
    constructor(props){
        super(props)       

        this.state = {
            todos: [
                {
                   title: 'Create ToDo!',
                   description: '',
                   duedate: '',
                   complete: false 
                }
            ],
            tempTitle: '',
            tempDescription: '',
            tempDate: ''
        }


        this.CreateNewToDoCard = this.CreateNewToDoCard.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    callState(){
        console.log(this.state);
    }

 
    CreateNewToDoCard(){    

    }

    handleTitleChange(tempTitle){
        this.setState({tempTitle});
    }

    handleDescriptionChange(tempDescription){
        this.setState({tempDescription});
    }

    handleDateChange(tempDate){
        this.setState({tempDate})
    }
    


    render(){
        return(
            <div>
                <CreateToDo 
                tempTitle={this.state.tempTitle}
                tempDescription={this.state.tempDescription}
                tempDate={this.state.tempDate}
                CreateNewToDoCard={this.CreateNewToDoCard}
                handleTitleChange={this.handleTitleChange}
                handleDescriptionChange={this.handleDescriptionChange}
                handleDateChange={this.handleDateChange}
                />
                <ToDoArea title={this.state.todos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
