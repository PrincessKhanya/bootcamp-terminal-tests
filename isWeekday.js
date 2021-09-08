module.exports=function isWeekday(day){
    if (day.startsWith('Mon')||day.startsWith('Tues')||day.startsWith('Wed')||day.startsWith('Thur')||day.startsWith('Fri')){
      return true
    }else{
      return false
    }
  }