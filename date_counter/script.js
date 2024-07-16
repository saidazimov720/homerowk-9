function Counter(datestring) {
    var datebegin = new Date(datestring);
    if (isNaN(datebegin.getTime())) {
        return "invalid date format";
    }

    var datetoday = new Date();

    
    var startyear = datebegin.getFullYear();
    var startmonth = datebegin.getMonth();
    var startday = datebegin.getDay();
    var starthour = datebegin.getHours();
    var startminutes = datebegin.getMinutes();
    var startseconds = datebegin.getSeconds();
    var yeartoday = datetoday.getFullYear();
    var monthtoday = datetoday.getMonth();
    var daystoday = datetoday.getDay();
    var hourstoday = datetoday.getHours();
    var minutestoday = datetoday.getMinutes();
    var secondstoday = datetoday.getSeconds();
    
}    