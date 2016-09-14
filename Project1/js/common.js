$(function(){
	$('.Mycontainer ul li').mouseover(function(){
		$(this).stop().animate({'margin-top':'-10px','height':'50px'},600);
	});
	$('.Mycontainer ul li').mouseout(function(){
		$(this).stop().animate({'margin-top':'0px','height':'40px'},600);
	});
	$('#about_content .left').animate({'margin-left':'40px'},600);
	$('#about_content img').animate({'margin-top':'0px'},600);
	$('.content h1').animate({'opacity':'1'},600);
	$('.car').animate({'opacity':'1'},600);
	$('.car .left').animate({'margin-left':'10px'},600);
	$('.car .right').animate({'margin-right':'10px'},600);
	$('.content table').animate({'opacity':'1'},600);
});