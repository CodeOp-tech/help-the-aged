import React, { Component } from 'react'
import Signin from './components/signin'
import Mymap from './components/mymap'
//import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

export default class App extends Component {

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
