import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';
import './App.css';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Switch>
      <Route path='/sobre' component={ About } />
      <Route path='/skills' component={ Skills } />
      <Route path='/projects' component={ Projects } />
      <Route path='/contato' component={ Contact } />
      <Route exact path='/' component={ Profile } />
    </Switch>
  );
}

export default App;
