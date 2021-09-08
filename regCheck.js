module.exports=function regCheck(regNo,regPlace){

    if (regNo.startsWith(regPlace)){
        return false;
    }
    return regNo.endsWith(regPlace);
  }