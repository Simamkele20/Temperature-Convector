var lastEdited = "celsius";  

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;


document.getElementById("celsius").onchange = function() {
  lastEdited = "celsius";
};
document.getElementById("fahrenheit").onchange = function() {
  lastEdited = "fahrenheit";
};


function convert(temp) {

 
  var celsius = document.getElementById("celsius").value;
  celsius = parseFloat(celsius);

  var fahrenheit = document.getElementById("fahrenheit").value;
  fahrenheit = parseFloat(fahrenheit);




  var conversionC;
  var conversionF;



  if (lastEdited === "celsius") {
    conversionF = (celsius * 9 / 5) + 32;

   
    document.getElementById("fahrenheit").value = Math.round(conversionF);
    document.getElementById("kelvin").value = Math.round(conversionK);
  } 
    
    else if (lastEdited === "fahrenheit") {
    conversionC = (fahrenheit - 32) * 5 / 9;

   
    document.getElementById("celsius").value = Math.round(conversionC);
    


    document.getElementById("celsius").value = Math.round(conversionC);
    document.getElementById("fahrenheit").value = Math.round(conversionF);
  }

  
  document.getElementById("celsius").innerHTML = conversionC;
  document.getElementById("fahrenheit").innerHTML = conversionF;

}


function reset() {
  document.getElementById("celsius").value = 0;
  document.getElementById("fahrenheit").value = 0;

}
