

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFount/NotFound';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>

          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            
            <Route>
              <NotFound path="*"></NotFound>
            </Route>
          </Switch>
         
      </Router>
       <Footer></Footer>
    </div>
  );
}

export default App;
