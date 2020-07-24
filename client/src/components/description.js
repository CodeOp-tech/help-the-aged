import React, { Component } from "react";
import "./description.css";
import DESC2 from '../DESC2.png';

export default class Description extends Component {
  render() {
    return (
      <div>
        <img src={DESC2} classname="Desc__HH" height="375"/>
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
