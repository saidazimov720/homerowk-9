var inputdate = prompt("Enter the date:");
var inputbpm = prompt("Enter the bpm:");

if (inputdate && inputbpm) {
    var datestart = new Date(inputdate);
    var bpm = parseFloat(inputbpm);

    if (!isNaN(datestart.getTime()) && !isNaN(bpm) && bpm > 0) {
        
    } else {
        
    }

} else {
    
}