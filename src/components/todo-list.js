import React, {Component} from "react";
import TodoListItem from "./todo-list-item";

export default class TodoList extends Component {

    componentList = this.props.list.map((el) => {
        return(
            <li key={el.id}>
                <TodoListItem
                    isDisabledUp = {this.props.list.indexOf(el)=== 0 ? 1 : 0}
                    isDisabledDown = {this.props.list.indexOf(el)=== this.props.list.length-1 ? 1 : 0}
                    itemName={el.name}
                    upOnAList={() => this.props.upOnAList(el.id)}
                    downOnAList={() => this.props.downOnAList(el.id)}
                    deleteButtonClicked={()=> this.props.deleteButtonClicked(el.id)}/>
            </li>
        )
    });

    render() {
        return(
            <ul>
                {this.componentList}
            </ul>
        );
    }
}
