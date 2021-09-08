module.exports=function yearsAgo(oldYear){
    var currentYear=new Date();
    var newYear=currentYear.getFullYear();
    var differenceOfYears=newYear-oldYear;
    return differenceOfYears;
  }