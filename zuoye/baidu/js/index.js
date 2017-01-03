/*右侧滑动栏*/
$("#product").hover(
    function() {
        $("#hide").show();

    },
    function () {
        $("#hide").hide();
  }
);
$("#hide").hover(
    function() {
        $("#hide").show();

    },
    function () {
        $("#hide").hide();
  }
);
/*登陆记录*/
$("#submit-ip").click(function(event) {
    var hao =$("#longin-text").val();
    console.log(hao);
    localStorage.setItem("logo",hao);
    alert("登陆成功~");
});