const React = require('react');
const ReactRouter = require('react-router-dom');
const BrowserRouter = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

const AuthorsIndex = require('./components/authorsIndex.js');
const AuthorPage = require('./components/authorPage.js');
const NotFound = require('./components/notFound.js');

class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={AuthorsIndex} />
					<Route exact path="/author/:id" component={AuthorPage} />
					<Route path="*" component={NotFound} />
				</div>												
			</BrowserRouter>
		);
	}
}

module.exports = Routes;