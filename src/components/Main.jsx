import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './css/Main.css';

class Main extends Component {
  render() {
    
    return (
      <div className="bg-main">
        <div className="bg-transparent">
          <div className="container content">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title-content">CoolPlay</h1>
                <h4>El mejor sitio para ver tus películas y series favoritas</h4>
                <br />
                <br />
                <a className="btn btn-primary button-start" href="#top-info">¡Empezar ya!</a>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;