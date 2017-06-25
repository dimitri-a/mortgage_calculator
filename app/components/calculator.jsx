import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

import Gegevens from './gegevens.jsx';
import Grafiek from "./grafiek.jsx";

export default class Calculator extends Component {

    render() {

        return (<div>
                <Gegevens></Gegevens>
               <Grafiek/>
            </div>
        );
    }

}
