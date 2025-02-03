import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="container" id="history">
        <div className="card">
    <div className="card-header" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)", color:"#F8F0E3" , display:"flex"}}>
     <b>History</b>
    </div>
    <div className="card-body" style={{backgroundColor:"#F8F0E3"}}>
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <Link to="/siteHistory" className="btn" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"}}>Go somewhere</Link>
    </div>
  </div></div>
    
  );
};

export default History;
