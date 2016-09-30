var React=require('react');

var HomePage=React.createClass({
	render:function(){
		return(
			<div>
				<h1>Pentagram</h1>
				<div className="container">
					<div className="picture">
							<img className="imgPosted" src="http://www.freeiconspng.com/uploads/blue-heart-icon-png-17.png"/>
						<div className="commentAndLike">
							<div className="left">firstlabel</div>
							<div className="right">secondlabel</div>
							<div className="likePic">  
								<img className="like" src="http://pngimg.com/upload/heart_PNG680.png"/>
							</div>
							<div className="commentPic">
								<img className="comment" src="https://cdn2.bigcommerce.com/server4600/tiqq0q/product_images/uploaded_images/comment-icon.png"/>
							</div>
						</div>	
					</div>
					<div className="picture">
						<img className="imgPosted" src="https://cdn2.bigcommerce.com/server4600/tiqq0q/product_images/uploaded_images/comment-icon.png"/>
						<div className="commentAndLike">
							asda
							<div className="likePic">
								<img className="like" src="http://pngimg.com/upload/heart_PNG680.png"/>
							</div>
							<div className="commentPic">
								<img className="comment" src="https://cdn2.bigcommerce.com/server4600/tiqq0q/product_images/uploaded_images/comment-icon.png"/>
							</div>
						</div>	
					</div>
					<div className="picture">
						<img className="imgPosted" src="http://static.boredpanda.com/blog/wp-content/uploads/2014/05/flowers-look-like-animals-people-monkeys-orchids-pareidolia-30.jpg"/>
						<div className="commentAndLike">
							asda
							<div className="likePic">
								<img className="like" src="http://pngimg.com/upload/heart_PNG680.png"/>
							</div>
							<div className="commentPic">
								<img className="comment" src="https://cdn2.bigcommerce.com/server4600/tiqq0q/product_images/uploaded_images/comment-icon.png"/>
							</div>
						</div>	
					</div>
					<div className="picture">
						<img className="imgPosted" src="https://cdn2.bigcommerce.com/server4600/tiqq0q/product_images/uploaded_images/comment-icon.png"/>
						<div className="commentAndLike">
							asda
							<div className="likePic">
								<img className="like" src="http://pngimg.com/upload/heart_PNG680.png"/>
							</div>
							<div className="commentPic">
								<img className="comment" src="https://cdn2.bigcommerce.com/server4600/tiqq0q/product_images/uploaded_images/comment-icon.png"/>
							</div>
						</div>	
					</div>
					<div className="picture">
						<img className="imgPosted" src="http://www.adweek.com/socialtimes/files/2014/12/twitter-bird-heart.png"/>
						<div className="commentAndLike">
							asda
							<div className="likePic">
								<img className="like" src="http://pngimg.com/upload/heart_PNG680.png"/>
							</div>
							<div className="commentPic">
								<img className="comment" src="https://cdn2.bigcommerce.com/server4600/tiqq0q/product_images/uploaded_images/comment-icon.png"/>
							</div>
						</div>	
					</div>
				</div>
			</div>
		);
	}
});

module.exports=HomePage;