module.exports=function isFromBellville(letter){
    if (!letter){
        return "Please enter number plate"
    }
    return letter.startsWith("CY");
  }

