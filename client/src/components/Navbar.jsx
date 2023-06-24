import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <a className="navbar-brand" href="/"><div className='logo'><h1>Leave<span id="colo">Ease</span></h1></div></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Rules</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign In/Sign Up
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Hod">HOD</a></li>
            <li><a className="dropdown-item" href="/Warden">Warden</a></li>
            <li><a className="dropdown-item" href="/Mentor">Mentor</a></li>
            <li><a className="dropdown-item" href="/student">Student</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar