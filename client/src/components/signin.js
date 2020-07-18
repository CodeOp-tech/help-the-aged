import React, { Component } from 'react'
// import Logo from '../hhlogoreviewbold.png'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            postcode:"",
            activity:"",
            aboutme:"",
            hasAgreed: false
        };
      }

  
    handleSubmit

    render() {
        return (
            <div>
                
            <div className="App__Form">

                <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In
                </NavLink>
                or
                <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up
                </NavLink>
                </div>
                


                <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="name">Name</label>
                            <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" name="name"/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">Email</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
                        </div>
                        {/* <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
                        </div> */}
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="postcode">Postcode</label>
                            <input type="postcode" id="postcode" className="FormField__Input" placeholder="Enter your postcode" name="postcode"/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="activity">What i can help with:</label>
                        <br/>
                        <div className="Act__Checkboxes">
                            <div>
                            <input type="checkbox" id="activities" className="Act__List" name="activities" label="Checkbox"/>
                            <label className="Act__Label">Grocery Shopping</label>
                            </div>
                            <div>
                            <input type="checkbox" id="activities" className="Act__List" name="activities" label="Checkbox"/>
                            <label className="Act__Label">Go For A Walk</label>
                            </div>
                            <div>
                            <input type="checkbox" id="activities" className="Act__List" name="activities" label="Checkbox"/>
                            <label className="Act__Label">Weekly Phone Call</label>
                            </div>
                            <div>
                            <input type="checkbox" id="activities" className="Act__List" name="activities" label="Checkbox"/>
                            <label className="Act__Label">Pharmacy Run</label>
                            </div>
                            <div>
                            <input type="checkbox" id="activities" className="Act__List" name="activities" label="Checkbox"/>
                            <label className="Act__Label">Help With Tech</label>
                            </div>
                            <div>
                            <input type="checkbox" id="activities" className="Act__List" name="activities" label="Checkbox"/>
                            <label className="Act__Label">Writing Letters</label>
                            </div>
                            <div>
                            <input type="checkbox" id="activities" className="Act__List" name="activities" label="Checkbox"/>
                            <label className="Act__Label">Gardening</label>
                            </div>
                            <div>
                            <input type="checkbox" id="activities" className="Act__List" name="activities" label="Checkbox"/>
                            <label className="Act__Label">Walk Your Pet</label>
                            </div>
                        </div>
                        </div>
                        <br/>




                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="aboutme">About me</label>
                            <textarea type="aboutme" id="aboutme" className="FormField__Input" placeholder="Tell us about you" name="aboutme"/>
                        </div>

                        <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/>I agree to all
                            <a href="" className="FormField__TermsLink">terms and conditions. </a>
                        </label>
                        </div>
                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign Up</button>
                            <a href="#" className="FormField__Link">I am already a member</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
                
        // </div>
        )
    }
}