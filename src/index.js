import React from 'react';
import ReactDOM from 'react-dom';
import ToDoArea from './ToDoArea';
import CreateToDo from './CreateToDo';
import './App.css';




class App extends React.Component {
    constructor(props){
        super(props)       

        this.state = {
            todos: [
                {
                   identity: Date.now(),
                   title: 'Create ToDo!',
                   description: '',
                   duedate: '',
                   complete: false,
                   edit: false 
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
        // this.renderCreateToDo = this.renderCreateToDo.bind(this);
        this.tempToDoVisible = this.tempToDoVisible.bind(this);
        this.changeEdit = this.changeEdit.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

 
    CreateNewToDoCard() { 
        let tempObj = {
            identity: Date.now(),
            title: '',
            description: '',
            duedate: '',
            complete: false,
            edit: true
        }   
        this.setState(prevState => ({
            todos: [...prevState.todos, tempObj]
        }))
    }

    addToDo(r) {
        let newState = Object.assign({}, this.state);
        for (var i = 0; i < this.state.todos.length; i++){
            if (this.state.todos[i].identity === r){
                let tempObj = {
                    identity: this.state.todos[i].identity,
                    title: this.state.tempTitle,
                    description: this.state.tempDescription,
                    duedate: this.state.tempDate,
                    complete: false,
                    edit: false
                }
                newState.todos[i] = tempObj;
                newState.tempTitle = '';
                newState.tempDescription = '';
                newState.tempDate = '';
            }
        }
        this.setState(newState)
    }

    changeEdit(r) {
        let newState = Object.assign({}, this.state);
        for (var i = 0; i < newState.todos.length; i++) {
            if (newState.todos[i].identity === r) {
                newState.todos[i].edit = true;
            }
        }
        console.log(newState);
        this.setState(newState)
    }

    completeItem() {
        this.setState()
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
    
    // renderCreateToDo() {
    //     if (this.state.tempToDoVisible === true) {
    //         return (
    //             <div>
    //                 <CreateToDo 
    //                 tempTitle={this.state.tempTitle}
    //                 tempDescription={this.state.tempDescription}
    //                 tempDate={this.state.tempDate}
    //                 CreateNewToDoCard={this.CreateNewToDoCard}
    //                 handleTitleChange={this.handleTitleChange}
    //                 handleDescriptionChange={this.handleDescriptionChange}
    //                 handleDateChange={this.handleDateChange}
    //                 changeEdit={this.changeEdit}
    //                 addToDo={this.CreateNewToDoCard}
    //                 />
    //             </div>
    //         )
    //     } 
    // }

    tempToDoVisible() {
        if (this.state.tempToDoVisible === false) {
            this.setState({tempToDoVisible: true});
        } else if (this.state.tempToDoVisible === true) {
            this.setState({tempToDoVisible: false})
        }
    }

    render(){
        return(
            <div>
                <div className="CreateButton" onClick={this.CreateNewToDoCard}>
                    create new to do?
                </div>
                <ToDoArea 
                todos={this.state.todos} 
                handleEditChange={this.changeEdit}
                handleTitleChange={this.handleTitleChange}
                handleDescriptionChange={this.handleDescriptionChange}
                handleDateChange={this.handleDateChange}
                tempTitle={this.state.tempTitle}
                tempDate={this.state.tempDate}
                tempDescription={this.state.tempDescription}
                addToDo={this.addToDo}
                />
                <button onClick={() => console.log(this.state)}>Console log the state</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
