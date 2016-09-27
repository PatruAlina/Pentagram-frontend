var React=require('react');


var LoginPage=React.createClass({
	getInitialState: function(){
		return{
			username:null,
			password:null
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
	,formSubmitHandler:function(event){
		event.preventDefault();
		console.log(this.state);
		if(this.isValidStateForSubmit()){
			AjaxSupport.get; //AjaxSupport.post({url:'register-user',data:this.state,success:function(){console.log("success");},error:function(){console.log("failed");})
			alert("Form is ready for submit");
		}
		else
		{
			alert("not");
		}
		
	}
	,isValidStateForSubmit:function(){
		return this.state.username && this.state.password && (this.state.password===this.state.repeatPassword);
	}
	,render:function(){
		return(
			<div>
				<div>
					<h1>Welcome guest</h1>
				</div>
				<form>
					<div>
						<div>
							<label >Username  </label>
							<input type="text" name="username" onChange={this.usernameChangedHandler}/>
						</div>
						<div>
							<label>Password  </label>
							<input type="password" name="password"/>
						</div>
						<button name="loginButton" type="submit" onClick={this.formSubmitHandler} >Login</button> 
					</div>
					<div className="link">
						<h2>
							Don't have an account yet?   
							<a href="http://localhost:3001/#/register" target="_top">
								Register!
							</a>
						</h2>
					</div>
				</form>
			</div>
		);
	}
});

module.exports=LoginPage;