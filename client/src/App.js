import React, { Component } from "react";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Description from "./components/description";
import Helperdetails from "./components/helperdetails.js";
import Mymap from "./components/mymap";
import Logo from "./hhlogoreviewbold.png";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import ReactMapboxGl from "react-mapbox-gl";
import ICONS1 from './ICONS1.png';

export default class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <Helperdetails />
          <ReactMapboxGl />
          <div className="App">
            <div className="App__Aside">
              <img
                src={Logo}
                alt="Helping Hands Logo"
                width="600px"
                className="hhlogo"
              />
              <Route
                className="Main_Page_Left"
                exact
                path="/"
                component={Description}
              ></Route>

              <NavLink to="/secondpage">
                <div className="BM__div">
                  <button className="Browse__Map">Find Helpers Near You</button>
                </div>
              </NavLink>
              <Route
                className="Map__Page"
                path="/secondpage"
                component={Mymap}
              ></Route>
              <div className="Icons__HP">
                <br/><br/>
                <img src={ICONS1} classname="Desc__HH" height="125"/>
              </div>
            </div>

            <div className="App__Form">
              <Route exact path="/" component={Signup}></Route>
              <Route
                className="HelperProfiles"
                exact
                path="/"
                component={Helperdetails}
              ></Route>
            </div>
          </div>

          <div className="Footer">
            <p className="copyrights">
              @ 2020. Help The Aged. Created by Anita Noemi Szabo and Albane
              Chepeau.
            </p>
          </div>
        </div>
      </Router>
    );
  }
}
