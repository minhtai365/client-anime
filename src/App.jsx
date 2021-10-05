import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import Home from './pages/Home';
import Info from './pages/Info';
import Watch from './pages/Watch';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <hr className="mb-5"/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/info/:slug' component={Info} />
          <Route path='/watch/:slug/:id/:index' component={Watch} />
          {/* <Route exact path='/ranking/:slug' component={ReadChap} />
          <Route path='/genres/:slug' component={GetPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;


