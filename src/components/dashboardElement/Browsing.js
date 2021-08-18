import React from 'react'

const Browsing = () => {
	return (
		<>
			<p>
				<h4>Browsing</h4>
			</p>

			<div>
				<input type='checkbox' /> Use autoscrolling
			</div>

			<div>
				<input type='checkbox' /> Use smooth scrolling
			</div>

			<div>
				<input type='checkbox' /> Always use the cursor keys to navigate within
				pages
			</div>

			<div>
				<input type='checkbox' /> Search for text when you start typing
			</div>

			<div>
				<input type='checkbox' /> Enable picture-in-picture video controls{' '}
				<a href='/'>Learn more</a>
			</div>

			<div>
				<input type='checkbox' /> Control media via keyboard, headset, or
				virtual interface <a href='/'>Learn more</a>
			</div>

			<div>
				<input type='checkbox' /> Recommend extensions as you browse
				<a href='/'>Learn more</a>
			</div>

			<div>
				<input type='checkbox' /> Recommend features as you browse{' '}
				<a href='/'>Learn more</a>
			</div>
		</>
	)
}

export default Browsing
