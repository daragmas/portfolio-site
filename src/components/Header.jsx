import React from "react"
import { NavLink } from "react-router-dom"

const Header = () =>{
    let activeStyle = {
        textDecoration: "underline"
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <NavLink 
                    to='/'
                    style={
                        ({ isActive }) => isActive ? activeStyle : undefined} >
                            Nate's Site
                </NavLink>
                </div>
                
            < div className = "collapse navbar-collapse" id = "navbarResponsive" >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink
                            to='/'
                            style={
                                ({ isActive }) => isActive ? activeStyle : undefined} >
                            Home
                        </NavLink>
                        {/* <a class="nav-link navtext" href="{{ url_for('home') }}">Home</a> */}
                    </li>
                    
                    <li className="nav-item">
                        <NavLink
                            to='/portfolio'
                            style={
                                ({ isActive }) => isActive ? activeStyle : undefined} >
                            Portfolio
                        </NavLink>
                        {/* <a class="nav-link navtext" href="{{ url_for('portfolio') }}">Portfolio</a> */}
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to='/skills'
                            style={
                                ({ isActive }) => isActive ? activeStyle : undefined} >
                            Skills
                        </NavLink>
                        {/* <a class="nav-link navtext" href="{{ url_for('contact') }}">Contact</a> */}
                    </li>
                    
                    {/* <li className="nav-item">
                        <NavLink
                            to='/contact'
                            style={
                                ({ isActive }) => isActive ? activeStyle : undefined} >
                            Contact
                        </NavLink>
                        {/* <a class="nav-link navtext" href="{{ url_for('contact') }}">Contact</a> */}
                    {/*</li> */}
                </ul>
            </div >
        </nav>

    )
}

export default Header

