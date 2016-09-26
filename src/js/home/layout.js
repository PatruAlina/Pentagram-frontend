var React=require('react');

var HomePage=React.createClass({
	render:function(){
		return(
			<table className="table">
				<thead>
				<tr>
					<th>#</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Username</th>
				</tr>
				</thead>
				<tbody id="user-data-container">
				</tbody>
			</table>
		);
	}
});

module.exports=HomePage;