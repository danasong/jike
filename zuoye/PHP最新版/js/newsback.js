$(document).ready(function() {
	$(".head_div").click(function(){
		var dip=$(this).next("ul");
		if (dip.css("display")=="none") {
			$(this).next("ul").slideDown("4000");
			$(this).children(".icon").attr("class","icon rotate_icon");
		}else{
			$(this).next("ul").slideUp("4000");
			$(this).children(".icon").attr("class","icon");
		}
	});
	$(".ul_man ul li").click(function(){
		var dips=$(this).children("a");
		$(".ul_man ul li").css("background","#fff");
		$(".ul_man ul li").children("a").css("color","#000");
		$(this).css("background","#052535");
		$(this).children("a").css("color","#fff");
	});
	/*新闻列表*/
	var $newsTable=$('#newstable #tbody2');
	refreshNews();
	function refreshNews(){
		$newsTable.empty();
		$.ajax({
			url: 'server/selectnews.php',
			type: 'post',
      data:{newslist:"list"},
			dataType: 'json',
			success:function(data){	
				data.forEach(function(item,index,array){
					var $tdid=$("<td>").html(item.id);
					var $tdname=$("<td>").html(item.newsname);
					var $tdtext=$("<td>").html(item.newstext);
					var $tdimg=$("<td>").html(item.newsimg);
					var $tddate=$("<td>").html(item.newsdate);
					var $tdsource=$("<td>").html(item.newssource);
					var $tdctrl=$("<td>");
					var $btnup=$("<button>").addClass('btn  btn-sm btn-primary').html("修改");
					var $btndele=$("<button>").addClass('btn  btn-sm btn-danger').html("删除");
					$tdctrl.append($btnup,$btndele);
					if (item.id%2==0) {
					    var $tRow=$("<tr>").addClass("info");
					}else{
					     var $tRow=$("<tr>").addClass("warning");
					}
					$tRow.append($tdid,$tdname,$tdtext,$tdimg,$tddate,$tdsource,$tdctrl);
					$newsTable.append($tRow);
				})
			}
		})
		
}
	/*增加新闻*/
    $("#submits").click(function(event) {
       event.preventDefault();
       var newsname= $("#newsname");
       var newstext=$("#newstext");
       var newssuccess=$("#newssuccess");
       var newsdate = $("#newsdate");
       var newsimg= $("#newsimg");
       if (!newsname.val()=="请选择"||newstext.val()==""||newssuccess.val()==""||newsdate.val()==""||newsimg.val()=="") 
       {
       		if (newsname.val()=="请选择") {
       			newsname.parent().addClass('has-error');
       		}else{
       			newsname.parent().removeClass('has-error');
       		}
       		if (newstext.val()=="") {
       			newstext.parent().addClass('has-error');
       		}else{
       			newstext.parent().removeClass('has-error');
       		}
       		if (newssuccess.val()=="") {
       			newssuccess.parent().addClass('has-error');
       		}else{
       			newssuccess.parent().removeClass('has-error');
       		}
       		if (newsdate.val()=="") {
       			newsdate.parent().addClass('has-error');
       		}else{
       			newsdate.parent().removeClass('has-error');
       		}
       		if (newsimg.val()=="") {
       			newsimg.parent().addClass('has-error');
       		}else{
       			newsimg.parent().removeClass('has-error');
       		}
       	}else{
       		var jsonNews={
       			newsname:$("#newsname").val(),
       			newstext:$("#newstext").val(),
       			newssuccess:$("#newssuccess").val(),
       			newsdate:$("#newsdate").val(),
       			newsimg:$("#newsimg").val()
       		}
       		$.ajax({
       			url: 'server/insenews.php',
       			type: 'post',
       			data: jsonNews,
       			dataType:"json",
       			success:function(data) {
	       					if (data["success"]=="OK") {
	       					$("#inset_p").html("添加成功");
	       					$("#inset_divs").modal("show");
	       				}else{
	       					$("#inset_p").html("添加失败");
	       					$("#inset_divs").modal("show");
	       				}
       			}
       		})
       		
       	}
    })
  $("#inset_bttns").click(function() {
  		$("#inset_divs").modal("hide");
  		
  });
  /*删除新闻*/
  var deleteid=null;
  $("#tbody2").on("click",".btn-danger",function(eq) {
  		$("#inset_p").html("警告删除后无法恢复");
  		$("#inset_div").modal("show");
  		deleteid = $(this).parent().prevAll().eq(5).html();
  });
  $("#inset_bttn").click(function(e) {
   	if (deleteid!=null) {
   		$.ajax({
       			url: 'server/delectnews.php',
       			type: 'post',
       			data: {newsid:deleteid},
       			dataType:"json",
       			success:function(data) {
		   				$("#inset_div").modal("hide");
		   				refreshNews();
       			}
       		})
   	}
  });
  /*修改新闻*/
  var updateid=null;
  var updatename=null;
  var updatetext=null;
  var updatesucces=null;
  var updatedate=null;
  var updateimg=null;
  $("#tbody2").on("click",".btn-primary",function(eq) {
  		$("#update_div").modal("show");
  		$("#update_div .content_div_man").css("margin-top","100px");
  		updateid = $(this).parent().prevAll().eq(5).html();
  		updatename = $(this).parent().prevAll().eq(4).html();
  		updatetext = $(this).parent().prevAll().eq(3).html();
  		updatesucces = $(this).parent().prevAll().eq(0).html();
  		updatedate = $(this).parent().prevAll().eq(1).html();
  		updateimg = $(this).parent().prevAll().eq(2).html();
  		$("#newsname ").val(updatename);
  		$("#newstext").val(updatetext);
  		$("#newssuccess").val(updatesucces);
  		$("#newsdate").val(updatedate);
  		$("#newsimg").val(updateimg);
  })
  $("#upsubmit").click(function(e) {
  		e.preventDefault();
  		var newsname=$("#newsname").val();
  		var newstext=$("#newstext").val();
  		var newssuccess=$("#newssuccess").val();
  		var newsdate=$("#newsdate").val();
  		var newsimg=$("#newsimg").val();
  		var updateData={
  			id:updateid,
  			newsname:newsname,
  			newstext:newstext,
  			newssuccess:newssuccess,
  			newsdate:newsdate,
  			newsimg:newsimg
  		}
  		if (updateid!=null) {
  			$.ajax({
  				url:'server/updatenews.php',
  				type:'post',
  				data:updateData,
  				dataType:'json',
  				success:function(data) {
  					$("#update_div").modal("hide");
		   			refreshNews();
  				}
  			})
  		}
  });

});

