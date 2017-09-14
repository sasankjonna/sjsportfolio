import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class SkillCarousel extends React.Component {
    render() {
        return (
            <Carousel autoPlay dynamicHeight>
                <div >
                    <img src="images/DotNet.jpg" />
                    <p className="legend">Microsoft .Net , MVC, WCF and REST API</p>
                </div>
                <div >
                    <img src="images/SQL.png"  />
                    <p className="legend">SQL Server development incuding SSRS and SSIS</p>
                </div>
                <div >
                    <img src="images/Javascript.png"  />
                    <p className="legend">JS and JQuery</p>
                </div>
                <div >
                    <img src="images/Node.png"  />
                    <p className="legend">NodeJS</p>
                </div>
                <div >
                    <img src="images/PWA.png"  />
                    <p className="legend">Microsoft Project server development and customizatio</p>
                </div>
                <div >
                    <img src="images/React.png"  />
                    <p className="legend">REACTJS basics</p>
                </div>
                <div >
                    <img src="images/AWS.gif"  />
                    <p className="legend">Well versed with important services offered by AWS</p>
                </div>
            </Carousel>
        );
    }
}

ReactDOM.render(<SkillCarousel />, document.getElementById('SkillCarousel-container'));
