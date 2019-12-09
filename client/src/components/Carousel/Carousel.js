import React from "react";
import "./Carousel.css";
/* Image Carousel component -> in the event of sttoring more images change this component and pass in a map => */

const Carousel = props => (
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-ride="carousel"
    className="car"
  >
    <div class="carousel-inner">
      <div class="carousel-item">
        <img class="d-block w-100" src="/facial.jpg" alt="Third slide" />
      </div>
      <div class="carousel-item active">
        <img class="d-block w-100" src="/august.jpg" alt="First slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="/august2.png" alt="Second slide" />
      </div>
    </div>
  </div>
);

export default Carousel;
