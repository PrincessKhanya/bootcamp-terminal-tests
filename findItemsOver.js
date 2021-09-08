module.exports=module.exports=function findItemsOver20(itemList,n){
    var filteredObject=[];
    for (var i in itemList){
      var listItem=itemList[i];
      console.log(listItem)
      if(listItem.qty>n){
        filteredObject.push(listItem)
      }
    }
   return filteredObject;
  }