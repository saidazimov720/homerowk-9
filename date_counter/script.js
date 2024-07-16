function counter(datestring) {
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

    if (diffseconds < 0) {
        diffseconds += 60;
        diffminutes--;
    }

    if (diffminutes < 0) {
        diffminutes += 60;
        diffhours--;
    }

    if (diffhours < 0) {
        diffhours += 24;
        diffdays--;
    }

    if (diffdays < 0) {
        var previousmonths = datetoday.getMonth() - 1;
        if (previousmonths < 0) {
            previousmonths = 11;
            diffyear--
        }

        diffdays += monthtoday(previousmonths, datetoday.getFullYear());
        diffmonths--;
    }

    if (diffmonths < 0) {
        diffmonths += 12;
        diffyear--;
    }

    return { diffyear, diffmonths, diffdays, diffhours, diffminutes, diffseconds };
}

var datestring = prompt("Enter the date and time:");
var diffdate = counter(datestring);

if (typeof diffdate === 'string') {
    console.log(diffdate);
} else {
    console.log(`from ${datestring}: `);
}