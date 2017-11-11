import React, { Component } from 'react';
import '../../css/carousel.css';

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel col-xs-12">
        <Slider {...settings}>{this.props.children}</Slider>
      </div>
    );
  }
}

export default Carousel;
