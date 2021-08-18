import React from 'react'
import './Dashboard.css'
import Tabs from '../../components/dashboardElement/Tabs'
import Appearance from '../../components/dashboardElement/Appearance'
import Zoom from '../../components/dashboardElement/Zoom'
import Language from '../../components/dashboardElement/Language'
import Download from '../../components/dashboardElement/Download'
import TelzoUpdate from '../../components/dashboardElement/TelzoUpdate'
import Browsing from '../../components/dashboardElement/Browsing'

const Dashboard = ({darkMode}) => {
	return (
		<div className={`setting-main dashboard ${darkMode ? 'dark-mode' : 'light-mode'}`}>
			<div className='tabs bottom-border'>
				<Tabs />
			</div>
			<div className='Appearance bottom-border'>
				<Appearance />
			</div>
			<div className='Zoom bottom-border'>
				<Zoom />
			</div>
			<div className='language bottom-border'>
				<Language />
			</div>
			<div className='download bottom-border'>
				<Download />
			</div>
			<div className='telzzo-update bottom-border'>
				<TelzoUpdate />
			</div>
			<div className='browsing'>
				<Browsing />
			</div>
		</div>
	)
}

export default Dashboard
