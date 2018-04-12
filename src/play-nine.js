import React, {Component} from 'react';
import './App.css';

var _ = require('lodash');
require('react-fontawesome');


const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);
    let stars = [];
    
    return (
        
        <div className="col-5">
            {_.range(numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
            )}  </div>
    );
};

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    )
}

const AnswerBox = (props) => {
    return (
        <div className="col-5">
            Answer
        </div>
    )
}

const Numbers = (props) => {
    
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
};

Numbers.list = _.range(1, 10);

class Game extends Component {
    
    render() {
        return (
            <div className="container">
                <h3>PlayNine</h3>
                <hr/>
                <div className="row">
                    <Stars/>
                    <Button/>
                    <AnswerBox/>
                </div>
                <br/>
                <Numbers/>
            
            </div>
        );
    }
}

export class Play9 extends Component {
    
    render() {
        return (
            <div>
                <Game/>
            </div>
        );
    }
}




