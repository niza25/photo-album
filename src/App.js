import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';
import PhotoPageContainer from './components/PhotoPageContainer';
import { Route } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path="/" component={AlbumsListContainer} />
          <Route exact path="/albums/:id" component={PhotoPageContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
