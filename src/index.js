import React from 'react';
import ReactDOM from 'react-dom';
import ToDoCard from './ToDoCard';
import ToDoArea from './ToDoArea';



function CreateNewToDoCard(){

}



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
    }

    callState(){
        console.log(this.state);
    }

 

    


    render(){
        return(
            <div>
                <ToDoArea title={this.state.todos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
