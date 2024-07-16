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

    var diffyear = yeartoday - startyear;
    var diffmonths = monthtoday - startmonth;
    var diffdays = daystoday - startday;
    var diffhours = hourstoday - starthour;
    var diffminutes = minutestoday - startminutes;
    var diffseconds = secondstoday - startseconds;

    var totalcounts = (diffyear * 365 * 24 * 60) + 
                      (diffmonths * 30 * 24 * 60) + 
                      (diffdays * 24 * 60) + 
                      (diffhours * 60) + 
                      diffminutes + 
                      (diffseconds / 60);
}    