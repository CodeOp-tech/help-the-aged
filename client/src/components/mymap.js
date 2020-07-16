import React, { Component } from 'react'
import {Map,TileLayer, Marker, Popup} from 'react-leaflet'
import './mymap.css';

export default class Mymap extends Component {

constructor(props) {
    super(props);
    this.state = {
        lat:51.5285582, 
        lon:-0.24168, 
        zoom:8.5
    }
}


    render() {
        return (
            <div>
                <div className ="App">
                <div className="App__Aside">
                    <div className = "NiceMap">
                <Map center={[this.state.lat, this.state.lon]} zoom={this.state.zoom}>
                <TileLayer url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png' 
                attribution='<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                <Marker position={[this.state.lat, this.state.lon]}>
                <Popup>
                    HELPING HANDS <br/>
                    <img width="50" src="https://cdn3.vectorstock.com/i/1000x1000/81/22/helping-hands-concept-icon-vector-10468122.jpg"/>
                </Popup>
                </Marker>
                </Map>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
