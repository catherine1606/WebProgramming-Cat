//這個function的功能是會自動偵測現在頁面，並讓header的標籤呈現灰底。
function detect(){
	if($('title').text() == "首頁")
	{
		$('li').each(function(index)
		{
			if($(this).text() == "首頁")
			{
				$(this).css('background','#ffbf00');
				$(this).css('color','#ffffff');
			}
		});
	}
	if($('title').text() == "領養")
	{
		$('li').each(function(index)
		{
			if($(this).text() == "領養")
			{
				$(this).css('background','#ffbf00');
				$(this).css('color','#ffffff');
			}
		});
	}
	if($('title').text() == "購物")
	{
		$('li').each(function(index)
		{
			if($(this).text() == "購物")
			{
				$(this).css('background','#ffbf00');
				$(this).css('color','#ffffff');
			}
		});
	}
	if($('title').text() == "小遊戲")
	{
		$('li').each(function(index)
		{
			if($(this).text() == "小遊戲")
			{
				$(this).css('background','#ffbf00');
				$(this).css('color','#ffffff');
			}
		});
	}
}
//選單按鈕的陰影動畫。參考網站：https://bitstorm.org/jquery/shadow-animation/
$('.menu_option li').each(function(index){
	$(this).mouseenter(function(){
		$(this).animate({boxShadow: '0 0 5px #8f8f8f'});
	});
	$(this).mouseleave(function(){
		$(this).animate({boxShadow: '0 0 0px #ffffff'}, 'fast');
	});
});
//會員icon變色
$('#member').each(function(index){
	$(this).mouseenter(function(){
		$(this).attr('src','./index_photo/member2.png');
	});
	$(this).mouseleave(function(){
		$(this).attr('src','./index_photo/member1.png');
	});
});

$('#big').change(function(){//照片自動切換
	$('#photo').css('background','#123456');
});

$(function(){
	var timer;

	$('.small').click(function(){
		clearTimeout(timer);
		$('.selected').toggleClass('selected');

		$(this).toggleClass('selected');

		$('#big').attr('src', $(this).attr('src'));
		//看看要不要寫fadein
		
		var next = $('.small').index(this) + 1;

		if(next == $('.small').length) next = 0;

		timer=setTimeout(function(){
			$('.small')[next].click()
		}, 3000);
	});
	$('.small')[0].click();
});

//購物遮罩
$('#div_star1').click(function(){
	$('mask_star1').css('display','inline-block');
});
