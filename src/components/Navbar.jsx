import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movies from './Movies';
import Index from './Index';
import MaterialIcon, {colorPalette} from 'material-icons-react';


import 'bootstrap/dist/css/bootstrap.css';
import './css/Navbar.css';


function Series() {
  return <h2>Series</h2>;
}

function Memberships() {
  return <h2>Member</h2>;
}

function SignIn() {
  return <h2>Sign In</h2>;
}

function SignUp() {
  return <h2>Sign up</h2>;
}

class Navbar extends Component {
  render() {
    
    return (
      <Router>
        <header className="container-fluid">
          <nav className="navbar navbar-expand-lg fixed-top navbar-light">
            <a className="navbar-brand" href="/">CoolPlay</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav  ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies/">Películas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/series/">Series</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/memberships/">Membresías</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup/">Registrarse</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link login" to="/signin/">Iniciar sesión</Link> 
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Route path="/" exact component={Index} />
        <Route path="/movies/" component={Movies} />
        <Route path="/series/" component={Series} />
        <Route path="/memberships/" component={Memberships} />
        <Route path="/signup/" component={SignUp} />
        <Route path="/signin/" component={SignIn} />
      </Router>
    );
  }
}

export default Navbar;