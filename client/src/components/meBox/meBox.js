import React from "react";

const MeBox = ( props ) => (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
        <br />
        <img src="/w3images/avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:60}} />
        <span className="w3-right w3-opacity">date</span>
        <h4>John Doe</h4>
        <br />
        <hr className="w3-clear" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
              </p>
        <div className="w3-row-padding" 
        style={{margin:0 -16}}
        >
            <div className="w3-half">
            <br/>
                <img src="/w3images/lights.jpg" style={{width:100}} alt="Northern Lights" className="w3-margin-bottom" />
            </div>
            <div className="w3-half">
            <br/>
                <img src="/w3images/nature.jpg" style={{width:100}}  alt="Nature" className="w3-margin-bottom" />
            </div>
        </div>

        <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
            <i className="fa fa-comment"></i> &nbsp;Comment</button>
    </div>
)
export default MeBox;