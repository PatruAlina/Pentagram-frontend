var React=require('react');

var LoginPage=React.createClass({
	render:function(){
		return(
			<div>
				<div>
					<h1>Welcome</h1>
				</div>
				<form>
					<div>
						<div>
							<label for="username">Username  </label>
							<input type="text" id="username"/>
						</div>
						<div>
							<label for="password">Password  </label>
							<input type="password" id="password"/>
						</div>
						<button type="button">Login</button> 
					</div>
				</form>
			</div>
		);
	}
});

module.exports=LoginPage;