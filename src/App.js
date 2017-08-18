import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputKey from './components/input/InputKey'
import SubmitForm from './components/forms/SubmitForm'
import axios from 'axios';

class App extends Component {

    state = {
      inputKey: ""
    };

    validateKey = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8095/user/validate/${this.state.inputKey}`)
            .then(response => {
               console.log(response);

            })
            .catch(error => {

            });

    };

    inputKeyChanged = (e) => {
        let newInputKey = e.target.value;
        this.setState(
            {inputKey: newInputKey}
        );
    };

    render() {
        return (
            <div id="app">
                <div id="input-token">
                    <SubmitForm onSubmit={this.validateKey}>
                        <InputKey id="input-token-field" placeholder="Type your reference token here.." onChange={this.inputKeyChanged}/>
                    </SubmitForm>
                </div>
            </div>
        );
    }
}

export default App;
