import React from 'react';
import "./user_profile.css";
import Setting_search from "../search/search";




class User extends React.Component {

    Edit_profile_form = () => {
        return ( <
            div className = "edit_form" >
            <
            form >
            <
            input type = "text"
            name = ""
            placeholder = "Username" / >
            <
            input type = "email"
            name = ""
            placeholder = "Email" / >
            <
            input type = "text"
            name = ""
            placeholder = "Firstname" / >
            <
            input type = "text"
            name = ""
            placeholder = "Lastname" / >
            <
            input type = "text"
            name = ""
            placeholder = "City" / >
            <
            input type = "text"
            name = ""
            placeholder = "Country" / >
            <
            input type = "text"
            name = ""
            placeholder = "Address" / >

            <
            p >
            <
            input className = "submit_btn"
            type = "submit"
            name = ""
            value = "Save Update" / >
            <
            /p> < /
            form > <
            /div>
        );
    }

    render() {
        return ( <
            div className = "setting_main" >
            <
            Setting_search page_name = "User Profile" / >

            <
            div className = "usr_main" >

            <
            div className = "edit_profile shadow_effect" >
            <
            div className = "usr_head shadow_effect" >
            Edit Profile <
            /div>

            <
            this.Edit_profile_form / >
            <
            /div>

            <
            div className = "profile_details shadow_effect" >
            <
            div className = "usr_photo" >
            Profile Details <
            /div>

            <
            p className = "title" >
            title <
            /p>

            <
            p className = "usr_name" >
            Name <
            /p>

            <
            p className = "desc" >
            profile description <
            /p>

            <
            p >
            <
            button className = "follow_btn"
            onClick = {
                () => { alert("Followed The User.") }
            } > Follow < /button> < /
            p > <
            /div>


            <
            /div> < /
            div >
        );
    }
}

export default User;