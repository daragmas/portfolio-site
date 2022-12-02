import React from "react"
import { NavLink } from "react-router-dom"

const Header = () =>{
    let titleStyle = {
        color: "white",
        fontSize: "1.5rem",
        margin: "0 20%",
        textDecoration: "none",
    }

    let normalStyle = {
        color: "white",
        textDecoration: "none",
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container title">
                <NavLink 
                    to='/'
                    style={titleStyle} >
                            Nathaniel Wolf
                </NavLink>
                </div>
                
            < div className = "collapse navbar-collapse" id = "navbarResponsive" >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink
                            to='/'
                            style={normalStyle} >
                            Home
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink
                            to='/portfolio'
                            style={normalStyle} >
                            Portfolio
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to='/skills'
                            style={normalStyle} >
                            Skills
                        </NavLink>
                    </li>
                    
                    {/* <li className="nav-item">
                        <NavLink
                            to='/contact'
                            style={
                                ({ isActive }) => isActive ? activeStyle : undefined} >
                            Contact
                        </NavLink>
                    {/*</li> */}
                </ul>
            </div >
        </nav>

    )
}

export default Header

