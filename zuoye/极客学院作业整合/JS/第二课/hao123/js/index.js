function change (e) {
    var tinct = document.getElementById('body-i');
    var nav1=document.getElementById('nav1');
    var nav2=document.getElementById("nav2");
    var navbar=document.getElementById("navbar");
	switch(e){
	         case 'yellow':
	          tinct.setAttribute("class", "clothing");
                    nav1.setAttribute("class", "navba1 gray-lucency col-md-1");
                    nav2.setAttribute("class", "navba1 gray-lucency col-md-1");
                    navbar.setAttribute("class", "navbar gray-lucency col-md-10");
                    break;
                    case 'red':
                    tinct.setAttribute("class", "rabbit");
                    nav1.setAttribute("class", "navba1 gray-lucency col-md-1");
                    nav2.setAttribute("class", "navba1 gray-lucency col-md-1");
                    navbar.setAttribute("class", "navbar gray-lucency col-md-10");
                    break 
                    case 'blue':
                    tinct.setAttribute("class", "blueness");
                    break;
                    case 'green':
                    tinct.setAttribute("class", "woman");
                    break;
	}
}
var display=1;
function clothing(){
    var con=document.getElementById("conceal");
    if (display==1) {
    con.setAttribute("class","conceal");
    display=0;
    }else{
        con.setAttribute("class","conceal con");
        display=1;
    }
}


function setCookie() {
   var cname="1";
    var  cvalue="2";
    var exdays="1000";
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();

    document.cookie = cname + "=" + cvalue + "; " + expires;
    alert(1);
}
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}