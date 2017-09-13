import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class WallPaintComponent extends React.Component {
    render() {
        return (
          <div class="bg">

          <div class="bg-wall">
            <ul>
              <li><span></span></li>
              <li><span>test</span></li>
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>

            </ul>
          </div>
          <div class="side-wall">
            <ul class="perspective">
              <li>test</li>
              <li>test</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

            </ul>
          </div>
        </div>
        );
    }
}

ReactDOM.render(<WallPaintComponent  />, document.getElementById('wallpaint-container'));
