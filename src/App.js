import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './components/Layout/Home/Home';
import { Switch, Route, withRouter } from 'react-router-dom';
import asyncComponent from './components/hoc/asyncComponent';
import './App.css';

const asyncLyrics = asyncComponent(() => {
  return import('./components/Main/Lyrics/Lyrics');
});
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lyrics/track/:id" component={asyncLyrics} />
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);
