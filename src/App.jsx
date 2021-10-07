import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProgressBar from "react-topbar-progress-indicator";

const Header = lazy(() => import('./componets/Header'));
const Home = lazy(() => import('./pages/Home'));
const Info = lazy(() => import('./pages/Info'));
const Watch = lazy(() => import('./pages/Watch'));

ProgressBar.config({
  barColors: {
    "0": "#ff0000",
  },
});

function App() {

  return (
    <Suspense fallback={<ProgressBar />}>

      <Router>
        <div>
          <Header />
          <hr className="mb-5" />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/info/:slug' component={Info} />
            <Route path='/watch/:slug/:id/:index' component={Watch} />
            {/* <Route exact path='/ranking/:slug' component={ReadChap} />
          <Route path='/genres/:slug' component={GetPage} /> */}
          </Switch>
        </div>
      </Router>
    </Suspense>

  );
}

export default App;


