import React, { Component } from 'react';
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Signup from './signup'
import Mymap from './mymap'
import App from './App'
import Signin from './signin'

render((
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('app')
);
<HashRouter>
   <div>
      <Route exact path="/" component={Signin}/>
      <Route path="/sign-in" component={Signup}/>
      <Route path="/map" component={Mymap}/>
   </div>
</HashRouter>