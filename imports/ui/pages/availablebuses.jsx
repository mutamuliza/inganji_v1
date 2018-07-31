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

<div className="container">
              
  <table className="table table-bordered">
    <thead>
      <tr style={{ backgroundColor: "#001737",color:"#3b97ff"}}>
        <th>DESTINATION</th>
        <th>AGENCY</th>
        <th>FARE</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MUHANGA</td>
        <td>VOLCANO</td>
        <td>1030</td>
       
      </tr>
      <tr>
        <td>MUHANGA</td>
        <td>HORIZON</td>
        <td>1030</td>
        
      </tr>
      <tr>
        <td>MUHANGA</td>
        <td>KIVU BELT</td>
        <td>1030</td>
        
      </tr>
      <tr>
      <td>MUHANGA</td>
        <td>stella</td>
        <td>1030</td>
        
        </tr>
    </tbody>
  </table>
</div>








    </div>
  );
}

export default availablebuses;