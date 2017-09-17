import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'First Name'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        axios.post('http://localhost:8000/name', {
            first_name: this.state.value
        })
        .then(function (response) {
            var data = response.data;
            alert("Your BJJ name: " + data.bjj_name);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What is your BJJ Name?</h2>
        </div>
        <p className="App-intro">
        <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </p>
      </div>
    );
  }
}

export default App;
