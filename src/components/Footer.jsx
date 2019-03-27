import React, { Component } from 'react';

import './css/Footer.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    //this.state = { 
    //  checking:false
    // };

    //this.renderIcon = this.renderIcon.bind(this);
  }

  render() {
    
    return (
      <div className="">
        <br />
        <div class="container foot">
            <div class="row">
                <div class="col-md-6">
                    <h6>Información adicional</h6>
                    <ul>
                        <li>Preguntas frecuentes</li>
                        <li>Registrarse</li>
                        <li>Contáctanos</li>
                        <li>Política de privacidad</li>
                        <li>Términos y condiciones de uso</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h6>Redes sociales</h6>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div class="divider"></div>
        <footer class="copy">
            <br />
            <div class=" text-center">
                &copy; CoolPlay 2018
            </div>    
            <br />
        </footer>
      </div>
    );
  }
}

export default Footer;

