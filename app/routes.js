/**
 * Routes
 */

var React = require('react');
// React-Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

var history  = require('./history');

//App Page
var App = require('./pages/app');
//Main Page
var Main = require('./pages/main');
//About Page
var About = require('./pages/about');
//Login
var Login = require('./pages/login');
//New Post
var NewPost = require('./pages/newPost');

//Route
// var routeConfig = [
//     {
//         path: '/',
//         component: App,
//         indexRoute: { component: Main },
//         childRoutes: [
//             { path: 'login', component: Login },
//             { path: 'about', component: About },
//             { path: 'main', component: Main },
//             { path: '*', component: Main }
//         ]
//     }
// ];

// var routes = (
//     <Router routes={routeConfig} />
// );

var routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Main}/>
            <Route path="main" component={Main} />
            <Route path="newPost" component={NewPost} />
            <Route path="about" component={About} />
            <Route path="login" component={Login} />
            <Route path="logout" component={Main} />
            <Route path="*" component={Main} />
        </Route>
    </Router>
);

module.exports = routes;
