import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  // This constructor creates our states for us to use in the front-end
  constructor(props) {
    super(props);
    this.state = {
      connection: 'not established',
      application: 'unknown'
    };
    this.testConnection = this.testConnection.bind(this);
    
  }

  // This function below gets the data that the test endpoint our backend server provides
  testConnection() {
    axios.get('http://localhost:3001/test')
      .then(res => {
        const testObj = res.data;
        const connection = testObj.connection;
        const application = testObj.app;
        this.setState({
          connection: connection,
          application:application
        });

       }).catch(error => {
         console.log("error:" + error);
       });
  }

  // This function starts calling the functions we need to activate
  componentDidMount() {
    this.testConnection();
  }

  render() {
    return (
      <div className="App">
        
        <h1>Welcome to my { this.state.application } App</h1>
        <h4>Backend connection is { this.state.connection }</h4>
      </div>
    );
  }
}

export default App;
