import React, { Component } from 'react'
import {Map,TileLayer, Marker, Popup} from 'react-leaflet'
import './mymap.css'
import opencage from 'opencage-api-client'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import ReactMapboxGl from 'react-mapbox-gl'

const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY;
//const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;

export default class Mymap extends Component {

constructor(props) {
    super(props);
    this.state = {
    lat:51.528308, 
    lon:-0.3817765, 
    zoom:8.5,
    helpers: [],  
    markers: []
    }
}

componentDidMount() {
  this.getHelper()
}


//to pass a placename
getHelper = () => {
  fetch(`/users/helper_sign_up`)
    .then(response => response.json())
    .then(response => {
      this.setState({helpers: response});
      for (let i=0; i<this.state.helpers.length; i++) {
        // console.log(this.state.helpers[i]);
        const locData =`${this.state.helpers[i].postcode}, ${this.state.helpers[i].city}`;  //1st arg locData
            // console.log(locData);
        this.addLocation(locData,this.state.helpers[i].name, this.state.helpers[i].surname, this.state.helpers[i].about_me);   //to add other things to appear 
      }
    });
}



addLocation = (helperLocation, helperName, helperSurname, helperAbout_me) => {       //To add what I want to show
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

  render() {
    return (
      <div>
            <div className = "NiceMap">
              <Map center={[this.state.lat, this.state.lon]} zoom={this.state.zoom} ref="map">
                <TileLayer url='https://api.mapbox.com/styles/v1/albaneldn/ckcnviqvc1nvz1iqet1kpzmnj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxiYW5lbGRuIiwiYSI6ImNrY252a2pzOTBmN20ycmx2NW1zM2YyOHQifQ.H3wB-UZZivkXKf-siLrnWQ' 
                attribution='<a href="https://www.mapbox.com/about/maps/">Mapbox | </a> <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                
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
              </Map>
              <ReactMapboxGl/>

              <NavLink to="/"><button className="Browse__Map">Join and Help</button></NavLink>

              
            </div>
          </div>

    )
  }
}
