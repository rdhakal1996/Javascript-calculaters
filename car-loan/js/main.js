function myfunction() {
    var billAmt = document.getElementById("billAmt").value;
    var sevice = document.getElementById("service").value;
    var people = document.getElementById("people").value;
    var tips = billAmt * sevice;
    var total = parseInt(billAmt) + tips;
    //below formula gives three digit or 3 decimal point.
    // you can change as per your requirement.just add 0 for more
    total = Math.round(total * 1000) / 1000;
    var amtTotal = total / people;
    amtTotal = Math.round(amtTotal * 100) / 100;
    amtTotal = total.toFixed(2);
    if (billAmt < 0 || billAmt === "") {
        document.getElementById("amtError").style.display = "block";
    } else {
        document.getElementById("amtError").style.display = "none";
        document.getElementById("output").style.display = "block";
        document.getElementById("total").innerHTML = total;
        document.getElementById("show").innerHTML = amtTotal;
    }
    if (people < 0 || people === "") {
        document.getElementById("peopleError").style.display = "block"; 
    }

}
document.getElementById("submit").onclick = function() {
myfunction();
}
     