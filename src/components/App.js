import React, {Component} from 'react';
import TodoList from "./todo-list";
import './App.css';
import AddItem from "./add-item";

export default class App extends Component{

    state = {
        todoList: [
            {id: 232, name: 'Hit me'},
            {id: 233, name: 'Get me'},
            {id: 234, name: 'Bit me'}
        ],

        nameOfAddingItem: ''
    };

    upOnAList = (id) => {
        this.setState(()=>{
           const elementIndex = this.state.todoList.findIndex((el) => el.id === id);
           const tempArray = [...this.state.todoList];
           const tempElement = this.state.todoList[elementIndex];
           tempArray[elementIndex] = this.state.todoList[elementIndex-1];
            tempArray[elementIndex-1] = tempElement;
            console.log(tempArray);

            return {
                todoList: tempArray
            }
        });
    };
    downOnAList = (id) => {
        this.setState(()=>{
            const elementIndex = this.state.todoList.findIndex((el) => el.id === id);
            const tempArray = [...this.state.todoList];
            const tempElement = this.state.todoList[elementIndex];
            tempArray[elementIndex] = this.state.todoList[elementIndex+1];
            tempArray[elementIndex+1] = tempElement;
            console.log(tempArray);

            return {
                todoList: tempArray
            }
        });
    };

    inputedText = (text) => {
        this.setState(() => {
            return{
                nameOfAddingItem: text
            }
        })
    };

    addButtonClicked = () =>{
        this.setState(()=>{
            const newItem = {
                id: Math.random(),
                name: this.state.nameOfAddingItem
            };

            const tempArray = [...this.state.todoList, newItem];
            console.log(tempArray);

            return {
                todoList: tempArray,
                nameOfAddingItem: ''
            }
        })

    };

    deleteButtonClicked = (id) => {
        this.setState(()=>{
            const tempArray = this.state.todoList.filter((el) => el.id !== id);
            console.log(tempArray);

            return{
                todoList: tempArray
            }
        })
    };

    render() {

        const {todoList, nameOfAddingItem} = this.state;

        return (
            <div className='container container-size'>
                <AddItem inputedText={this.inputedText}
                         inputValue={nameOfAddingItem}
                         addButtonClicked={this.addButtonClicked}/>
                <TodoList list={todoList}
                          upOnAList={this.upOnAList}
                          downOnAList={this.downOnAList}
                          deleteButtonClicked={this.deleteButtonClicked}/>
            </div>
        )
   }
}

