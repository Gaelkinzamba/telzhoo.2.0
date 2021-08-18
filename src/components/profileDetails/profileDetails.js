import React from 'react'
import './ProfileDetails.css'

const ProfileDetails = () => {
	return (
		<>
			<div className='usr-photo'>Profile Details </div>
			<p>title </p>
			<p>Name </p>
			<p>profile description </p>
			<p>
				<button
					className='follow-btn'
					onClick={() => {
						alert('Followed The User.')
					}}>
					Follow
				</button>
			</p>
		</>
	)
}

export default ProfileDetails
