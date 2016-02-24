"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*((?:e[-]?\d+)?)\s*(c?e?l?s?i?u?s?f?h?a?r?e?n?h?e?i?t?)$/i;
  var m = temp.match(regexp);
  if (m) {
    var num = m[1];
    var exp = m[2];
    var type = m[3].toLowerCase();
    num = parseFloat(num);
    exp = exp.replace('e','');
    exp = parseInt(exp);
    if(isNaN(exp))
      exp = 1;
    if (type == 'c' || type == 'ce' || type == 'cel' || type == 'cels'|| type == 'celsi' || type == 'celsiu' || type == 'celsius') {
      result = (Math.pow(num,exp) * 9 / 5) + 32;
      result = result.toFixed(1) + " Fharenheit"
    }
    else {
      if (type == 'f' ||  type == 'fh'|| type == 'fha' || type == 'fhar' || type == 'fhare'|| type == 'fharen' || type == 'fharenh' || type == 'fharenhe' ||  type == 'fharenhei' ||  type == 'fharenheit') {
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
