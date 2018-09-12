import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const NavBar = () => {
    return(
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <button className="btn btn-outline-success" type="button"> <Link to = "/" > Enter Message</Link> </button>
                </form>
            </nav>
    );
};

export default NavBar;