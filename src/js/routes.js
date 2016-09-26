var React=require('react');
var Router=require('react-router');
var Route=Router.Route;
var NotFoundRoute=Router.NotFoundRoute;
var DefaultRoute=Router.DefaultRoute;
var AppBaseView=require('./app/layout');
var NotFoundView=require('./404/layout');
var HomeView=require('./home/layout');
var LoginView=require('./login/layout');
var RegisterView=require('./register/layout');


var routes=(
	<Route name="baseAppRouter" path="/" handler={AppBaseView}>
		<NotFoundRoute handler={NotFoundView} />
		<DefaultRoute handler={HomeView} />
		<Route name="login" handler={LoginView} />
		<Route name="register" handler={RegisterView} />
	</Route>
);

module.exports=routes;