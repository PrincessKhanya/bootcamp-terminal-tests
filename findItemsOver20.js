module.exports=function findItemsOver20(itemList){
    var filteredObject=[];
    for (var i in itemList){
      var listItem=itemList[i];
      console.log(listItem)
      if(listItem.qty>20){
        filteredObject.push(listItem)
      }
    }
   return filteredObject;
  }