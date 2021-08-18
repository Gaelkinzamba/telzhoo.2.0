import React from 'react'

const Download = () => {
	return (
		<>
			<p></p> <h4> Downloads</h4>
			<div>
				<p>
					<input type='radio' /> Save files to <i> Name and Icon</i>{' '}
					<button
						onClick={() => {
							alert('Download Location')
						}}>
						Browse
					</button>
				</p>
				<p>
					<input type='radio' /> Always ask you where to save files
				</p>
			</div>
		</>
	)
}

export default Download
