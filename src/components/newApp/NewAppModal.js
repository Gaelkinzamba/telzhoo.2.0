import React, { useState } from 'react'
import { apps } from '../../utils/myApps';
import './NewAppModal.css'

const NewAppModal = ({handleCloseNewAppModal}) => {
    const [ appName, setAppName ] = useState("")
    const [ link, setLink ] = useState("")

    const appList = [...apps]

    const handleSubmit = event => {
        event.preventDefault()
        const newApp = {
            appName, link
        }
        appList.push(newApp)
        setAppName("")
        setLink("")
        console.log(appList)
    }
    return (
        <div className="overlay">
            <form className="new-app-modal" onSubmit={handleSubmit}>
                <h3>Add a new app shortcut </h3>
                <div className="input-group">
                    <input type="text" placeholder="app name" value={appName} onChange={event => setAppName(event.target.value)}/>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="url" value={link} onChange={event => setLink(event.target.value)}/>
                </div>
                <div className="button-group">
                    <button onClick={handleCloseNewAppModal}>Cancel</button>
                    <button type="submit">Add App</button>
                </div>
            </form>
        </div>
    )
}

export default NewAppModal
