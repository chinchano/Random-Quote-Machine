 $(document).ready(function() {

   $("#newQuote").on("click", function() {
 		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=theBigComeback&callback=?")
 	});
 
   
 });

 function theBigComeback(response) {
 	var html = "";
 	var text;
 	var author;
 	$.each(response, function(key, val) {
 		text = response.quoteText;
 		text = text.replace(";", ",");
 		author = response.quoteAuthor;
 		html = document.getElementById('quoteText').innerHTML = '"' + text + '"' + ' -' + author;
 		$('#tweetIt').attr('href','https://twitter.com/intent/tweet?text=' + '"' + text + '"' + '  -' + author);
 	});
 
   
   
 	$(function(){
 		$('#newQuote').click(function(){
 			theBigComeback();
 		});
 	});
   
}