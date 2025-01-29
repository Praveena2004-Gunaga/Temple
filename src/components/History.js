import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="container" >
        <div className="card">
    <div className="card-header" style={{backgroundColor:"#800000", color:"#F8F0E3" , display:"flex"}}>
     <b>History</b>
    </div>
    <div className="card-body" style={{backgroundColor:"#F8F0E3"}}>
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" className="btn" style={{backgroundColor:"#800000"}}>Go somewhere</a>
    </div>
  </div></div>
    
  );
};

export default History;
