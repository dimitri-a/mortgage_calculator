import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export default class Gegevens extends Component {

    refresh() {
        
    }

    render() {

        return (<div>
                <label htmlFor="interest">Interest:</label>
                <input type="text" placeholder="interest"/>

                <label htmlFor="amount">Amount:</label>

                <input type="text" placeholder="amount"/>

                <button onClick={() => this.refresh()}> refresh</button>

            </div>
        );
    }

}
