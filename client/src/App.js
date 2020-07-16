import React, { Component } from 'react'
import Mymap from './components/mymap'
import Signup from './components/signup'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
            <div className="App__Aside">
                <h1>Helping Hands</h1>

<Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div><img src="https://www.wowamazing.com/wp-content/uploads/2015/11/young-man-elderly-woman-visiting-1080937-print.jpg" height="200" width="240"></img></div>
  <div><img src="https://www.ligo.co.uk/wordpress/wp-content/uploads/2013/03/old-people.jpg" height="200" width="240"></img></div>
  <div><img src="https://2o3dku1y6qqx2cmhkyvli8ok-wpengine.netdna-ssl.com/wp-content/uploads/sites/5/2018/12/MLTCN_page31_Feature01_1218-1280x720.jpg" height="200" width="240"></img></div>
  <div><img src="https://www.ligo.co.uk/wordpress/wp-content/uploads/2013/03/old-people.jpg" height="200" width="240"></img></div>
  <br/> <br/>
</Carousel>




            </div>

            <div className="App__Form">
                <div className="PageSwitcher">
                    <a href="#" className="PageSwitcher__Item">Sign In</a>
                    <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
                </div>

                <div className="FormTitle">
                    <a href="#" className="FormTitle__Link">Sign In</a>
                    or
                    <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
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
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="postcode">Postcode</label>
                            <input type="postcode" id="postcode" className="FormField__Input" placeholder="Enter your postcode" name="postcode"/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="activity">Activity</label>
                            <input type="activity" id="activity" className="FormField__Input" placeholder="NEED TO MAKE THESE AS TICKBOXES" name="activity"/>
                        </div>
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
        <Mymap />

        <p className="copyrights">@ 2020. Help The Aged. Created by Anita Noemi Szabo and Albane Chepeau.</p>  
      </div>
    )
  }
}
