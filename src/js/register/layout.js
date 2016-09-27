var React=require('react');

var RegisterPage=React.createClass({
	getInitialState: function(){
		return{
			username:null,
			password:null,
			repeatPassword:null,
			email:null
		}
	}
	,validateInputValue:function(inputValue){
		if(!inputValue|| inputValue.trim().length===0)
		{
			return false;
		}
		return true;
	}
	,usernameChangedHandler:function(event){
		var usernameValue=event.target.value;
		if(!this.validateInputValue(usernameValue)){
			usernameValue=null;
		}
		this.setState({username:usernameValue});
	}
	,passwordChangedHandler:function(event){
		var passwordValue=event.target.value;
		if(!this.validateInputValue(passwordValue)){
			passwordValue=null;
		}
		this.setState({password:passwordValue});
	}
	,repeatPasswordChangedHandler:function(event){
		var repeatPasswordValue=event.target.value;
		if(!this.validateInputValue(repeatPasswordValue)){
			repeatPasswordValue=null;
		}
		this.setState({repeatPassword:repeatPasswordValue});
	}
	,emailChangedHandler:function(event){
		var emailValue=event.target.value;
		if(!this.validateInputValue(emailValue)){
			emailValue=null;
		}
		this.setState({email:emailValue});
	}
	,formSubmitHandler:function(event){
		event.preventDefault();
		console.log(this.state);
		if(this.isValidStateForSubmit()){
			AjaxSupport.post({
				url:'register-user',
				data:this.state,
				success:function(){
					console.log("success");
				},
				error:function(){
					console.log("failed");
				}
			});
			alert("Form is ready for submit");
		}
		else{
			alert("not");
		}
		
	}
	,isValidStateForSubmit:function(){
		return this.state.username && this.state.password && this.repeatPassword && this.email && (this.state.password===this.state.repeatPassword);
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