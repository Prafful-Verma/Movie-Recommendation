import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Login from "./pages/Login";
import Recommendation from "./pages/Recommendation";
import Support from "./pages/Support";

function App() {
  return (
    <>
     <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/login' component={Login} />
         <Route path='/recommendation' component={Recommendation} />
         <Route path='/favourite' component={Favourite} />
         <Route path='/support' component={Support} />
       </Switch>
     </Router> 
    </>
  );
}

export default App;
