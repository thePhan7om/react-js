import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button} from './Button';
import {Button2, App2} from './Button2';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Button />, document.getElementById('counter'));
ReactDOM.render(<App2 />, document.getElementById('app2'));

registerServiceWorker();
