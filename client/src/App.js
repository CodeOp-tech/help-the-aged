import React, { Component } from 'react'
import Signin from './components/signin'
import Mymap from './components/mymap'
import Logo from './hhlogoreviewbold.png'
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            surname:"",
            email:"",
            password:"",
            postcode:"",
            activity:"",
            aboutme:""
        };
      }

  //handleSubmit


  render() {
    return (
      <div>
        <Signin />
        
        <Mymap />

        <p className="copyrights">@ 2020. Help The Aged. Created by Anita Noemi Szabo and Albane Chepeau.</p>  
      </div>
    )
  }
}
