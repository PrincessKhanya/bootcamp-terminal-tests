module.exports=function mostProfitableDepartment(data){

    var departmentSale=0;
    var departmentName=" ";
    var departmentMap={};
  
    for (var i=0;i<data.length;i++){
      var item=data[i];
      departmentMap[item.department]=0;
    }
  
    for (var i in data){
      var item=data[i];
      var totalDepartmentSale=departmentMap[item.department];
      totalDepartmentSale+=item.sales;
      departmentMap[item.department]=totalDepartmentSale
    }
  
    for(var i in departmentMap){
      var item=departmentMap[i];
   
      if(item>=departmentSale){
        departmentSale=item;
        departmentName=i;
      }
    }
  return departmentName
  }