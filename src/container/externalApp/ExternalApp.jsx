import React, { useState } from 'react';
import AppLink from '../../components/appLink/AppLink';
import { apps } from '../../utils/apps';
import { mainApps } from '../../utils/mainApp';
import './ExternalApp.css'

 const ExternalApp = () => {
    const [ moreApp, setMoreApp ] = useState( apps );
    const [ showApps, setShowApp ] = useState(false);
    const [ addApps, setAddApp ] = useState(false);
    const [ url, setUrl ] = useState("");
    const [ text, setText ] = useState("");
    

    const textChange = ( event ) => { setText( event.target.value ); }
    const urlChange = ( event ) => { setUrl( event.target.value ); }

    const addSite = event => {
        alert(text + "  " + url ); // alert( moreApp );
        setAddApp( false );

        setMoreApp( {text:text, background: "", logo: "", url:url} );

        event.preventDefault();
    }



    return (
        <div className="external-app-container">
            <div className="external-app-link">
            {
                mainApps.map((app, index) => {
                    return <AppLink key={index} app={app} />
                })
            }
            </div>

            
            <div className="moreExternalApps">

                <div className="btns" >
                    <button onClick={()=>{setShowApp(!showApps);setAddApp(addApps)}} className="show-more-btn">Show more apps</button>
                    <button onClick={ ()=>{setAddApp(!addApps);setShowApp(showApps) }} className="add-more-apps">add a site</button>
                </div>
                

                {
                    addApps && 
                    <div className="">
                        <form onSubmit={ addSite } className="addAppForm" >
                            <div >
                                <input placeholder="Enter Text" onChange={ textChange } type="text" name="text" id="" />
                            </div>

                            <div >
                                <input placeholder="Enter Url" onChange={ urlChange } type="text" name="url" id="" />
                            </div>

                            <div >
                                <input type="submit" value="Add App" id="" />
                            </div>
                        </form>
                    </div>
                }



                {
                    showApps && 
                    <div className="more-apps">
                        {
                        apps.map((app, index) => {
                            return <AppLink key={index} app={app} />
                        })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ExternalApp