import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';

import './App.css';
import Home from './components/Home';



function App() {
  return (
    <div>
      <hr />
      <Router>

        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/edit:id" component={Edit} />
          <Route path="/show:id" component={Show} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
