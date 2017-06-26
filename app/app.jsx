import store from './store.js';
import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Products from './components/products.jsx';
import Cart from './components/cart.jsx';
import Calc from './components/calculator.jsx';
import Test from './components/testchart.jsx';

import Counter from './components/counter.jsx';

//


const App = () => (
    <Provider store={store}>
        <div>
            <Counter/>
        </div>
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
