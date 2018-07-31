import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <nav className="navbar navbar-expand-sm bg-light" style={{color: '#3b97ff',marginBottom:'0px',height:"400px"}}>
  <img className="navbar-brand" src={"Inganji logo.png"} style={{width:"90px",height:"80px"}}/>
  <div>
  <div>
 
 <ul className="nav navbar-nav navbar-right" style={{fontSize:'12px'}}>
   <li className="nav-item">
     <a className="nav-link" href="/buyticket" style={{marginTop:'2px',marginBottom:'2px'}}>Buy Ticket</a>
   </li>
   
  <li className="nav-item">
<div><div style={{float:"left"}}> <a className="nav-link" href="">Kinya</a></div><div style={{float:"left"}}><img src={"rwanda.png"} alt="rwanda" style={{width:"20px",height:"20px"}}/></div> </div>
   </li>
   <li className="nav-item">
    <div><div  style={{float:"left"}}><a className="nav-link" href="">Eng</a></div><div style={{float:"left"}}><img src={"united-kingdom.png"} alt="english" style={{width:"20px",height:"20px"}}/></div></div>
   </li>
 
   <li className="nav-item">
     <div><div  style={{float:"left"}}><a className="nav-link" href="">Fre</a></div><div style={{float:"left"}}><img src={"france.png"} alt="french" style={{width:"20px",height:"20px"}}/></div></div>
   </li>
   <li className="nav-item" style={{paddingTop:'7px',paddingRight:'25px'}} >
 <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </li>
   </ul>
   </div>
 
<ul className="nav navbar-nav navbar-right">
  <li className="nav-item">
    <a className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/services">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/contact">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/about">About us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" ><LoginButtons align='left' /></a>
  </li>
    
    </ul>
  </div>

  <a className="navbar-brand" href="#">DOWNLOAD</a>
  



</nav>
        

<h3  style={{color:"darkblue"}}>Fill in to know availability of buses</h3>

     <div className="form-group">
     <table>

       <tbody style={{backgroundColor:" linear-gradient(171deg, #092a5d 0%, #123061 0%, #000517 100%",margin:"auto", alignItems:"center"}}>
         <tr  style={{alignItems:"center"}}>
         <td>
         <select style={{ background:" #0a347a", width:"229px",height:"60px",color:"#3b97ff"}}>
         <option>From:</option>
           <option>Kigali</option>
           <option>Kamonyi</option>
           <option>Gakenke</option>
           <option>Rulindo</option>
           <option>Bugesera</option>
           <option>Muhanga</option>
           <option>Nyamagabe</option>
           <option>Huye</option>
            <option>Gisagara</option>
            <option>Burera</option>
           </select>
           </td>

           <td>
         <select style={{ background:" #0a347a", width:"229px",height:"60px",color:"#3b97ff"}}>
         <option>To:</option>
           <option>Kamonyi</option>
           <option>Kigali</option>
           <option>Gakenke</option>
           <option>Rulindo</option>
           <option>Bugesera</option>
           <option>Muhanga</option>
           <option>Nyamagabe</option>
           <option>Huye</option>
            <option>Gisagara</option>
            <option>Burera</option>
           </select>
           </td>
        <td><input className="form-control" id="usr" placeholder="Date:MM/DD/YYY" type="date" style={{width:"229px",height:"60px",backgroundColor:" #0a347a",color:"#3b97ff"}}/></td>
    

       <td> <input type="time" className="form-control" id="usr" placeholder=" hour:" style={{width:"229px",height:"60px",backgroundColor:" #0a347a",color:"#3b97ff"}}/></td>

            <td><button href="available buses.jsx" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit" style={{width:"130px",height:"40px",background:"skyblue"}}>Check for buses </button></td>
             </tr>
         </tbody>
       </table>
       
         </div>




      </header>
    );
  }
}