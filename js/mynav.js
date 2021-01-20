// JavaScript Document
var navinfo = {
	'Google': 'https://www.google.com',
	'GitHub': 'https://github.com',
	'XDA Forum': 'https://forum.xda-developers.com/',
	'RaspberryPi Forum': 'https://www.raspberrypi.org/forums/',
	'NameBeta': 'https://namebeta.com/',
	'Blog Console': 'https://inotes.one/wp-admin',
	'VPS Console': 'https://inotes.one:8989/login',
	'SISE MIS': 'http://class.sise.com.cn:7001/sise/login.jsp',
	'Alibaba Console': 'https://home.console.aliyun.com/',
};
 


$(function(){
	"use strict";
	var flag=0;
	var rowflag=1;
	var rowid='';
	for (var key in navinfo){//遍历键值对
		if(navinfo.hasOwnProperty(key)) {
			if(flag%3===0){
				rowid='navrow'+rowflag;
				$('#navbody').append('<div class="row" id="'+ rowid +'"><div class="col"></div></div>');
				rowflag++;
			}
			$('#'+rowid).append('<div class="col-md-3 col-sm-2 card mx-1 my-2" id="'+key+'"><div class="card-body"><p class="m-auto">'+key+'</p></div></div><div class="col"></div>');
			flag++;
		}
	}
	setTimeout(function(){$('#navtitle').fadeIn(1500);},200);
	setTimeout(function(){$('#navtitle').animate({left:"10%"},200);},200);
	setTimeout(function(){$('#t1').animate({fontSize:"2em"},400,function(){
		setTimeout(function(){$('#t1').after('<span style="font-weight: normal;display:none;" id="t3">  Self Website Navigation</span>');
							 setTimeout(function(){$("#t3").fadeIn(1000,function(){
								 setTimeout(function(){
									 $('#t2').css({"color":"red","text-shadow":"1px 1px 1px grey"});
								 },800);
							 });},100);
							 },200);
		
	});},2000);
	setTimeout(function(){$('#navbody').fadeIn(2000);},500);
	$('.card').click(function(){
		$(location).attr('href',navinfo[this.id]);
	});
		
});	