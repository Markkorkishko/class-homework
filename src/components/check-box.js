import React, {Component} from "react";

export default class CheckBox extends Component {

    isChecked = () => {
        return (
        this.props.isCheckedClicked === true ? "far fa-check-square fa-w-14 fa-2x check-box" : "far fa-square fa-w-14 fa-2x check-box"
        )
    };

    render() {
        return (
            <div>
                <i className={this.isChecked()}></i>
            </div>
        );
    }
};