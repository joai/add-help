$(function(){
	//×ÝÏò¹ö¶¯
	var len=$(".news").find("li").length;
	if(len>9){
	var top=parseInt($(".news").find("ul").css("margin-top"));
	var con=$(".news").find("ul").html();
	$(".news").find("ul").css("height",48*len+"px").html(con+con);
	var t;
	function play(){
		top=top-24;
		if(top==-24*len){top=0}
		$(".news").find("ul").css("margin-top",top+"px");
	}
	$(".news").find("ul").hover(function(){
		clearInterval(t);
	},function(){
		clearInterval(t);
		t=setInterval(play,3000);
	});
	t=setInterval(play,3000);
	}

	//ºáÏò¹ö¶¯
	function show_img(obj,wid,l){
		var len_s=$(obj).find("li").length;
		if(len_s>l){
		$(obj).css("width",wid*len_s+"px");
		var left=parseInt($(obj).css("margin-left"));
		var con_s=$(obj).html();
		$(obj).css("width",2*wid*len_s+"px").html(con_s+con_s);
		var s;
		function show(){
			left=left-1;
			if(left==-wid*len_s){left=0}
			$(obj).css("margin-left",left+"px");
		}
		$(obj).hover(function(){
			clearInterval(s);
		},function(){
			clearInterval(s);
			s=setInterval(show,20);
		});
		s=setInterval(show,20);
		}
	}
	show_img(".img-scroll-1",230,4);
	show_img(".img-scroll-2",230,4);
	show_img(".img-scroll-3",230,4);
	show_img(".con3-img-show",155,4);

	//±ùÏäÍ¼Æ¬¹ö¶¯
	var i=1;
	function scroll(){
		$(".icebox-list-show").find("li").removeAttr("id").eq(i).attr("id","hover-"+i);
		$(".icebox-list-img").find("img").hide().eq(i).show();
		i=i+1;
		if(i==4){i=0}
	}
	$(".icebox-list-show").find("li").hover(function(){
		clearInterval(p);
		var q=$(".icebox-list-show").find("li").index($(this)[0]);
		$(".icebox-list-show").find("li").removeAttr("id").eq(q).attr("id","hover-"+q);
		$(".icebox-list-img").find("img").hide().eq(q).show();
		i=q;
	},function(){
		clearInterval(p);
		p=setInterval(scroll,1000);
	})
	$(".icebox-list-img").hover(function(){
		clearInterval(p);
	},function(){
		clearInterval(p);
		p=setInterval(scroll,2500);
	})
	p=setInterval(scroll,2500);

	
})