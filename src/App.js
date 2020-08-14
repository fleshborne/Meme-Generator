import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MemeCreation from './pages/MemeCreation';
import MemeList from './pages/MemeList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Router>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <MemeCreation />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + '/my-memes'}>
          <MemeList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
