import React, { Component } from "react";
// import Logo from '../hhlogoreviewbold.png'
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
const INIT_STATE = {
  name: "",
  surname: "",
  email: "",
  city: "",
  postcode: "",
  aboutme: "",
  // act :[
  //     {id:'1', value:'Grocery Shopping', isChecked: true},
  //     {id:'2', value:'Going For A Walk', isChecked: false},
  //     {id:'3', value:'Writing Letters', isChecked: false},
  //     {id:'4', value:'Pharmacy Runs', isChecked: false},
  //     {id:'5', value:'Walk Your Pet', isChecked: false},
  //     {id:'6', value:'Help With Tech', isChecked: false},
  //     {id:'7', value:'Weekly Phone', isChecked: false},
  //     {id:'8', value:'Gardening', isChecked: false}
  // ]
};

//cb1: false, cb2: false, cb3: false, cb4: false, cb5: false, cb6: false, cb7: false, cb8: false

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = INIT_STATE;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const name = target.name;
    if (target.tagName === "INPUT" && target.type === "checkbox") {
      this.setState({ [name]: target.checked });
    } else {
      this.setState({ [name]: target.value });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    //console.log('submit!', this.state);
    this.newUser();
    this.setState(INIT_STATE);
  }

  newUser() {
    //console.log(this.state);
    fetch("/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        console.log(res);
      })
      //.then(res => res.json())
      .catch((error) => {
        console.log("error");
      });
  }

  render() {
    return (
      // <div>

      // <div className="App__Form">

      <div className="FormTitle">
        <NavLink
          to="/sign-in"
          activeClassName="FormTitle__Link--Active"
          className="FormTitle__Link"
        >
          Sign In
        </NavLink>
        or
        <NavLink
          exact
          to="/"
          activeClassName="FormTitle__Link--Active"
          className="FormTitle__Link"
        >
          Sign Up
        </NavLink>
        <br />
        <br />
        <br />
        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.onSubmit}>
            <div className="FormField">
              {/* <div className="Names__Inputs"> */}
              <label className="FormField__Label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="FormField__Input"
                placeholder="Enter your name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <br />
              <br />
              <br />
              <label className="FormField__Label" htmlFor="surname">
                Surname
              </label>
              <input
                type="text"
                id="surname"
                className="FormField__Input"
                placeholder="Enter your surname"
                name="surname"
                value={this.state.surname}
                onChange={this.onChange}
              />
              {/* </div> */}
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="city">
                City
              </label>
              <input
                type="city"
                id="city"
                className="FormField__Input"
                placeholder="Where do you live?"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="postcode">
                Postcode
              </label>
              <input
                type="postcode"
                id="postcode"
                className="FormField__Input"
                placeholder="Enter your postcode"
                name="postcode"
                value={this.state.postcode}
                onChange={this.onChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="activity">
                What i can help with:
              </label>
              <br />
              <div className="Act__Checkboxes">
                <div>
                  <input
                    type="checkbox"
                    id="activities"
                    className="Act__List"
                    name="activities"
                    label="cb1"
                    value="Grocery Shopping"
                    checked={this.state.checkbox}
                    onChange={this.onChange}
                  />
                  <label className="Act__Label">Grocery Shopping</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="activities"
                    className="Act__List"
                    name="activities"
                    label="cb2"
                    value="Going For A Walk"
                    checked={this.state.checkbox}
                    onChange={this.onChange}
                  />
                  <label className="Act__Label">Going For A Walk</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="activities"
                    className="Act__List"
                    name="activities"
                    label="cb3"
                    value="Weekly Phone Call"
                    checked={this.state.checkbox}
                    onChange={this.onChange}
                  />
                  <label className="Act__Label">Weekly Phone Call</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="activities"
                    className="Act__List"
                    name="activities"
                    label="cb4"
                    value="Pharmacy Runs"
                    checked={this.state.checkbox}
                    onChange={this.onChange}
                  />
                  <label className="Act__Label">Pharmacy Runs</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="activities"
                    className="Act__List"
                    name="activities"
                    label="cb5"
                    value="Tech Items"
                    checked={this.state.checkbox}
                    onChange={this.onChange}
                  />
                  <label className="Act__Label">Tech Items</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="activities"
                    className="Act__List"
                    name="activities"
                    label="cb6"
                    value="Writing Letters"
                    checked={this.state.checkbox}
                    onChange={this.onChange}
                  />
                  <label className="Act__Label">Writing Letters</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="activities"
                    className="Act__List"
                    name="activities"
                    label="cb7"
                    value="Gardening"
                    checked={this.state.checkbox}
                    onChange={this.onChange}
                  />
                  <label className="Act__Label">Gardening</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="activities"
                    className="Act__List"
                    name="activities"
                    label="cb8"
                    value="Walking Your Pet"
                    checked={this.state.checkbox}
                    onChange={this.onChange}
                  />
                  <label className="Act__Label">Walking Your Pet</label>
                </div>
              </div>
            </div>
            <br />

            <div className="FormField">
              <label className="FormField__Label" htmlFor="aboutme">
                About me
              </label>
              <textarea
                type="aboutme"
                id="aboutme"
                className="FormField__Input"
                placeholder="Tell us about you"
                name="aboutme"
                value={this.state.aboutme}
                onChange={this.onChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__CheckboxLabel">
                <input
                  className="FormField__Checkbox"
                  type="checkbox"
                  name="hasAgreed"
                />
                I agree to all
                <a href="" className="FormField__TermsLink">
                  terms and conditions.{" "}
                </a>
              </label>
            </div>
            <div className="FormField">
              <button className="FormField__Button mr-20">Sign Up</button>
              <a href="#" className="FormField__Link">
                I am already a member
              </a>
            </div>
          </form>
        </div>
      </div>
      // </div>
    );
  }
}
