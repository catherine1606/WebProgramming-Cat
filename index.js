//這個function的功能是會自動偵測現在頁面，並讓header的標籤呈現灰底。
function detect(){
	if($('title').text() == "首頁")
	{
		$('li').each(function(index)
		{
			if($(this).text() == "首頁")
			{
				$(this).css('background','#f0f0f0');
			}
		});
	}
	if($('title').text() == "領養")
	{
		$('li').each(function(index)
		{
			if($(this).text() == "領養")
			{
				$(this).css('background','#f0f0f0');
			}
		});
	}
	if($('title').text() == "購物")
	{
		$('li').each(function(index)
		{
			if($(this).text() == "購物")
			{
				$(this).css('background','#f0f0f0');
			}
		});
	}
	if($('title').text() == "小遊戲")
	{
		$('li').each(function(index)
		{
			if($(this).text() == "小遊戲")
			{
				$(this).css('background','#f0f0f0');
			}
		});
	}
}