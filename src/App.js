import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';
import './App.css';
// import './styles/Profile.scss'
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import { useLocation } from 'react-router-dom';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return null;
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path='/sobre' component={ About } />
      <Route path='/skills' component={ Skills } />
      <Route path='/projects' component={ Projects } />
      <Route path='/project/:id' component={ ProjectDetails } />
      <Route path='/contato' component={ Contact } />
      <Route exact path='/' component={ Profile } />
    </Switch>
    </>
  );
}

export default App;
