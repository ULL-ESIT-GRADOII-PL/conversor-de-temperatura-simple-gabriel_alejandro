"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*((?:e[-]?\d+)?)\s*(f(a||ar)||c(e||el))$/i;
  var m = temp.match(regexp);
  if (m) {
    var num = m[1];
    var exp = m[2];
    var type = m[3];
    num = parseFloat(num);
    exp = exp.replace('e','');
    exp = parseInt(exp);
    if(isNaN(exp))
      exp = 1;
    if (type == 'c' || type == 'C' || type == 'ce' || type == 'cel') {
      result = (Math.pow(num,exp) * 9 / 5) + 32;
      result = result.toFixed(1) + " Farenheit"
    }
    else {
      if (type == 'f' || type == 'F' || type == 'fa' || type == 'far') {
      result = (Math.pow(num,exp) - 32) * 5 / 9;
      result = result.toFixed(1) + " Celsius"
    }
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
