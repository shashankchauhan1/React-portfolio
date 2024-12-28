import React from 'react'
import './App.css'  // importing the css
import 'bootstrap/dist/css/bootstrap.min.css';  // importing the bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // importing the bootstrap js
import pic from './assets/pic.jpeg'  // importing the image name, path

function App() {
  // const name="shashank chauhan";
  return (
    // <> </> these are the fragments in which we can wrap all the data and send because we can only return a single thing.
    // {/* <h1 className='name'>This is {name}</h1>   this is called expression embedding {Variable} */}
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 col-md-8 col-lg-3 mx-auto mt-3 sidebar" style={{ backgroundColor: '#1f1d1d', borderRadius: '40px' }}>
            <div className="row leftBox"><img className='image mt-3' style={{ borderRadius: '50%' }} src={pic} alt="" />
              <h4 className='text' style={{ textAlign: 'center' }}><strong>Shashank Chauhan</strong></h4><br />
              <h6 className='text' style={{ textAlign: 'center' }}><b>Web Developer</b></h6>
              <br /><br />
              <ul>
                <li>
                  <h6><i className="fa-regular fa-envelope"></i>   <b>Email: </b></h6>
                  <p>shashankchauhan134@gmail.com</p>
                </li>

                <li>
                  <h6><i className="fa-solid fa-phone"></i>   <b>Contact no: </b></h6>
                  <p>(+91) 9015159394</p>
                </li>

                <li>
                  <h6><i className="fa-brands fa-instagram"></i>   <b>Instagram:</b></h6>
                  <p>@shashank_570</p>
                </li>

                <li>
                  <h6><i className="fa-solid fa-location-dot"></i>   <b>Location: </b></h6>
                  <p>San Francisco, US</p>
                </li>
              </ul>

            </div>

          </div>

          <div className="col-11 col-lg-8 mx-auto mt-3 rightBox" style={{ backgroundColor: '#1f1d1d', borderRadius: '20px' }}>
          <div className="row mt-3">
      <nav className="navbar navbar-expand-lg" style={{ height: '8vh', color: 'white', borderRadius: '20px', backgroundColor: '#1f1d1d' }}>
        <div className="container-fluid">
          <h4 className="navbar-brand ms-2 ms-lg-5 mt-2" style={{ color: 'white' }}><b>About Me</b></h4>

          {/* Toggler Button for Mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ borderColor: 'white' }}>
            <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{backgroundColor: '#1f1d1d' , border:'1px solid white', borderRadius:'20px'}}>
              <li className="nav-item">
                <a className="nav-link" href="#about" style={{ color: 'white' }}>About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume" style={{ color: 'white' }}>Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" style={{ color: 'white' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

            {/* slider */}
            <div className="row mt-4">
              <div className="col-2 col-lg-2 "><div className="slider"> </div></div>
            </div>

            {/* About me */}

            <div className="row mt-4 mt-lg-2">
              <div className="col-12 col-lg-11 ms-lg-5">
                <h5 className='aboutMe'>
                  I'm Shashank, a Bachelor's of Engineering student at Chitkara University with a passion for designing unique websites.
                  I'm dedicated to delivering high-quality, user-friendly websites that exceed expectations.
                </h5>
              </div>
            </div>

            {/* Technical skills */}

            <div className="row aboutMe mt-3 ">
              <div className="col-11 ms-lg-5">
                <h5>
                  <b>Technical Skills :</b><br />
                  <div className='ts '>
                    <span><a href="https://www.w3schools.com/html/">HTML</a></span>.
                    <span><a href="https://www.w3schools.com/css/">CSS</a></span>.
                    <span><a href="https://getbootstrap.com/">BOOTSTRAP</a></span>.
                    <span><a href="https://www.w3schools.com/js/">JAVASCRIPT</a></span>.
                    <span><a href="https://react.dev/">REACT</a></span>.
                    <span><a href="https://www.geeksforgeeks.org/java/">JAVA</a></span>.
                    <span><a href="https://www.w3schools.com/cpp/">C++</a></span>.
                    <span><a href="https://www.w3schools.com/MySQL/default.asp">MYSQL</a></span>
                    </div>
                </h5>
              </div>
            </div>

            {/* Projects */}

            <div className="row mt-2">
              <div className="col-11 col-lg-11 mx-auto ms-md-2 ms-lg-5 projects">
                <h4 className='about'><b>Projects :</b></h4>
              </div>
            </div>

            {/* slider */}

            <div className="row mt-2 mt-lg-4">
              <div className="col-2"><div className="slider"> </div></div>
            </div>

            {/* Projects links   */}

            <div className="work mt-4 mt-lg-1">

              <div className="work1">
                <h5><i className="fa-solid fa-circle-half-stroke"></i> <a style={{ color: 'white' }} href="">project</a></h5>
              </div>

              <div className="work2">
                <h5><i className="fa-solid fa-circle-nodes"></i>  <a style={{ color: 'white' }} href="">project</a></h5>
              </div>

              <div className="work3">
                <h5><i className="fa-solid fa-pen-nib"></i>  <a style={{ color: 'white' }} href="">project</a></h5>
              </div>

              <div className="work4">
                <h5><i className="fa-solid fa-gamepad"></i> <a style={{ color: 'white' }} href="">project</a></h5>
              </div>

              <div className="work5">
                <h5><i className="fa-regular fa-clock"></i> <a style={{ color: 'white' }} href="">project</a></h5>
              </div>

              <div className="work6">
                <h5><i className="fa-solid fa-bag-shopping"></i> <a style={{ color: 'white' }} href="">project</a></h5>
              </div>

            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default App;