import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Name"></input>
                    <input placeholder="Surname"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="City"></input>
                    <input placeholder="Postcode"></input>
                    <input placeholder="Activity (should be a dropdown or a tick boxes"></input>
                    <textarea placeholder="About me"></textarea>                    
                </form>                
            </div>
        )
    }
}
