import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './App.js';
import Timetic from './timetic';

ReactDOM.render(<Game />, document.getElementById('root'));

const tick = () => {
    return(ReactDOM.render(<div className="clock">
                    <Timetic date={new Date()}/>
                </div>,document.getElementById("clock")));
} 
setInterval(tick,1000);