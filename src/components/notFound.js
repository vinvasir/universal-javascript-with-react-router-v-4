const React = require('react');
const Link = require('react-router-dom').Link;

class NotFound extends React.Component {
	render() {
		return (
			<div>
				<h1>there's no page there!</h1>

				<Link to="/">Go back to index</Link>
			</div>
		);
	}
}

module.exports = NotFound;