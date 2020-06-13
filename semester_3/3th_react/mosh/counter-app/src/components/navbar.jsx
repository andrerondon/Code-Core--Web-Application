import React, { Component } from 'react';  


// stateless Functional Component

const NavBar = (props) => {
    return (  
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#"
            >
                Navbar 
            <span className="baddge badge-pill badge-secondary">
                {props.totalCounters}
            </span>
            </a>
        </nav>
    );

}


export default NavBar ;