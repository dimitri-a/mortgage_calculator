if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import {Hello} from './components/hello.jsx'; //todo remember to put component in curly brackets when importing
import {Hero} from './components/hero.jsx';
import {Kid} from './components/kid.jsx';
import {HomeAway} from './components/homeaway.jsx';
import DivDiv from './components/divindiv.jsx';

import './css/flex.css';

import Flex from './components/flex.jsx';

//todo remove
console.log('testing hello');
ReactDOM.render(<div className="container"> <Flex/>  </div>, document.getElementById('root'));