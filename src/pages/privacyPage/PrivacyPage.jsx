import React from 'react';
import SettingSearch from '../../components/searchHeader/SearchHeader';
import './PrivacyPage.css';


const PrivacyPage = ({darkMode}) => {
    return (
        <div className={`privacy_container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          {/* <SettingSearch page_name='Privacy'/> */}
            <div className="privacy">
                <div className="browse_privacy">
                    <div className="loginPassword">
                        <h3>Login and password</h3>
                        <p>
                          <p>
                            <input type="checkbox"/>&nbsp; Ask to save logins and passwords for websites
                          </p>
                          <button>Exceptions..</button>
                        </p>
                        <p className="pad_left">
                          <p>
                            <input type="checkbox"/>&nbsp; Autofill logins and passwords
                          </p>
                            <button>Saved Logins...</button>
                        </p>
                        <p className="pad_left">
                          <p>
                            <input type="checkbox"/>&nbsp; Suggest and generate strong passwords
                          </p>
                        </p>
                        <p className="pad_left">
                          <p>
                            <input type="checkbox"/>&nbsp; Show alerts about passwords for breached websites
                            <a href="/">    Learn more</a>
                          </p>
                        </p>
                        <p>
                          <p>
                            <input type="checkbox"/>&nbsp; Use a Primary Password
                            <a href="/">    Learn more</a>
                          </p>
                          <button>Change Primary Password</button>
                        </p>
                    </div>
                  </div>

                <div className="address_bar">
                    <h3>  Address Bar </h3>
                    <p>When using the address bar, suggest</p>
                    <p>
                        <input type="checkbox"/>  Browsing history
                    </p>
                    <p> 
                      <input type="checkbox"/> Bookmarks 
                    </p>
                    <p>
                      <input type="checkbox"/>Open tabs
                    </p>
                    <p>
                      <input type="checkbox"/>  Shortcuts
                    </p>
                    <p>
                      <input type="checkbox"/> Search engines
                    </p>
                </div>

            </div>

        </div>
    )
}

export default PrivacyPage
