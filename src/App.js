// DockerCon Demo
import React, { Component } from 'react';
import logo from './logo.svg';
import walter from './walter.gif';
import './App.css';
import axios from 'axios';

class App extends Component {

   constructor(props, context) {
    super();
    this.state = {
        time: []
    };
  }

    componentWillMount() {
    var self = this;

    var endpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost:8000/time";

    axios.get(endpoint)
    .then(function (response) {
      console.log(response)
      self.setState({
        time: response.data.time
      });
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
          <br />
          <img src={walter} className="walter-logo" alt="logo" />
          <h2>The time is currently {this.state.time}</h2>
        </div>
      </div>
    );
  }
}

export default App;
