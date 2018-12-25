import React, { Component } from 'react';
import './App.scss';
import Header from './modules/header/header';
import Sidebar from './modules/sidebar/sidebar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default App;
