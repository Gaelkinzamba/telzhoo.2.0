import React from 'react'

const Zoom = () => {
	const zoomSize = ['100%', '200%', '300%', '400%', '500%', '600%']

	return (
		<>
			<p>
				{' '}
				<h4>Zoom</h4>
			</p>
			<div>
				Default zoom{' '}
				<select>
					{zoomSize.map((item) => (
						<option key={item}> {item} </option>
					))}
				</select>
			</div>

			<div>
				<input
					type='checkbox'
					onClick={() => {
						alert('Zoom Button')
					}}
				/>{' '}
				Zoom text only
			</div>
		</>
	)
}

export default Zoom
