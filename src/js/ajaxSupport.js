var baseUrl="http://localhost:3001";

var prepareUrl:function(url){
	if(!url.trim().startsWith("http")){
		return baseUrl+url;
	}
	return url;
}

var ajaxSupport={
	get:function(options){
		options.type="GET";
		options.url=prepareUrl(options.url);
		return $.ajax(options);
	}
	,post:function(options){
		options.type="POST";
		options.contentType="application/json";
	}
	,put:function(options){
		options.type="PUT";
	}
	,delete:function(options){
		options.type="DELETE";
	}
}

module.exports=ajaxSupport;