var React=require('react');

var HomePage=React.createClass({
	render:function(){
		return(
			<div>
				<h1>Pentagram</h1>
				<div className="content">
					<ul className="flex-container">
					  <li className="flex-item"><img src="http://i.telegraph.co.uk/multimedia/archive/03571/potd-squirrel_3571152k.jpg"/></li>
					  <li className="flex-item"><img src="http://i.telegraph.co.uk/multimedia/archive/03571/potd-squirrel_3571152k.jpg"/></li>
					  <li className="flex-item"><img src="http://i.telegraph.co.uk/multimedia/archive/03571/potd-squirrel_3571152k.jpg"/></li>
					  <li className="flex-item"><img src="http://i.telegraph.co.uk/multimedia/archive/03571/potd-squirrel_3571152k.jpg"/></li>
					  <li className="flex-item"><img src="http://i.telegraph.co.uk/multimedia/archive/03571/potd-squirrel_3571152k.jpg"/></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports=HomePage;