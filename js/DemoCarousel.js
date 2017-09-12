import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel autoPlay width="700px"  >
                <div class="alignDiv">
                    <img src="images/AWS_CERT.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div class="alignDiv">
                    <img src="images/Certified.jpg"  />
                    <p className="legend">Legend 2</p>
                </div>
                <div class="alignDiv">
                    <img src="images/SAA_tag.jpg"  />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

ReactDOM.render(<DemoCarousel />, document.getElementById('carousel-container'));
