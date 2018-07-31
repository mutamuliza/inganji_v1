import React from 'react';
import classNames from 'classnames';
import '../components/Footer';
function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} style={{color:"#3b97ff"}}>
    <h1 style={{textAlign:"center"}}>  a tutorial of how tugende app works</h1>
    <div className="embed-responsive embed-responsive-16by9" style={{ width:"50%",height:"90px",margin: "0 auto" }}>
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
     

    
      
<h1 style={{ textAlign:"center" ,color:"darkblue"}}> Book and Buy Your Ticket Easily!!!!!</h1>

    
    

    

    </div>
);
}

export default Home;
