import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class CertificationCarousel extends React.Component {
    render() {
        return (
            <Carousel autoPlay dynamicHeight >
                <div  className="alignDiv">
                    <img src="images/AWS.jpg" />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
                <div >
                    <img src="images/AWS.jpg"  />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
                <div >
                    <img src="images/AWS.jpg"  />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
            </Carousel>
        );
    }
}

ReactDOM.render(<CertificationCarousel  />, document.getElementById('CertificationCarousel-container'));
