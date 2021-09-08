module.exports=function countAllFromTown(regNo,regPlace){
    const arr=regNo.split(',');
    var arrFiltered=[];
    
    for (var i=0;i<arr.length;i++){
      var arrRegNo=arr[i].trim();
      
      if(arrRegNo.startsWith(regPlace)){
        arrFiltered.push(arrRegNo); 
      } 
    }
  var countArrFiltered=arrFiltered.length;
  return countArrFiltered; 
  }