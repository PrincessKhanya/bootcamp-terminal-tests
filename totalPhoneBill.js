module.exports=function totalPhoneBill(string){
    var arr=string.split(",");
    var totalBill=0
  
    for (var i=0;i<arr.length;i++){
      var arr1=arr[i].trim();
      if(arr1.includes("call")){
        totalBill+=2.75
      }else if(arr1.includes("sms")){
        totalBill+=0.65
      }
    }
  return "R"+totalBill.toFixed(2)  
  }