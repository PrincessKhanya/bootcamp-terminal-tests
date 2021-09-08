module.exports= function countRegNumber(regNo){
    if (!regNo){
        return 'Please input registration number';
    }
    return regNo.split(",").length;
  }