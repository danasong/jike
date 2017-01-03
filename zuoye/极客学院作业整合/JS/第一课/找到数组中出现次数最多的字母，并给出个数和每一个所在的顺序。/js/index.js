function add(){
var arr   = ["a","x","b","d","m","a","k","m","p","j","a"];
    var amount = {};/*数量*/
    var seat   = {};/*位子*/
 /*   遍历arr，统计每个字母出现次数且记录位置*/
    arr.forEach(function(element, index){
        if(amount[element]){
            amount[element] ++;
            seat[element] += ","+index; 
        } else {
            amount[element] = 1;
            seat[element]   = ""+index;
        }
    });
 console.log(amount);
 console.log(seat);
/*最多的是哪个*/
    var max = 0;
    var letter;
    for(i in amount){
        if(amount[i] > max ){
            max    = amount[i];
            letter = i; 
        }
    }
/*有多少个*/
  var quantity=0;
   for ( i in arr ){
      if(arr[i]==letter){
         quantity++;
      }
   }

    var a=   document.getElementById('letter');
    var b=   document.getElementById("how");
    var c=   document.getElementById("seat");
    a.innerText=letter;
    b.innerText=quantity;
    var s =seat[letter];
    c.innerText=s;
}