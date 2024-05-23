import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Vistify.png';
import NavIcon from '../assets/iconfinder_menu-alt_134216.png';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isMenuOpen: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    render() {
        return (
            <div className='navbar-container'>
                <div className="navbar-responsive">
                    <div className="navbar-collapse">
                        <Link to="/">
                            <img src={Logo} alt="logo" className="navbar-logo-small" />
                        </Link>
                        <img src={NavIcon} alt="NavIcon" onClick={this.toggleMenu} className="navbar-icon" />
                    </div>
                    <div className={this.state.isMenuOpen ? "navbar-links" : "navbar-links-hidden"}>
                        <Link to="/">Home</Link>
                        <Link to="/Listings">Listings</Link>
                        <Link to="/Sellpage">Sell</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/sign">Sign in</Link>
                    </div>
                </div>
                <div className='navbar-group'>
                    <div className='navbar-items'>
                        <Link to="/"><img src={Logo} className='navbar-logo-large' alt="logo" /></Link>
                        <Link to="/Listings"><button className='navbar-button'>Listings</button></Link>
                        <Link to="/Sellpage"><button className='navbar-button'>Sell</button></Link>
                        <Link to="/contact"><button className='navbar-button'>Contact Us</button></Link>
                    </div>
                    <div className='navbar-login'>
                        <Link to="/login">
                            <button className='navbar-button' style={{ backgroundColor: "#e7e7e7" }}>Login</button>
                        </Link>
                        <Link to="/sign">
                            <button className='navbar-register-button'>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
