import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'

export default class Signup extends Component {
    constructor(){
        super();
        this.state ={
            
        }
    }
    render() {
        return (
        // <div>
            <div className="App__Form">
                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>
            <img src="https://i.chzbgr.com/full/9443412224/h24A970BA/halp-plz" height="500"></img>
            </div>
        // </div>
        )
    }
}
