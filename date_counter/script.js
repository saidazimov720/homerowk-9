function Counter(datestring) {
    var datebegin = new Date(datestring);
    if (isNaN(datebegin.getTime())) {
        return "invalid date format";
    }
}