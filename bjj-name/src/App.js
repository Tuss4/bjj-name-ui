import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'First Name', new_name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        var that = this;
        event.preventDefault();
        axios.post('http://18.221.78.77:8000/name', {
            first_name: this.state.value
        })
        .then(function (response) {
            var data = response.data;
            that.setState({new_name: data.bjj_name});
            console.log(that.state);
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
        <p>
            <strong>Your BJJ name is: {this.state.new_name}!</strong>
        </p>
      </div>
    );
  }
}

export default App;
