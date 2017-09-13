import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class SkillCarousel extends React.Component {
    render() {
        return (
            <Carousel dynamicHeight autoPlay width="700px" className="alignDiv" >
                <div >
                    <img src="images/DotNet.jpg" />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
                <div >
                    <img src="images/SQL.png"  />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
                <div >
                    <img src="images/Javascript.png"  />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
                <div >
                    <img src="images/Node.png"  />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
                <div >
                    <img src="images/PWA.png"  />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
                <div >
                    <img src="images/React.png"  />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
                <div >
                    <img src="images/AWS.png"  />
                    <p className="legend">Amazon Web Services - Solution Architect Associate</p>
                </div>
            </Carousel>
        );
    }
}

ReactDOM.render(<SkillCarousel />, document.getElementById('SkillCarousel-container'));
