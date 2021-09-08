module.exports=function countAllPaarl(regNo){
    const arr=regNo.split(',');
    var arrPaarl=[];

    for (var i=0;i<arr.length;i++){
      var arrRegNo=arr[i].trim();

      if(arrRegNo.startsWith('CJ')){
        arrPaarl.push(arrRegNo); 
      } 
    }
  var arrPaarlCount=arrPaarl.length;
  return arrPaarlCount
  } 