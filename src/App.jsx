import React from 'react'
import Navbar from './components/nav'
import Body from './components/inicio'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PostingBody from './components/posting';
import './App.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/inicio" component={Body} />
          <Route exact path="/posting" component={PostingBody} />
          <Redirect from="/" to="/inicio" />
        </Switch>
      </Router>

    </React.Fragment>
  )
}

export default App
