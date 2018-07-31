import React from 'react';
import classNames from 'classnames';
import '../components/Footer';
function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} style={{color:"#3b97ff"}}>
    <h1 style={{textAlign:"center"}}>  a tutorial of how tugende app works</h1>
    <video style={{margin:"auto"}} width="320" height="240" controls >
  <source src="Final/Final.mp4" type="video/mp4"/>
  
</video>

    
      
<h1 style={{ textAlign:"center" ,color:"darkblue"}}> Book and Buy Your Ticket Easily!!!!!</h1>

    
    

    

    </div>
);
}

export default Home;
