import React, {Component} from 'react';
import './InputKey.css';

export default class InputKey extends Component {

    render() {
        return (
            <input type="text" {...this.props} />
        );
    }

}