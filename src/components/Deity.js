import React from 'react'
import { Link } from "react-router-dom";

const Deity = () => {
  return (
    <div className='container'style={{padding:"2rem"}} >
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="./images/pic2.jpg" className="card-img-top" alt="..." style={{height:"20rem"}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to="/site" className="btn" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"}}>Go somewhere</Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="./images/pic3.jpg" className="card-img-top" alt="..." style={{height:"20rem"}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to="/site" className="btn" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"}}>Go somewhere</Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="./images/pic6.jpg" className="card-img-top" alt="..." style={{height:"20rem"}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <Link to="/site" className="btn" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"}}>Go somewhere</Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="./images/pic5.jpg" className="card-img-top" alt="..." style={{height:"20rem"}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to="/site" className="btn" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"}}>Go somewhere</Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Deity
