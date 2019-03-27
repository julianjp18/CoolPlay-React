import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import './css/ContactUs.css';

class ContactUs extends Component {

  constructor(props) {
    super(props);
    //this.state = { 
    //  checking:false
    // };

    //this.renderIcon = this.renderIcon.bind(this);
  }

  render() {
    
    return (
      <div className="contact">
        <br />
        <br />
        <h2 className="text-center">Contáctanos</h2>
        <p className="text-center">Escribenos para más información, con gusto te responderemos todas tus dudas</p>
        <div className="container">
        <form>
          <div class="form-group">
            <label htmlFor="name"><MaterialIcon color="#ffff" icon="person" /> Nombre</label>
            <input type="text" class="form-control" id="name" placeholder="Nombre" />
          </div>
          <div class="form-group">
            <label htmlFor="email"><MaterialIcon color="#ffff" icon="email" /> Correo electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div class="form-group">
            <label htmlFor="exampleFormControlTextarea1"><MaterialIcon color="#ffff" icon="border_color" /> Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="form-group text-center center-block">
            <button className="btn btn-primary" type="submit">Enviar </button>
          </div>
        </form>
        </div>
        <br />
      </div>
    );
  }
}

export default ContactUs;