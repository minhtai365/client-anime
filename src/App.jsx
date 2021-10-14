import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgressBar from "react-topbar-progress-indicator";
import './App.css';

const Header = lazy(() => import('./componets/Header'));
const Footer = lazy(() => import('./componets/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Info = lazy(() => import('./pages/Info'));
const Watch = lazy(() => import('./pages/Watch'));
const Ranking = lazy(() => import('./pages/Ranking'));
const Genres = lazy(() => import('./pages/Genres'));

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
          <hr className="mb-2" />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/info/:slug' component={Info} />
            <Route path='/watch/:slug/:id/:index' component={Watch} />
            <Route exact path='/ranking/:slug' component={Ranking} />
            <Route path='/anime/:slug' component={Genres} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>

  );
}

export default App;


