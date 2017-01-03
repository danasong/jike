var i=-749;
function carousel() {
	var obj=document.getElementById("carousel_div");
	var dot1=document.getElementById("dot1");
	var dot2=document.getElementById("dot2");
	var dot3=document.getElementById("dot3");
	var dot4=document.getElementById("dot4");
	if (i>-750) {
		i=-750;
	}
    if(i<-2250){
    	i=0;
        dot4.setAttribute("class","dot");
        dot1.setAttribute("class","dot se");
    }
    if(i==-750) {
        dot1.setAttribute("class","dot");
        dot2.setAttribute("class","dot se");
    }
    if (i==-1500) {
        dot2.setAttribute("class","dot");
        dot3.setAttribute("class","dot se");
    }
    if(i==-2250){
        dot3.setAttribute("class","dot");
        dot4.setAttribute("class","dot se");
    }
    obj.style.transform="translate3d("+i+"px, 0px, 0px)";
	i+=-750;
}
setInterval("carousel()",3000);
/*底部轮播*/
function cengcss(){
	var obj =document.getElementById("searchbox");
	obj.setAttribute("class","searchbox scale");
}

function conceal(){
	var obj =document.getElementById("searchbox");
	obj.setAttribute("class","searchbox");
}

var sdelay=0;
function returnTop() {
 window.scrollBy(0,-100);
 if(document.body.scrollTop>0) { 
  sdelay= setTimeout('returnTop()',50);
 }
}
/*头部hover*/
$(".head_centre").children("nav").children("ul").children("li").hover(
    function() {
        $(this).children(".arrow-icon").attr("class","arrow-icon rotate animation done ");
    },
    function () {
        $(this).children(".arrow-icon").attr("class","arrow-icon");
  }
);