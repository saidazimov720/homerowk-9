var inputdate = prompt("Enter the date:");
var inputbpm = prompt("Enter the bpm:");

if (inputdate && inputbpm) {
    var datestart = new Date(inputdate);
    var bpm = parseFloat(inputbpm);

    if (!isNaN(datestart.getTime()) && !isNaN(bpm) && bpm > 0) {
        var today = new Date();
        var mlscdperday = 24 * 60 * 60 * 60 * 1000;
        var difftime = today - datestart;
        var diffday = difftime / mlscdperday;
        var totalbeats = bpm * 60 * 24 * diffday;
        alert(`Total heartbeats from: ${datestart.toDateString()} to today: ${totalbeats}`)
    } else {
        
    }

} else {

}