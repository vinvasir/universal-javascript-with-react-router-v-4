const http = require('http');
const Express = require('express');
const React = require('react');
const ReactDOM = require('react-dom/server');
const StaticRouter = require('react-router-dom').StaticRouter;

const Routes = require('./routesConfig.js');

const app = new Express();
const server = new http.Server(app);

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
	// Router.match(
	// 	{routes: routesConfig, location: req.url},
	// 	(error, redirectLocation, renderProps) => {
	// 		if(error) {
	// 			res.status(500).send(error.message)
	// 		} else if (redirectLocation) {
	// 			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
	// 		} else if (renderProps) {
	// 			const markup = ReactDOM.renderToString(React.createElement(Router.RouterContext, renderProps));

	// 			res.render('index', {markup});
	// 		} else {
	// 			res.status(404).send('Not found')
	// 		}
	// 	});
	const context = {};

	const markup = ReactDOM.renderToString(
		<StaticRouter location={req.url} context={context}>
			<Routes />
		</StaticRouter>
	)

	res.render('index', {markup})
});

server.listen(3000, err => {
	if (err) {
		return console.error(err);
	}
	console.log("Server running on http://localhost:3000");
})