const React = require('react');
const Link = require('react-router-dom').Link;
const AUTHORS = require('../authors.js');

class AuthorPage extends React.Component {
	componentDidMount() {
		console.log(this.props.match.params.id);
	}

	render() {
		const author = AUTHORS[this.props.match.params.id];

		return (
			<div>
				<h2>{author.name}'s major works</h2>

				<ul className="books">
					{
						author.books.map( (book, index) => {
							return <li key={index} className="book">{book}</li>
						})
					}
				</ul>

				<Link to="/">Go back to index</Link>
			</div>
		);
	}
}

module.exports = AuthorPage;