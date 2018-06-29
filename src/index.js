import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game'
import Welcome from './welcome'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


// ========================================

ReactDOM.render(
  <Router>
    <div>
      <Route path="/game" component={Game}/>
      <Route exact path="/" component={Welcome}/>
    </div>
  </Router>,
  document.getElementById('root')
);

