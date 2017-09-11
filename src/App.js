import React, { Component } from 'react';
import logo from './logo.svg';
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

    var endpoint = process.env.API_URL || 'http://localhost:8080/time';

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
          <h2>The time is {this.state.time}</h2>
        </div>
      </div>
    );
  }
}

export default App;
