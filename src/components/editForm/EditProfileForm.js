import React, { useState } from 'react'
import './EditProfileForm.css'

const EditProfileForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div className='edit-form'>
        <form>
            <input type='text' value={username} placeholder='Username'  onChange={e => setUsername(e.target.value)}/>
            <input type='email' value={email} placeholder='Email'  onChange={e => setEmail(e.target.value)}/>
            <input type='text' value={firstName} placeholder='Firstname'  onChange={e => setFirstName(e.target.value)}/>
            <input type='text' value={lastName} placeholder='Lastname'  onChange={e => setLastName(e.target.value)}/>
            <input type='text' value={city} placeholder='City'  onChange={e => setCity(e.target.value)}/>
            <input type='text' value={country} placeholder='Country'  onChange={e => setCountry(e.target.value)}/>
            <input type='text' value={address} placeholder='Address'  onChange={e => setAddress(e.target.value)}/>
            <button className='submit-btn'  type='submit'> Save Update</button>
        </form>
    </div>
    )
}

export default EditProfileForm
