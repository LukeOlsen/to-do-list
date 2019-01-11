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
            tempDate: '',
            tempToDoVisible: false,
            createButtonVisibile: true
        }


        this.CreateNewToDoCard = this.CreateNewToDoCard.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.renderCreateToDo = this.renderCreateToDo.bind(this);
        this.tempToDoVisible = this.tempToDoVisible.bind(this);
    }

    callState() {
        console.log(this.state);
    }

 
    CreateNewToDoCard() { 
        let tempObj = {
            title: this.state.tempTitle,
            description: this.state.tempDescription,
            tempDate: this.state.tempDate,
            complete: false
        }   
        this.setState(prevState => ({
            todos: [...prevState.todos, tempObj],
            tempTitle: '',
            tempDate: '',
            tempDescription: ''
        }))

        
    }

    handleTitleChange(tempTitle) {
        this.setState({tempTitle});
    }

    handleDescriptionChange(tempDescription) {
        this.setState({tempDescription});
    }

    handleDateChange(tempDate) {
        this.setState({tempDate})
    }
    
    renderCreateToDo() {
        if (this.state.tempToDoVisible === true) {
            return (
                <CreateToDo 
                tempTitle={this.state.tempTitle}
                tempDescription={this.state.tempDescription}
                tempDate={this.state.tempDate}
                CreateNewToDoCard={this.CreateNewToDoCard}
                handleTitleChange={this.handleTitleChange}
                handleDescriptionChange={this.handleDescriptionChange}
                handleDateChange={this.handleDateChange}
                />
            )
        } 
    }

    tempToDoVisible() {
        if (this.state.tempToDoVisible === false) {
            this.setState({tempToDoVisible: true});
        } 
    }




    render(){
        return(
            <div>
                <button onClick={this.CreateNewToDoCard}>create new to do!</button>
                {this.renderCreateToDo()}
                <div className="CreateButton" onClick={this.tempToDoVisible}>
                    create new to do?
                </div>
                <ToDoArea title={this.state.todos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
