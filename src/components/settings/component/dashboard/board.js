
import React from 'react';
import "./board.css";
import Setting_search from "../search/search";


class Dashboard extends React.Component {


  Statistics1 = () => {
    return (
      <div className="stat1 shadow_effect" >
        <i className="top shadow_effect" >
          Top
        </i>

        <p className="middle" >Middle</p>

        <p className="bottom" >Bottom</p>
      </div>
    );
  }

  Statistics2 = () => {
    return (
      <div className="stat2 shadow_effect" >
        <p className="top2 shadow_effect" >
          Top
        </p>

        <p className="middle" >Middle</p>

        <p className="bottom" >Bottom</p>
      </div>
    );
  }



  Tabs = () => {
    return (
      <div className="tabs bottom_border" >
        <p >
          <h4 >Tabs</h4>
        </p>
        <p >
          <input type="checkbox" onClick={ ()=> {alert("Setting Button Clicked")} } /> Ctrl+Tab cycles through tabs in recently used order
        </p>

        <p >
          <input type="checkbox" onClick={ ()=> {alert("Setting Button Clicked")} } /> Open links in tabs instead of new windows
        </p>

        <p >
          <input type="checkbox" onClick={ ()=> {alert("Setting Button Clicked")} } /> Warn you when closing multiple tabs
        </p>

        <p >
          <input type="checkbox" onClick={ ()=> {alert("Setting Button Clicked")}} /> When you open a link in a new tab, switch to it immediately
        </p>
        
      </div>
    );
  }

  Appearance = () => {
    const fontSize = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19, 20 ];
    // for ( var i = 9; i < 20; i++ ) {
    //   fontSize.push( Math.floor( Math.random() * 100 ) );
    // }
    
    return (
      <div className="Appearance bottom_border" >
        <p ><h4 >Appearance </h4></p>
        <div className="fonts" >
          Default font <select >
            <option >Sans serif</option>
            <option >Fantasy</option>
            <option >Comic sans</option>
            <option >Arial</option>
          </select>
        </div>

        <div >
          Size <select >
            {
              fontSize.map( item => (
                <option key={ item } > { item } </option>
              ))
            }
          </select>
        </div>


        <div >
          <button onClick={()=>{ alert("Change Colors...")}} >Colors</button>
        </div>

        <div >
          <button onClick={()=>{ alert("Advance settings....")}} >Advance</button>
        </div>

      </div>
    );
  }

  Zoom = () => {
    const zoomSize = ["100%", "200%", "300%", "400%", "500%", "600%"];

    return (
      <div className="Zoom bottom_border" >
        <p > <h4 >Zoom</h4></p>
        <div >
          Default zoom <select >
            {
              zoomSize.map( item => (
                <option key={ item } >  { item } </option>
              ))
            }
          </select>
        </div>

        <div >
          <input type="checkbox" onClick={()=>{alert("Zoom Button")}} /> Zoom text only
        </div>

      </div>
    );
  }

  Language = () => {
    return (
      <div className="language bottom_border" >
        <p > <h4>Language </h4> </p>
        <p >Choose the languages used to display menus, messages, and notifications from telzzo.</p>

        <div >
          <select >
            <option > English( us ) </option>
            <option > English( Canada ) </option>
            <option > English( uk ) </option>
          </select>
        </div>      

        <div >
        Choose your preferred language for displaying pages <button onClick={()=>{ alert("Setting Button")}} > Choose</button>
        </div>

        <div >
          <input type="checkbox" onClick={()=>{alert("Use OS settings")}} /> Use your operating system settings for “English (South Africa)” to format dates, times, numbers, and measurements.
        </div>

        <div >
          <input type="checkbox"onClick={()=>{alert("Check your spelling") }} /> Check your spelling as you type
        </div>

      </div>
    );
  }

  Download = () => {
    return (
      <div className="download bottom_border" >
        <p ></p> <h4> Downloads</h4>

        <div >
          <p >
            <input type="radio" /> Save files to <i > Name and Icon</i> <button onClick={()=>{ alert("Download Location")}} >Browse</button>
          </p>
          <p >
            <input type="radio" /> Always ask you where to save files
          </p>
        </div>
      </div>

    );
  }

  Telzzo_Update = () => {
    return (
      <div className="telzzo_update bottom_border" >
        <p > <h4 > Telzzo Update</h4></p>
        <div >
          <p >Keep Firefox up to date for the best performance, stability, and security. </p>
          <p> Version 89.0.1 (64-bit) 
            <a href="https://telzo-98360.web.app/" > What’s new </a> </p>
        </div>
      </div>
    );
  }

  Browsing = () => {
    return (
      <div className="browsing" >

        <p > <h4 >Browsing</h4></p>

        <div >
          <input type="checkbox" /> Use autoscrolling
        </div>

        <div >
          <input type="checkbox" /> Use smooth scrolling
        </div>

        <div >
          <input type="checkbox" /> Always use the cursor keys to navigate within pages
        </div>

        <div >
          <input type="checkbox" /> Search for text when you start typing
        </div>

        <div >
          <input type="checkbox" /> Enable picture-in-picture video controls <a href="">Learn more</a>
        </div>

        <div >
          <input type="checkbox" /> Control media via keyboard, headset, or virtual interface <a href="">Learn more</a>
        </div>

        <div >
          <input type="checkbox" /> Recommend extensions as you browse
 <a href="">Learn more</a>
        </div>

        <div >
          <input type="checkbox" /> Recommend features as you browse <a href="">Learn more</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="setting_main dashboard" >
        
        <Setting_search page_name="General" />

        <this.Tabs />

        <this.Appearance />

        <this.Zoom />

        <this.Language />

        <this.Download />

        <this.Telzzo_Update />

        <this.Browsing />



  
        {/* <div className="main" >
          <this.Statistics1 />
          <this.Statistics1 />
          <this.Statistics1 />
        </div>
        <div className="stat2_main" >
          <this.Statistics2 />
          {/* <this.Statistics2 /> */}
          {/* <this.Statistics2 /> */}
        {/* </div> */}



      </div>
    );
  }
}

export default Dashboard;