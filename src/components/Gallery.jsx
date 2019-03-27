import React, { Component } from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import './css/Gallery.css';
import AliceCarousel from 'react-alice-carousel';

class Gallery extends Component {

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return (
      <div className="container-fluid">
        <AliceCarousel
            duration={400}
            autoPlay={true}
            startIndex = {1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={true}
            responsive={responsive}
            autoPlayInterval={4000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
        >
            
            
            <div className="content-image">
                <img src={require("./1.jpg")} className="image-carousel" alt=""/>
                <div className="descrip-image">
                    <h2 className="descrip-title"> The movie 1</h2>
                    <a className="btn btn-primary" href="">Ver más</a>
                </div>
            </div>
            <div className="content-image">
                <img src={require("./1.jpg")} className="image-carousel" alt=""/>
                <div className="descrip-image">
                    <h2 className="descrip-title"> The movie 2</h2>
                    <a className="btn btn-primary" href="">Ver más</a>
                </div>
            </div>
            <div className="content-image">
                <img src={require("./1.jpg")} className="image-carousel" alt=""/>
                <div className="descrip-image">
                    <h2 className="descrip-title"> The movie 3</h2>
                    <a className="btn btn-primary" href="">Ver más</a>
                </div>
            </div>
            <div className="content-image">
                <img src={require("./1.jpg")} className="image-carousel" alt=""/>
                <div className="descrip-image">
                    <h2 className="descrip-title"> The movie 4</h2>
                    <a className="btn btn-primary" href="">Ver más</a>
                </div>
            </div>
            <div className="content-image">
                <img src={require("./1.jpg")} className="image-carousel" alt=""/>
                <div className="descrip-image">
                    <h2 className="descrip-title"> The movie 5</h2>
                    <a className="btn btn-primary" href="">Ver más</a>
                </div>
            </div>
            <div className="content-image">
                <img src={require("./1.jpg")} className="image-carousel" alt=""/>
                <div className="descrip-image">
                    <h2 className="descrip-title"> The movie 6</h2>
                    <a className="btn btn-primary" href="">Ver más</a>
                </div>
            </div>
        </AliceCarousel>
      </div>
    );
  }
}

export default Gallery;