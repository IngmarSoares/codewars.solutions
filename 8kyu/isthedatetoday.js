function isToday(date) {
let dat = new Date()
if (((dat.getDate() == date.getDate())) && ((dat.getDay() == date.getDay()))  ){
    return true
    } else return false
}
