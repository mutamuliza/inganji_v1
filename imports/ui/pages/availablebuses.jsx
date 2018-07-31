import React from 'react';

function availablebuses() {
  return (
    <div className='availablebuses' style={{color:"#3b97ff"}}>
      <h1></h1>
      <form className="form-horizontal">
  <div className="form-group">
    <label className="control-label col-sm-2">Departure:</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="text" placeholder="From:" style={{width:"295px",height:"35px", backgroundColor: "#0d3d8e",color:"#3b97ff",border:"1px solid #072860"}}/>
    </div>
  </div>
 
  
  <div className="form-group">
    <label className="control-label col-sm-2" >Destination:</label>
    <div className="col-sm-10">
      <input type="text" className="form-control"  placeholder="To:" style={{width:"295px",height:"35px" , backgroundColor: "#0d3d8e",color:"#3b97ff",border:"1px solid #072860"}}/>
    </div>
  </div>

  <div className="form-group">
    <label className="control-label col-sm-2" >Date:</label>
    <div className="col-sm-10">
      <input type="date" className="form-control"  placeholder="date:" style={{width:"295px",height:"35px", backgroundColor: "#0d3d8e",color:"#3b97ff",border:"1px solid #072860"}}/>
    </div>
  </div>

  <div className="form-group">
    <label className="control-label col-sm-2" >hour:</label>
    <div className="col-sm-10">
      <input type="time" className="form-control"  placeholder="date:" style={{width:"295px",height:"35px", backgroundColor: "#0d3d8e",color:"#3b97ff",border:"1px solid #072860"}}/>
    </div>
  </div>
  
</form>









    </div>
  );
}

export default availablebuses;