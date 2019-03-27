import React, { Component } from 'react';
import Main from './Main';
import Gallery from './Gallery';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ContactUs from './ContactUs';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './css/Index.css';

class Index extends Component {

  constructor(props) {
    super(props);
    //this.state = { 
    //  checking:false
    // };

    //this.renderIcon = this.renderIcon.bind(this);
  }

  subWhatIs(){
    return (
    <div className="container cwhat-is" id="what-is">
        <br />
        <div className="row">
            <div className="col-md-12 text-center">
                <h2 className="">¿Qué es <strong>CoolPlay</strong>?</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi dolorum quasi vel, provident quibusdam et explicabo laboriosam fuga, ullam sit excepturi corrupti. Nulla fugit neque recusandae voluptates ratione non.</p>
                <br />
                <a className="btn button-membership" href="">Adquiere una membresía</a>
            </div>
        </div>
    </div>
    );
  }

  subTopSM(){
    return(
      <div className="container top-info" id="top-info">
        <br />
        <div className="row">
            <div className="col-md-8 text-left">
                <h2 className="">Top películas y series</h2>
            </div>
            <div className="col-md-4 text-right">
                
            </div>
        </div>
      <br/>
    </div>
    );
  }

  subMovies(){
    return(
      <div>
        <br/>
        <div className="divider"></div>
        <br/>
        <div className="container movies-recents">
            <div className="row">
                <div className="col m12 left-align">
                    <h4 className=""><a className="title-link" href=""><MaterialIcon color="#009688" icon="local_movies" size="medium" /> Películas agregadas recientemente <MaterialIcon color="#009688" icon="chevron_right" size="medium" /></a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi vitae rerum! Earum iste, dolore minus mollitia, dolorem vel suscipit, distinctio omnis voluptas sed quasi facilis neque doloremque animi explicabo.</p>
                </div>
            </div>
        </div>
        <br/>
        <Gallery />
        <br />
        <section className="categories">
            <div className="container">
                <h5>Contamos con las mejores categorias de películas para que disfrutes tus días frente a la pantalla de la mejor manera:</h5>
                <br />
                <div className="row center-align">
                    <div className="col s12 m3 l3">
                        <a className="btn-grad grad1 hoverable" href="">Comedia</a>
                    </div>
                    <div className="col s12 m3 l3">
                        <a className="btn-grad grad2 hoverable" href="">Documental</a>   
                    </div>
                    <div className="col s12 m3 l3">
                        <a className="btn-grad grad3 hoverable" href="">Infantil</a>
                    </div>
                    <div className="col s12 m3 l3">
                        <a className="btn-grad grad4 hoverable"  href="">Ver más</a>
                    </div>
                </div>
            </div>
        </section>
        <br />
      </div>
    );
  }



  render() {
    
    return (
      <div className="">
        <Main />
        {this.subWhatIs()}
        {this.subTopSM()}
        <Gallery />
        {this.subMovies()}
        <br />
        <div className="divider"></div>
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Index;