import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

const INIT_STATE = {
  name: "",
  surname: "",
  email: "",
  city: "",
  postcode: "",
  about_me: "",
  act: [
    { id: "1", value: "Grocery Shopping", isChecked: false },
    { id: "2", value: "Going For A Walk", isChecked: false },
    { id: "3", value: "Writing Letters", isChecked: false },
    { id: "4", value: "Pharmacy Runs", isChecked: false },
    { id: "5", value: "Walk Your Pet", isChecked: false },
    { id: "6", value: "Help With Tech", isChecked: false },
    { id: "7", value: "Weekly Phone", isChecked: false },
    { id: "8", value: "Gardening", isChecked: false },
  ],
};

export default class Signup extends Component {
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

  handleCheckboxChange = (e) => {
    const { value } = e.target;
    const { act } = this.state;
    this.setState({
      act: act.map((activity) =>
        activity.id == value
          ? { ...activity, isChecked: !activity.isChecked }
          : activity
      ),
    });
  };

  onSubmit(event) {
    event.preventDefault();
    //console.log('submit!', this.state);
    this.newUser();
    this.setState(INIT_STATE);
  }

  newUser() {
    //console.log(this.state);

    let { name, surname, email, city, postcode, about_me, act } = this.state;

    act = act.filter((e) => e.isChecked).map((e) => e.id);

    const body = { name, surname, email, city, postcode, about_me, act };

    fetch("/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
            {/* <div className="FormField"> */}
      
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Name
              </label>
              <input
                type="name"
                id="name"
                className="FormField__Input"
                placeholder="What's your name?"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Surname
              </label>
              <input
                type="surname"
                id="surname"
                className="FormField__Input"
                placeholder="What's your surname?"
                name="surname"
                value={this.state.surname}
                onChange={this.onChange}
              /> 
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
                placeholder="What's your postcode?"
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

              <div>
                {this.state.act.map((activity) => (
                  <div key={activity.id}>
                    <label className="Act__Label">
                      <input
                        type="checkbox"
                        onChange={this.handleCheckboxChange}
                        value={activity.id}
                        checked={activity.isChecked}
                      />{" "}
                      {activity.value}
                    </label>
                  </div>
                ))}
              </div>
            <br />

            <div className="FormField">
              <label className="FormField__Label" htmlFor="about_me">
                About me
              </label>
              <textarea
                type="about_me"
                id="about_me"
                className="FormField__Input"
                placeholder="Tell us about you"
                name="about_me"
                value={this.state.about_me}
                onChange={this.onChange}
              />
            </div>
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
