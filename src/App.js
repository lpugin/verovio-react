import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import verovio from 'verovio-dev';
import filename from './hello.mei';

var tk = new verovio.toolkit();

class App extends Component {

  constructor() {
    super();
    this.state = {data: "<p>loading...</p>"}
  }

  componentDidMount() {
    axios.get(filename)
        .then(response => {
            this.setState({data: tk.renderData(response.data, {})})
        });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Verovio {tk.getVersion()}</h1>
        </header>
        <div dangerouslySetInnerHTML={{__html: this.state.data}} />
      </div>
    );
  }
}

export default App;
