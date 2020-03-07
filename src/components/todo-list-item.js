import React, {Component} from "react";
import Carets from "./carets";
import CheckBox from "./check-box";

export default class TodoListItem extends Component {

    state = {
        isButtonClicked: false,
    };

    isDoneClicked = () => {
            this.setState(() => {
            const result = !this.state.isButtonClicked;
            return {isButtonClicked: result}
        })
    };

    render() {
        return (
            <div className='container container-size'>
                <div className='row'>
                    <CheckBox isCheckedClicked={this.state.isButtonClicked}/>
                    <Carets
                        isDisabledUp = {this.props.isDisabledUp}
                        isDisabledDown = {this.props.isDisabledDown}
                        upOnAList={this.props.upOnAList}
                        downOnAList={this.props.downOnAList}/>
                    <div className='col'>
                        <p>{this.props.itemName}</p>
                    </div>
                    <button
                        className='btn btn-outline-secondary button-done'
                        onClick={this.isDoneClicked}>
                        {this.state.isButtonClicked===false ? 'Done': "Undone"}
                    </button>
                    <button className='btn btn-outline-secondary'>Edit</button>
                    <button onClick={this.props.deleteButtonClicked}
                            className='btn btn-outline-secondary'>Delete</button>
                </div>
            </div>
        );
    };
}