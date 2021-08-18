
import React from "react";
import "./search.css";
import Setting from "../../setting";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../dashboard/board";
import User from "../user/user_profile";



// maybe change this to a class.
class Setting_search extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { // set state of side bar.
      sideBarToggle: false,
    };
  }

  Toggle = ( event ) => { // show sidebar, menu.
    this.setState({ sideBarToggle: true, });
  }


  toggleOut = () => { // don't show sidebar, menu.
    this.setState({ sideBarToggle: false, });
  }


  render() {
    return (
      <div onClick={ this.ToggleOut } className="navigations" >
  
        {/* onClick={ window.location.assign("https://www.w3schools.com") } */}
        <p className="page_name" >
          { this.props.page_name }
        </p>
  
        <div className="search_btn" >
          <form >
            <input placeholder="Search" size="15" type="text" name="search" />
            <input type="submit" value="Search" />
          </form>
  
          <i >Notifi*_bell </i>
          <i className="usr_settings" >user</i>
        </div>
  
        <button onClick={ this.Toggle } data-toggle="collapse" data-target="#mob_nav_wrap" className="mobile_nav" >Side Menu</button>


        {/* Use state to set the state of a navbar, if it true, show navbar, else hifr navbar. */}
        <div class={this.state.sideBarToggle ? "show_navbar": "hide_navbar"} >
          
          <button onClick={ this.toggleOut } className={this.state.sideBarToggle ? "close_nav_bar": "hide_navbar"} > Close </button>

          <BrowserRouter >
            <div >
              <ul >
                <li className="link" >
                  <Link to="setting" >Dashboard</Link>
                </li>
                <li className="link" >
                  <Link to="userprofile" >User Profile</Link>
                </li>
              </ul>
            </div>

            <div className="mob_main" >
              <Switch >
                <Route exact path="../dashboard/board" component={ Dashboard } ></Route>
                <Route exact path="../user/user_profile" component={ User } ></Route>
              </Switch>
            </div>

          </BrowserRouter>

        </div>
        
      </div>
    );
  }

}



export default Setting_search;