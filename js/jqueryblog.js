   $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40barisdng26" , function(data){
  	$.each(data, function(key,value){
  		var row="";
  		row +=value.feed;
  		$("#title").append(row);
  	})
  });