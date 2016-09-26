var React=require('react');

var RegisterPage=React.createClass({
	render:function(){
		return(
			<div>
				<div>
					<h1>Create account</h1>
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
						<div>
							<label for="passwordTwice">Enter password again </label>
							<input type="password" id="passwordTwice"/>
						</div>
						<div>
							<label for="email">Email  </label>
							<input type="text" id="email"/>
						</div>
						<button type="button">Sign up</button> 
					</div>
				</form>
			</div>
		);
	}
});

module.exports=RegisterPage;