const React = require('react');
const ReactRouter = require('react-router-dom');
const HashRouter = ReactRouter.HashRouter;
const Route = ReactRouter.Route;

const AuthorsIndex = require('./src/components/authorsIndex.js');
const AuthorPage = require('./src/components/authorPage.js');
const NotFound = require('./src/components/notFound.js');

class RoutesConfig extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={AuthorsIndex} />
				<Route exact path="/author/:id" component={AuthorPage} />
				<Route path="*" component={NotFound} />
			</div>
		);
	}
}


module.exports = RoutesConfig;