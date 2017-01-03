/*全局变量*/
var performance;
/*计算学生成绩的函数*/
function grade () {
/*获取input值*/
   performance= document.getElementById("grade").value;
/*转换成int类型*/
   var performance= parseInt(performance);
   if (performance>=0&&performance<=10) {
         document.getElementById("report").innerText="您是学习成绩综合评分为十等生";
   }else if(performance>10&&performance<=20){
        document.getElementById("report").innerText="您是学习成绩综合评分为九等生";
   }else if (performance>20&&performance<=30) {
        document.getElementById("report").innerText="您是学习成绩综合评分为八等生";
   }else if (performance>30&&performance<=40) {
        document.getElementById("report").innerText="您是学习成绩综合评分为七等生";
   }else if (performance>40&&performance<=50) {
        document.getElementById("report").innerText="您是学习成绩综合评分为六等生";
   }else if (performance>50&&performance<=60) {
        document.getElementById("report").innerText="您是学习成绩综合评分为五等生";
   }else if (performance>60&&performance<=70) {
        document.getElementById("report").innerText="您是学习成绩综合评分为四等生";
   }else if( performance>70&&performance<=80){
        document.getElementById("report").innerText="您是学习成绩综合评分为三等生";
   }else if (performance>80&&performance<=90) {
        document.getElementById("report").innerText="您是学习成绩综合评分为二等生";
   }else if (performance>90&&performance<=100) {
        document.getElementById("report").innerText="您是学习成绩综合评分为一等生";
   }else{
        document.getElementById("report").innerText="您的输入的成绩有误，请重新输入！！！";
   }
}
