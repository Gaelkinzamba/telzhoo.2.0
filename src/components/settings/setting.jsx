
import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import "./setting.css";


// import all components
import User from "./component/user/user_profile";
import Dashboard from "./component/dashboard/board";
import Privacy from './component/privacy/privacy';

const Setting = () => {
  return (
    <div className="setting_root" >
    
      <BrowserRouter >
      
        <div className="dash_board" >
          <div className="heading" >
            Settings
          </div>

          <ul >
            <li className="menu_item" >
              <Link className="link" to="/" >General</Link>
            </li>

            <li className="menu_item" >
              <Link className="link" to="/userprofile" >User Profile</Link>
            </li>

            <li className="menu_item" >
              <Link className="link" to="/privacy" >Privacy &amp; Security</Link>
            </li>

          </ul>
        </div>

        {/* manage component to render. */}
        <Switch >
          <Route exact path="/" component={Dashboard} ></Route>
          <Route exact path="/userprofile" component={User} ></Route>
          <Route exact paht="privacy" component={ Privacy } ></Route>
        </Switch>

      </BrowserRouter>
      
    </div>
  );
}


export default Setting;