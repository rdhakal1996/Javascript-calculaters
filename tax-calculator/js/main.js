

 function payrollPayment(){
    var stateName = document.getElementById("stateName").value;
    
    if(stateName ==="0"){
    document.getElementById("stateError").style.display = "block";
    document.getElementById("stateDiv").style.display = "none";
    }
    if(stateName !== "0"){
    document.getElementById("stateError").style.display = "none";
    document.getElementById("stateDiv").style.display = "block";
    }
    if(stateName==="Texas"){
    document.getElementById("stateDiv").style.display = "none";
    }
    
    var hourWorked = document.getElementById("hrNum").value;
    
    
    if(hourWorked < 0 || hourWorked === ""){
    document.getElementById("hrNumberError").style.display = "block";
    }
    if(hourWorked > 0){
    document.getElementById("hrNumberError").style.display = "none";
    }
    
    var payRate = document.getElementById("payRate").value;
    
    var rateOption = document.getElementById("rateOption").value;
    if(payRate < 0  || payRate === ""){
    document.getElementById("payRateError").style.display = "block";
    }
    if(payRate > 0){
    document.getElementById("payRateError").style.display = "none";
    }
    
    if(rateOption ==="0"){
    document.getElementById("rateError").style.display = "block";
    }
    if(rateOption !== "0"){
    document.getElementById("rateError").style.display = "none";
    }
    
    var gross = hourWorked * payRate || payRate;
    var ssTax = gross* 0.065;
    var medTax = gross* 0.0145;
    var federalTax = gross * 0.16;
    var netPay = (gross - (ssTax + medTax + federalTax));
    
    netPay = Math.round(netPay * 100) / 100;
    netPay = netPay.toFixed(2);
    medTax = Math.round(medTax * 100) / 100;
    medTax = medTax.toFixed(2);
    gross = Math.round(gross * 100) / 100;
    gross = gross.toFixed(2);
    ssTax = Math.round(ssTax * 100) / 100;
    ssTax = ssTax.toFixed(2);
    federalTax = Math.round(federalTax * 100) / 100;
    federalTax = federalTax.toFixed(2);
    
    
    if(rateOption === "monthly" || rateOption === "yearly"){
    document.getElementById("hrWorked").style.display = "none";
    document.getElementById("hrNum").value = 0;
    document.getElementById("grossPay").innerHTML = payRate;
    document.getElementById("ssEmp").innerHTML = ssTax;
    document.getElementById("medEmp").innerHTML = medTax;
    document.getElementById("ssEmplr").innerHTML = ssTax;
    document.getElementById("medEmplr").innerHTML = medTax;
    document.getElementById("federalTax").innerHTML = federalTax;
    document.getElementById("netPay").innerHTML = netPay;
    }else{
    document.getElementById("ssEmp").innerHTML = ssTax;
    document.getElementById("medEmp").innerHTML = medTax;
    document.getElementById("ssEmplr").innerHTML = ssTax;
    document.getElementById("medEmplr").innerHTML = medTax;
    document.getElementById("federalTax").innerHTML = federalTax;
    document.getElementById("netPay").innerHTML = netPay;
    document.getElementById("grossPay").innerHTML = gross;
    document.getElementById("hrWorked").style.display = "block";
    }
    
    var payFrequency = document.getElementById("payFrequency").value;
    
    if(payFrequency ==="0"){
    document.getElementById("freqError").style.display = "block";
    }
    if(payFrequency !== "0"){
    document.getElementById("freqError").style.display = "none";
    }
    
    if(payFrequency === "monthly" || payFrequency === "yearly"){
    document.getElementById("manualOver").style.display = "block";
    }else{
    document.getElementById("manualOver").style.display = "none";
    }
    
    var overTime = document.getElementById("overtime").value;
    
    if(overTime < 0 || overTime > 1000){
    document.getElementById("overTerror").style.display = "block";
    }else{
    document.getElementById("overTerror").style.display = "none";
    }
    
    var grossYTD = document.getElementById("grossYTD").value;
    
    if(grossYTD < 0 || grossYTD > 1000000000 || grossYTD === "" ){
    document.getElementById("yTDError").style.display = "block";
    }else{
    document.getElementById("yTDError").style.display = "none";
    }
    
    var matchingValue = document.getElementById("matching").value;
    var matchPrice = gross * (matchingValue/100);
    var matchTotal = matchPrice*2;
    
    if(matchingValue < 0 || matchingValue > 100 || matchingValue === "" ){
    document.getElementById("matchingError").style.display = "block";
    }else{
    document.getElementById("matchingError").style.display = "none";
    document.getElementById("matchByEmplr").innerHTML = matchPrice;
    document.getElementById("matchByEmp").innerHTML = matchPrice;
    document.getElementById("totalMatch").innerHTML = matchTotal;
    }
    
    
    }
    
      
      function toShowresult(){
      document.getElementById("allResult").style.display = "block";
      }
     document.getElementById("allResult").style.display = "block";
    
    document.getElementById("container").onclick = function() {
      payrollPayment();
    
    };
    document.getElementById("seeResultBtn").onclick = function() {
      toShowresult();
    
    }; 
    