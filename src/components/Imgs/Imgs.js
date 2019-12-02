import React from 'react';
import './Imgs.css';

import Carousel from 'react-bootstrap/Carousel';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function Imgs() {
    return (
        <div style={{ paddingBottom: "20px" }}>
            <Carousel className="cardS">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/facial.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Facial Recognition Technology</h3>
                        <p>The most powerful and secure way to secure your home or office</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/august.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Design</h3>
                        <p>The most elegant smart lock available</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/august2.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Multiplatform</h3>
                        <p>Use all the tools available for maximum security</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
        </div>
    );

}
export default Imgs;