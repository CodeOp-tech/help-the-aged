import React, { Component } from 'react'
import Mymap from './components/mymap'
import Signup from './components/signup'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>

        <Signup />

        <Mymap />

        <p className="copyrights">@ 2020. Help The Aged. Created by Anita Noemi Szabo and Albane Chepeau.</p>  
      </div>
    )
  }
}
