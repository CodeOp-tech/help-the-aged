import React, { Component } from 'react'
import Signin from './components/signin'
import Signup from './components/signup'
import Description from './components/description'
import Helperdetails from './components/helperdetails.js'
import Mymap from './components/mymap'
import Logo from './hhlogoreviewbold.png'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import './App.css';
import ReactMapboxGl from 'react-mapbox-gl';

export default class App extends Component {

  render() {
    return (
      <Router basename="/">
        <div>
<Helperdetails/>
<ReactMapboxGl/>
          <div className="App">
            <div className="App__Aside">
              <img src={Logo} alt="Helping Hands Logo" height="100px" width="600px" className="hhlogo"/>
              <Route className="Main_Page_Left" exact path="/" component={Description}></Route>               
              <NavLink to="/secondpage"><button className="Browse__Map">Find Helpers Near You</button></NavLink>
              <Route className="Map__Page" path="/secondpage" component={Mymap}></Route>
            </div>

            <div className="App__Form">
              <Route exact path="/" component={Signin}></Route>
              <Route className="HelperProfiles" exact path="/" component={Helperdetails}></Route>
            </div>

          </div>

          <div className="Footer">
            <p className="copyrights">@ 2020. Help The Aged. Created by Anita Noemi Szabo and Albane Chepeau.</p>
          </div>  
        </div>
      </Router>
    )
  }
}


          //   {/* <div className="PageSwitcher">
          //       <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
          //       <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          //   </div> */}

          // {/* <div className="FormTitle">
          //       <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
          // </div> */}
          
