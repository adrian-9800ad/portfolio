function calculate (){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
 
    if (isNaN(num1) || isNaN(num2)){
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        document.getElementById("diff").innerHTML = "Please enter valid numbers.";
        document.getElementById("prod").innerHTML = "Please enter valid numbers.";
        document.getElementById("quot").innerHTML = "Please enter valid numbers.";
        document.getElementById("mod").innerHTML = "Please enter valid numbers.";
        return;
    }
    const sum = num1 + num2;
    document.getElementById("sum").innerHTML = "Sum: " + sum;
 
    const diff = num1 - num2;
    document.getElementById("diff").innerHTML = "Difference: " + diff;
 
    const prod = num1 * num2;
    document.getElementById("prod").innerHTML = "Product: " + prod;
 
    let quot, mod;
    if (num2 !== 0){
        quot = num1 / num2;
        document.getElementById('quot').innerHTML = "Quotient: " + quot;
        mod = num1 % num2;
        document.getElementById('mod').innerHTML = "Modulo: " + mod;
 
    } else {
        quot = "Undefined";
        document.getElementById('quot').innerHTML = "Quotient: " + quot;
        mod = "Undefined";
        document.getElementById('mod').innerHTML = "Modulo: " + mod;
    }
}
function clearFields(){
    document.getElementById("sum").innerHTML = " ";
    document.getElementById("diff").innerHTML = " ";
    document.getElementById("prod").innerHTML = " ";
    document.getElementById("quot").innerHTML = " ";
    document.getElementById("mod").innerHTML = " ";
   
}