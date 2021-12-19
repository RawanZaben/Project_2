import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import "./Home.css"

export default function Navbar() {
    return (
     <div>
         
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/"> Directory</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                        </div>
                        <div className="main-row-text">
                            <h1>دليل للمستوصفات</h1>
                            <p> لستهيل الوصول للخدمات العلاجية</p>
                            <Link to={"/Login"} className="btn">
                            لدخول أضغط هنا
                            </Link>
                        </div>
                    </div>
            </section>

  {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
    <div className="container">
      <a style={{fontSize:"30px"}} className="navbar-brand fw-bold text-warning" to="#">Clinic</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/home"> <i className="fa fa-home fa-2x text-info"></i> <span className="visually-hidden">(current)</span></NavLink>
          </li>
        
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/dispensaries"><i class="fas fa-calendar-check text-info fa-2x"> </i></NavLink>
          </li>
        
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/dates"> <i class="fas fa-clock text-info fa-2x"></i></NavLink>
          </li>
          
        </ul>
        <div className="d-flex my-2 my-lg-0">
        <input onChange={props.fun} className="form-control me-sm-2" type="text" placeholder="Search" />
        <button onClick={props.myFunction} className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </div>
            
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4" to="/login"> Log in  <i class="fas fa-user-check text-light"></i> </NavLink>
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4" to="/rigister"> Register  <i class="fas fa-user-plus"></i> </NavLink>
        
    </div>
    </div>
</nav> */}
</div>

    )
}
