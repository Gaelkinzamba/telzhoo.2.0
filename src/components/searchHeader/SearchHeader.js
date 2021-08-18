
import React, { useState } from "react";
import "./SearchHeader.css";


const SearchHeader = ({page_name}) => {

  const [ toggle, setToggle] = useState(false)


  return (
    <div onClick={ () => setToggle(false) } className="navigations" >
  
        <p className="page-name" >  { page_name} </p>
        <div className="S-btn" >
          <form >
            <input placeholder="Search"/>
            <input type="submit" value="Search" />
          </form>
  
          <i>Notifi*-bell </i>
          <i className="usr-settings" >user</i>
        </div>
  
        <button onClick={ () => setToggle(true)} data-toggle="collapse" data-target="#mob-nav-wrap" className="mobile-nav" >Side Menu</button>

        <div class={toggle ? "show-navbar": "hide-navbar"} >
          <button onClick={ () => setToggle(false)} className={toggle ? "close-nav-bar": "hide-navbar"} > Close </button>

        </div>
        
      </div>
  )
}

export default SearchHeader