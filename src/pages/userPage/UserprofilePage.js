import React from 'react'
import SettingSearch from '../../components/searchHeader/SearchHeader'
import  ProfileDetails from '../../components/profileDetails/profileDetails'
import EditProfileForm from '../../components/editForm/EditProfileForm'
import './UserprofilePage.css'

const UserprofilePage = ({darkMode}) => {
    return (
        <div className={`setting-main ${darkMode ? 'dark-mode' : 'light-mode'}`} >
            {/* <SettingSearch page_name='User Profile' /> */}
            <div className='usr-main'>
                <div className='edit-profile shadow-effect'>
                    <div className='usr-head shadow-effect'>Edit Profile </div>
                    <EditProfileForm />
                </div>
                <div className='profile-details shadow-effect'>
                    <ProfileDetails/>
                </div>
            </div>
        </div>
    )
}

export default UserprofilePage

