import React, { Component } from "react";
import "./description.css";
import DESC3 from '../DESC3.png';
import MISSION from '../MISSION.png';

export default class Description extends Component {
  render() {
    return (
      <div>
        <br/><br/><br/>
        <h1>Need help with an elderly loved one?</h1>
        {/* <img src={DESC3} classname="Desc__T" height="130"/> */}
      <div className="Icons__HP">
        <br/><br/>
        <img src={MISSION} classname="Desc__HH" height="450"/>
      </div>
      <br/><br/><br/><br/><br/>
        {/* <div className="Desc_Main">
          <div className="Desc__Title">
          <h2>Need help for an elderly loved one?</h2>
          </div>
          <br/><br/><br/><br/>
          <div className="Desc__Text">
          <h3>Meet local volunteers ready to help.</h3>
          <h3>From gardening to grocery shopping, Helpers are here to support you and your family.</h3>
          </div>
        </div> */}

      </div>
    );
  }
}