// import React, { Component } from 'react'

// export default class Signup extends Component {
//     constructor(){
//         super();
//         this.state ={
            
//         }
//     }
//     render() {
//         return (
//         <div>
//         <div className="App">
//             <div className="App__Aside">
//                 <h1>Helping Hands</h1>
//                 <img classname="MapHomepage" src="https://www.google.com/maps/d/thumbnail?mid=1jzQ0F21u1PJI_8BqWOAaSkFLHSM"/>
//             </div>

//             <div className="App__Form">
//                 <div className="PageSwitcher">
//                     <a href="#" className="PageSwitcher__Item">Sign In</a>
//                     <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
//                 </div>

//                 <div className="FormTitle">
//                     <a href="#" className="FormTitle__Link">Sign In</a>
//                     or
//                     <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
//                 </div>

//                 <div className="FormCenter">
//                     <form className="FormFields" onSubmit={this.handleSubmit}>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="name">Name</label>
//                             <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" name="name"/>
//                         </div>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="email">Email</label>
//                             <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
//                         </div>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="password">Password</label>
//                             <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
//                         </div>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="postcode">Postcode</label>
//                             <input type="postcode" id="postcode" className="FormField__Input" placeholder="Enter your postcode" name="postcode"/>
//                         </div>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="activity">Activity</label>
//                             <input type="activity" id="activity" className="FormField__Input" placeholder="NEED TO MAKE THESE AS TICKBOXES" name="activity"/>
//                         </div>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="aboutme">About me</label>
//                             <textarea type="aboutme" id="aboutme" className="FormField__Input" placeholder="Tell us about you" name="aboutme"/>
//                         </div>

//                         <div className="FormField">
//                         <label className="FormField__CheckboxLabel">
//                             <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/>I agree to all
//                             <a href="" className="FormField__TermsLink">terms and conditions. </a>
//                         </label>
//                         </div>
//                         <div className="FormField">
//                             <button className="FormField__Button mr-20">Sign Up</button>
//                             <a href="#" className="FormField__Link">I am already a member</a>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//         </div>
//         )
//     }
// }
