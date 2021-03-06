

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
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
            <Route exact path='/home'>
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
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>            
            <Route>
              <NotFound path="*"></NotFound>
            </Route>
          </Switch>
        <Footer></Footer> 
      </Router>
       
    </div>
  );
}

export default App;
