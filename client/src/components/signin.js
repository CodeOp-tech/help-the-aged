import React, { Component } from 'react'
// import Logo from '../hhlogoreviewbold.png'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            // surname:"",
            email:"",
            postcode:"",
            activity:"",
            aboutme:"",
            hasAgreed: false
        };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
    //   surname: this.state.surname,
      email: this.state.email,
      postcode: this.state.postcode,
      activity:this.state.activity,
      password: this.state.password,
      aboutme: this.state.aboutme
    }



    // register(newUser).then(res => {
    //   this.props.history.push(`/login`)
    // })
  }

    render() {
        return (
            // <div>
                
            // <div className="App__Form">

                <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In
                </NavLink>
                or
                <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up
                </NavLink>
                <br/><br/><br/>
                


                <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.onSubmit}>
                        <div className="FormField">
                            {/* <div className="Names__Inputs"> */}
                            <label className="FormField__Label" htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            className="FormField__Input" 
                            placeholder="Enter your name" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                            {/* <label className="FormField__Label" htmlFor="surname">Surname</label>
                            <input 
                            type="text" 
                            id="surname" 
                            className="FormField__Input" 
                            placeholder="Enter your surname" 
                            name="surname"
                            value={this.state.surname}
                            onChange={this.onChange}
                            /> */}
                            {/* </div> */}
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">Email</label>
                            <input 
                            type="email"
                            id="email"
                            className="FormField__Input"
                            placeholder="Enter your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="postcode">Postcode</label>
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
                            <label className="FormField__Label" htmlFor="activity">What i can help with:</label>
                        <br/>
                        <div className="Act__Checkboxes">
                            <div>
                            <input 
                            type="checkbox" 
                            id="activities" 
                            className="Act__List" 
                            name="activities" 
                            label="Checkbox"
                            value={this.state.name}
                            onChange={this.onChange}/>
                            <label className="Act__Label">Grocery Shopping</label>
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            id="activities" 
                            className="Act__List" 
                            name="activities" 
                            label="Checkbox"
                            value={this.state.name}
                            onChange={this.onChange}/>
                            <label className="Act__Label">Going For A Walk</label>
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            id="activities" 
                            className="Act__List" 
                            name="activities" 
                            label="Checkbox"
                            value={this.state.name}
                            onChange={this.onChange}/>
                            <label className="Act__Label">Weekly Phone Call</label>
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            id="activities" 
                            className="Act__List" 
                            name="activities" 
                            label="Checkbox"
                            value={this.state.name}
                            onChange={this.onChange}/>
                            <label className="Act__Label">Pharmacy Runs</label>
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            id="activities" 
                            className="Act__List" 
                            name="activities" 
                            label="Checkbox"
                            value={this.state.name}
                            onChange={this.onChange}/>
                            <label className="Act__Label">Tech Items</label>
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            id="activities" 
                            className="Act__List" 
                            name="activities" 
                            label="Checkbox"
                            value={this.state.name}
                            onChange={this.onChange}/>
                            <label className="Act__Label">Writing Letters</label>
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            id="activities" 
                            className="Act__List" 
                            name="activities" 
                            label="Checkbox"
                            value={this.state.name}
                            onChange={this.onChange}/>
                            <label className="Act__Label">Gardening</label>
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            id="activities" 
                            className="Act__List" 
                            name="activities" 
                            label="Checkbox"
                            value={this.state.name}
                            onChange={this.onChange}/>
                            <label className="Act__Label">Walking Your Pet</label>
                            </div>
                        </div>
                        </div>
                        <br/>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="aboutme">About me</label>
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
        // </div>
        )
    }
}



// this.onChange = this.onChange.bind(this)
// this.onSubmit = this.onSubmit.bind(this)
// }

// onChange(e) {
// this.setState({ [e.target.name]: e.target.value })
// }
// onSubmit(e) {
// e.preventDefault()

// const newUser = 

// newHelper("/",{
//     method:"POST",
//     body:JSON.stringify({
//             name: this.state.name,
//           //   surname: this.state.surname,
//             email: this.state.email,
//             postcode: this.state.postcode,
//             activity:this.state.activity,
//             password: this.state.password,
//             aboutme: this.state.aboutme
//     }),
// })

// }