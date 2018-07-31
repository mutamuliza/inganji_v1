import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import BuyTicket from '../pages/BuyTicket';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import availablebuses from '../pages/availablebuses';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div >
          <Header />
          
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/buyticket' component={BuyTicket} />
              <Route exact path='/availablebuses' component={availablebuses} />
              <Route component={NotFound} />
            </Switch>
          <Footer />  
        </div>
      </Router>
    );
  }
}
