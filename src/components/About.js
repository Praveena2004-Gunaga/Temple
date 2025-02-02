import React from 'react'

const About = () => {
  return (
    <div >
  <div className='container' id="siteAbout" >
    <div className="my-4 py-5">
      <div className="card border-2 border-danger rounded-3 bg-light" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="./images/pic5.jpg" className="img-fluid rounded-start" alt="About Us" />
          </div>
          <div className="col-md-8"  style={{background: "linear-gradient(to right,#960019,rgb(198, 98, 115)"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{color:"#F8F0E3"}}>About Us</h5>
              <p className="card-text" style={{color:"#F8F0E3"}} >This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text" style={{color:"#F8F0E3"}}>
                <small  style={{color:"#F8F0E3"}}>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About
