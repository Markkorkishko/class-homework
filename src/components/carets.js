import React, {Component} from "react";

export default class Carets  extends Component {

    render() {
        return(
            <div>
                <button
                    disabled={this.props.isDisabledUp}
                    onClick={this.props.upOnAList}
                    className='btn btn-outline-secondary d-block p-0 carets'>
                    <i className="fas fa-caret-up"></i>
                </button>
                <button
                    disabled={this.props.isDisabledDown}
                    onClick={this.props.downOnAList}
                    className='btn btn-outline-secondary d-block p-0 carets'>
                    <i className="fas fa-caret-down"></i>
                </button>
            </div>
        );
    }
}