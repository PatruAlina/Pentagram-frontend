var React=require('react');
var AjaxSupport = require('../common/AjaxSupport');

var RegisterPage = React.createClass({
	getInitialState: function(){
		return {
			firstName:null,
			lastName: null,
			username:null,
			email:null,
			password:null,
			repeatPassword:null
		}
	}
	, isValidInputValue: function(inputValue) {
		if (!inputValue || inputValue.trim().length === 0) {
			return false;
		}
		return true;
	}
	, firstNameChangedHandler: function(event) {
		var firstNameValue = event.target.value;
		if (!this.isValidInputValue(firstNameValue)) {
			firstNameValue = null;
		}
		this.setState({firstName:firstNameValue});
	}
	, lastNameChangedHandler: function(event) {
		var lastNameValue = event.target.value;
		if (!this.isValidInputValue(lastNameValue)) {
			lastNameValue = null;
		}
		this.setState({lastName:lastNameValue});
	}
	, emailChangedHandler: function(event) {
		var emailValue = event.target.value;
		if (!this.isValidInputValue(emailValue)) {
			emailValue = null;
		}
		this.setState({email:emailValue});
	}
	, usernameChangedHandler: function(event) {
		var usernameValue = event.target.value;
		if (!this.isValidInputValue(usernameValue)) {
			usernameValue = null;
		}
		this.setState({username:usernameValue});
	}
	, passwordChangedHandler: function(event) {
		var passwordValue = event.target.value;
		if (!this.isValidInputValue(passwordValue)) {
			passwordValue = null;
		}
		this.setState({password:passwordValue});
	}
	, repeatPasswordChangedHandler: function(event) {
		var password2Value = event.target.value;
		if (!this.isValidInputValue(password2Value)) {
			password2Value = null;
		}
		this.setState({repeatPassword:password2Value});
	}
	, formSubmitHandler: function(event) {
		event.preventDefault();	
		console.log(this.state);
		if (this.isValidStateForSubmit()) {
			AjaxSupport.post({
				url:'/users'
				,contentType:'application/json'
				, data: JSON.stringify({
					username:this.state.username,
					password:this.state.password,
					firstName:this.state.firstName,
					lastName:this.state.lastName,
					email:this.state.email,
				})
				, success: function() {
					console.log('request success');
				}
				, error: function() {
					debugger;
					console.log('my request failed');
				}
			});
			console.log("Form is ready for sumbit");
		} else {
			console.log('there are some issues with the form');
		}
	}

	, isValidStateForSubmit: function() {
		return this.state.firstName && this.state.lastName && this.state.email
		 && this.state.password && this.state.repeatPassword && (this.state.password === this.state.repeatPassword);
	}
	,render:function(){
		return(
			<div>
				<div>
					<h1>Create account</h1>
				</div>
				<form>
					<div>
						<div>
							<label>First name  </label>
							<input type="text" name="firstName" onChange={this.firstNameChangedHandler} />
						</div>
						<div>
							<label>Last name  </label>
							<input type="text" name="lastName" onChange={this.lastNameChangedHandler} />
						</div>
						<div>
							<label>Username  </label>
							<input type="text" name="username" onChange={this.usernameChangedHandler} />
						</div>
						<div>
							<label >Password  </label>
							<input type="password" name="password" onChange={this.passwordChangedHandler} />
						</div>
						<div>
							<label >Enter password again </label>
							<input type="password" name="repeatPassword" onChange={this.repeatPasswordChangedHandler} />
						</div>
						<div>
							<label for="email">Email  </label>
							<input type="email" name="email" onChange={this.emailChangedHandler} />
						</div>
						<button name="signupButton" type="submit" onClick={this.formSubmitHandler} >Sign up</button> 
					</div>
					<div className="link">
						<h2>
							Already have an account ?    
							<a href="http://localhost:3001/#/login" target="_top">
								Login!
							</a>
						</h2>
					</div>
				</form>
			</div>
		);
	}
});

module.exports=RegisterPage;