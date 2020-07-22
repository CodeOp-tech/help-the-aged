import React, { Component } from 'react'
import {Map,TileLayer, Marker, Popup} from 'react-leaflet'
import './mymap.css'
import opencage from 'opencage-api-client'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import ReactMapboxGl from 'react-mapbox-gl';
import Logo from '../hhlogoreviewbold.png'
const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY;  //NOT WORKING!!
// const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
export default class Mymap extends Component {
constructor(props) {
    super(props);
    this.state = {
    lat:51.528308, 
    lon:-0.3817765, 
    zoom:25,
    helpers: [],  
    markers: [],
    helperWithActivity: [],    
    filteredHelpers: [],   //NEW
    checkedActivity:[],   //NEW
    }
}
componentDidMount() {
  this.getHelper();
  this.getActivity();    
}
getHelper = () => {
  fetch(`/users/helper_sign_up`)
    .then(response => response.json())
    .then(response => {
      this.setState({helpers: response});
      for (let i=0; i<this.state.helpers.length; i++) {
        // console.log(this.state.helpers[i]);
        const locData =`${this.state.helpers[i].postcode}, ${this.state.helpers[i].city}`;  
            // console.log(locData);
        this.addLocation(locData,this.state.helpers[i].name, this.state.helpers[i].surname, this.state.helpers[i].about_me);   //to add other things to appear 
      }
    });
}
getActivity = () => {
  fetch(`/users/helperSignUp-with-activity`)
    .then(response => response.json())
    .then(response => {
      this.setState({helperWithActivity: response});
      for (let i=0; i<this.state.helperWithActivity.length; i++) {
        const HelpAct =`${this.state.helperWithActivity[i].postcode}, ${this.state.helperWithActivity[i].city}`;  
        console.log(this.state.helperWithActivity[i]);
      }
    });
}
//FILTER - NEW - DO I NEED THIS?
// getFilteredHelpers= () => {
//   fetch(`/users/filter/:activity_id`)
//     .then(response => response.json())
//     .then(response => {
//       this.setState({filteredHelpers: response});
//       for (let i=0; i<this.state.filteredHelpers.length; i++) {
//         const FilteredList =`${this.state.filteredHelpers[i].postcode}, ${this.state.filteredHelpers[i].city}`;  
//         console.log(this.state.helperWithActivity[i]);
//       }
//     });
// }
//NEW - FILTER - I MAP ALREADY HhelperWithACtivity SO NO OTHER FETCH REQUEST??
filteredMembers =  () =>{
  for(let i=0; i<this.state.helperWithActivity.length; i++) {
    if(this.state.helperWithActivity.activities[i] === true){
      this.state.filteredHelpers.push(i+1)
      console.log(this.state.filteredHelpers[i]);
      }}}
//NEW - FILTER - IS THE CONDITION GOOD?? 
  handleClick = (e) => {
    let arr = [...this.state.helperWithActivity];   
    arr[e.target.name-1] = e.target.checked;   
    this.setState({
      helperWithActivity: arr
    })
  }
addLocation = (helperLocation, helperName, helperSurname, helperAbout_me,) => {       //To add what I want to show
  console.log(process.env.REACT_APP_OCD_API_KEY); 
    opencage.geocode({ q: helperLocation, key: OCD_API_KEY })
    .then(data => {
    console.log(data);
    if (data.results.length > 0){
      console.log("Found: " + data.results[0].formatted);
      const latlng = data.results[0].geometry;
      const {markers} = this.state   //creating the array with lat, lon
        let markerObject = {     
          location: latlng, 
          name: helperName,      //To add what I want to show and to pass as an arg to addLocation
          surname: helperSurname,
          about_me: helperAbout_me
        };
        markers.push(markerObject);  
        this.setState({
          markers: markers
        })
        console.log(this.state.markers); 
      let mapInst =  this.refs.map.leafletElement;   //in render in ref
      mapInst.flyTo(latlng, 12);
  } else alert("No results found!!");
  })  
  .catch(error => {
    console.log('error', error.message);
  })
}
// ref="secondpage"      ref="map"
  render() {
    return (
      <div>
        <div className = "split left">
          <img src={Logo} alt="Helping Hands Logo" width="600px" className="hhlogo"/>
          <Map center={[this.state.lat, this.state.lon]} zoom={this.state.zoom}>                                   
          <div className="mapPositioning">
                <TileLayer url='https://api.mapbox.com/styles/v1/albaneldn/ckcnviqvc1nvz1iqet1kpzmnj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxiYW5lbGRuIiwiYSI6ImNrY252a2pzOTBmN20ycmx2NW1zM2YyOHQifQ.H3wB-UZZivkXKf-siLrnWQ'
                attribution='<a href="https://www.mapbox.com/about/maps/">Mapbox | </a> <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                <ReactMapboxGl/>
                  {this.state.markers.map((marker, index) => //part of map prototype
                    <Marker key={index} position={marker.location}>
                      <Popup key={index}> 
                        <p> Name: {marker.name} </p>
                        <p> Surname:{marker.surname} </p>
                        <p> About Me:{marker.about_me} </p>
                      {/* <img width="150" /> */}
                      </Popup>
                    </Marker>        
                  )}         
          </div>
          </Map>
            <br></br>  
          <div>
            <label for="activity">Select Helper Based On Activity</label>
              <select id="activity" name="Activity">
                <option value="groceryShopping">Grocery Shopping</option>
                <option value="goForAWalk">Go For A Walk</option>
                <option value="writingLetters">Writing Letters</option>
                <option value="pharmacyRun">Pharmacy Run</option>
                <option value="walkYourPet">Walk Your Pet</option>
                <option value="helpWithTech">Help With Tech</option>
                <option value="weeklyPhoneCall">Weekly Phone Call</option>
                <option value="gardening">Gardening</option>
              </select>
            <input type="submit" value="Submit"/>
          </div>
            <NavLink className="BackButton" to="/"><button className="Browse__Map">Back to Main Page</button></NavLink>
        </div>
{/* <input type="checkbox" onClick={(e) => this.handleClick(e)} id={helperWithActivity.id} name={helperWithActivity.activity}/>   */}
        <div className="split right">
          <h5>Find Out Who Can Offer You Help</h5>
          <ul>
          {this.state.helperWithActivity.map((helperWithActivity,id) => {
          return (
            <li key ={helperWithActivity.ID}>
              <div class="flex-container">
                <div>
                  <p><b>Name</b>: {helperWithActivity.name} {helperWithActivity.surname}</p>
                  <p><b>Address:</b> {helperWithActivity.city}, {helperWithActivity.postcode}</p>
                  <p><b> Email:</b> {helperWithActivity.email} </p>
                  <p><b>About me: </b>{helperWithActivity.about_me}</p>
                  <p><b>I can help you with:</b> {helperWithActivity.activities.map(e => e.activity_name).join(", ")}  </p> 
                </div>
              </div>
            </li>
          )})}
          </ul>
        </div>
      </div>   
    )}
  }