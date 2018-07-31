import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Footer extends React.Component {
  render() {
    return (


<footer className="footer" style={{backgroundColor:" #001b33",color:"#3b97ff"}}>

    
    <div className="container text-center text-md-left">

     
      <div className="row">

        
        <div className="hrg">

       
          <h5 className="font-weight-bold text-uppercase mb-4">How to use tugende app</h5>
          <p> By using Tugende app it is easy to get the information about availability of buses(vacant places, vacant seats,reminder of departure hour and other related information.) according to your destination and departure.</p>
     <p>  as effect ,it is easy  to create account and login to be able to buy and book  a ticket without moving from where you are and without wasting time to go to the bus station.</p>
  
        </div>
     

        <hr className="clearfix w-100 d-md-none"/>

       
        <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

         
          <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

          <ul className="list-unstyled">
            <li>
              <p>
                <a href="#!">PROJECTS</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#!">ABOUT US</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#!">BLOG</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#!">AWARDS</a>
              </p>
            </li>
          </ul>

        </div>
       

        <hr className="clearfix w-100 d-md-none"/>

        
        <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

          <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

          <ul className="list-unstyled">
            <li>
              <p>
                <i className="fa fa-home mr-3"></i> Kigali, Rwanda</p>
            </li>
            <li>
              <p>
                <i className="fa fa-envelope mr-3"></i> teaminganji@gmail.com</p>
            </li>
            <li>
              <p>
                <i className="fa fa-phone mr-3"></i> +25078655383</p>
            </li>
            <li>
              <p>
                <i className="fa fa-print mr-3"></i> +250783154470</p>
            </li>
          </ul>

        </div>
        

        <hr className="clearfix w-100 d-md-none"/>

       
        <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

          
          <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

          <a type="button" className="btn-floating btn-fb">
            <i className="fa fa-facebook"></i>
          </a>
          
          <a type="button" className="btn-floating btn-tw">
            <i className="fa fa-twitter"></i>
          </a>
          
          <a type="button" className="btn-floating btn-gplus">
            <i className="fa fa-google-plus"></i>
          </a>
         
          <a type="button" className="btn-floating btn-dribbble">
            <i className="fa fa-dribbble"></i>
          </a>

        </div>
        

      </div>
   
    </div>
    

 
    <div className="footer-copyright text-center py-3">© 2018 Copyright:>
      <a href="www.inganji.com">inganji.com</a>
    </div>
    

  </footer>
     );
  }
}