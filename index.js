function detect(){
	$('li').each(function(index){
		if($(this).text() == "首頁"){
			$(this).css('background','#ccc');
		}
	}
}