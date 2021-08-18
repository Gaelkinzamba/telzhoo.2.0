import React from 'react'

const  Language = () => {
    return (
      <>
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

      </>
    );
  }

export default Language
