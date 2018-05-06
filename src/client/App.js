import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthorsList from './components/AuthorsList';

class App extends Component {
  render() {
    return (
      <AuthorsList></AuthorsList> 
    );
  }
}

export default App;
