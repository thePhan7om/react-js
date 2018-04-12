import React, { Component } from 'react';
import './App.css';


export class Button2 extends Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    };
    
    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};

export class App2 extends Component {
    state = { counter: 0 };
    
    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    };
    
    render() {
        return (
            <div>
                <Button2 incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button2 incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button2 incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button2 incrementValue={100} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}

