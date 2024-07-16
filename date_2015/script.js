function minutesCounter(datestring) {
    var datebegin = new Date(datestring);
    var datetoday = new Date();
    var differencetime = datetoday.getTime() - datebegin.getTime();
    var differenceminutes = (differencetime / 1000) / 60;
}