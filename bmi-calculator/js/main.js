function myfunction() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var total = (weight / (Math.pow(height, 2))) * 10000
    total = Math.round(total * 100) / 100;
    total = total.toFixed(1);
    if (height < 0 || height === "") {
        document.getElementById("heightError").style.display = "block";
    }
    if (weight < 0 || weight === "") {
        document.getElementById("weightError").style.display = "block";
    } else {
        document.getElementById("heightError").style.display = "none";
        document.getElementById("output").style.display = "block";
        document.getElementById("total").innerHTML = total;
    }

    if (total <= 18.6) {
        document.getElementById("under").style.display = "block";
    } else if (total > 18.6 & total <= 24.9) {
        document.getElementById("normal").style.display = "block";
    } else if (total>24.9){
        document.getElementById("over").style.display = "block";
    } else {
        document.getElementById("under").style.display = "none";
        document.getElementById("normal").style.display = "none";
        document.getElementById("over").style.display = "none";
    }
}
document.getElementById("submit").onclick = function() {
myfunction();
}
     