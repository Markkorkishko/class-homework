import React, {Component} from "react";

export default class AddItem extends Component{
    render() {
        return (
            <div className='row'>
                <input
                    onChange={(e) => this.props.inputedText(e.target.value)}
                    value={this.props.inputValue}
                    className='input-group-prepend'/>
                <button className='btn btn-primary'
                        onClick={this.props.addButtonClicked}>
                    Add Todo
                </button>
            </div>
        );
    }
}