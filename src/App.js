import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import CityFinder from './components/CityFinder';
import CityView from './components/CityView';
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Login from "./pages/Login";
import Recommendation from "./pages/Recommendation";
import Support from "./pages/Support";

const CityViewRouted = withRouter(CityView);
const CityFinderRouted = withRouter(CityFinder);

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
      <div className="App">
        <Router>
        <div>
        <Navbar />
          <Switch>  
             <div className={'moviebox-page--wrapper'}>
              <Route path="/" />
              <Route exact path="/" component={CityFinderRouted} />
              <Route exact path="/city/:gid" component={CityViewRouted} />
              <Route path='/' exact component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/recommendation' component={Recommendation} />
              <Route path='/favourite' component={Favourite} />
              <Route path='/support' component={Support} />
             </div>
          </Switch>
        </div>
        </Router>
      </div>
      </div>
    );
  }
}

export default App;