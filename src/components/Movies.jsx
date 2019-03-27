import React, { Component } from 'react';
import Gallery from './Gallery';
import Footer from './Footer';

import './css/Movies.css';

class Movies extends Component {
  render() {
    
    return (
      <div className="container-movies">
        <div className="content-movies text-center">
          <h1>Películas</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img className="image" src={require("./1.jpg")} alt=""/>
                  <div className="card-content">
                    <a className="card-title" href="">The best</a>
                    <p className="card-descrip">
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img className="image" src={require("./1.jpg")} alt=""/>
                  <div className="card-content">
                    <a className="card-title" href="">The best</a>
                    <p className="card-descrip">
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img className="image" src={require("./1.jpg")} alt=""/>
                  <div className="card-content">
                    <a className="card-title" href="">The best</a>
                    <p className="card-descrip">
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img className="image" src={require("./1.jpg")} alt=""/>
                  <div className="card-content">
                    <a className="card-title" href="">The best</a>
                    <p className="card-descrip">
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img className="image" src={require("./1.jpg")} alt=""/>
                  <div className="card-content">
                    <a className="card-title" href="">The best</a>
                    <p className="card-descrip">
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img className="image" src={require("./1.jpg")} alt=""/>
                  <div className="card-content">
                    <a className="card-title" href="">The best</a>
                    <p className="card-descrip">
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Movies;