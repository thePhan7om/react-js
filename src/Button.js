import React, { Component } from 'react';

export class Button extends Component{
    state = {counter:0};
    handleClick = () => {
        this.setState((prevState) => ({
            counter: prevState.counter +1
            
        }));
    };
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}


