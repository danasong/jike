/*全局变量*/
var priceone = 0;/*第一个参数*/
var pricetwo = 0;/*第二个参数*/
var operatorfu=" ";/*运算符*/
var  resulta=0;/*结果集*/
var pricesr=0;
/*数字输入*/
function one  (i) {
    var a = document.getElementById('one').innerText;
    var price= document.getElementById("price");
    var price1= price.value;
    price.value=price1+i;
}
/*运算符*/
function operation(i){
    var price= document.getElementById("price");
  if (operatorfu!=" ") {
      result();
      operatorfu=i;
      pricesr=price.value;
      price.value="";
    }else{
    priceone=price.value;
    operatorfu=i;
    price.value="";
   }
}
/*结果集1*/
function result(){
      var price= document.getElementById("price");
      priceone= price.value;
      if (resulta!=0) {
        pricetwo=pricesr;
      }else{
        pricetwo=price.value;
      }

   if (pricetwo==0&&operatorfu=="/") {
        price.value="除数不能为0";
    }else{
      /*var result= priceone+operatorfu+pricetwo;*/
      /*result=eval(result);*/
      switch  (operatorfu){
         case "+" :
              resulta=Number(priceone)+Number(pricetwo)
              break;
         case "-" :
               resulta=Number(priceone)-Number(pricetwo)
              break;
         case "*" :
               resulta=Number(priceone)*Number(pricetwo)
              break;
         case "/" :
               resulta=Number(priceone)/Number(pricetwo)
              break;
      }
      resulta = parseFloat(resulta).toFixed(5);
      price.value=resulta;
  }
}
/*结果集2*/
function result2(){
      var price= document.getElementById("price");
      pricetwo=price.value;

   if (pricetwo==0&&operatorfu=="/") {
        price.value="除数不能为0";
    }else{
      /*var result= priceone+operatorfu+pricetwo;*/
      /*result=eval(result);*/
      switch  (operatorfu){
         case "+" :
              resulta=Number(priceone)+Number(pricetwo)
              break;
         case "-" :
               resulta=Number(priceone)-Number(pricetwo)
              break;
         case "*" :
               resulta=Number(priceone)*Number(pricetwo)
              break;
         case "/" :
               resulta=Number(priceone)/Number(pricetwo)
              break;
      }
      resulta = parseFloat(resulta).toFixed(5);
      price.value=resulta;
  }
}
/*归0*/
function c(){
    priceone=0;
    pricetwo=0;
    operatorfu=" ";
    pricesr=0;
    resulta=0;
    var price= document.getElementById("price");
    price.value="";
}
