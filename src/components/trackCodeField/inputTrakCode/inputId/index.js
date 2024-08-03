import React, { Component } from "react";
import { InputBtn } from "../inputButton";
export class InputID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
    }
    typeHandler = (e) => {
        this.setState({id: e.target.value});
    }
    render(){
        return (
            <div>
            <div>{this.state.id}</div>
            <textarea onChange={this.typeHandler}></textarea>
            <InputBtn
            id = {this.state.id}
            text="hadgal"
            />
        </div>
        )
    }
}