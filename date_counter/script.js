function Counter(datestring) {
    var datebegin = new Date(datestring);
    if (isNaN(datebegin.getTime())) {
        return "invalid date format";
    }

    var datetoday = new Date();

    var datetoday = new Date();
    var startyear = datebegin.getFullYear();
    var startmonth = datebegin.getMonth();
    var startday = datebegin.getDay();
    var starthour = datebegin.getHours();
    var startminutes = datebegin.getMinutes();
    var startseconds = datebegin.getSeconds();
}