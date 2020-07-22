// Clear Function
function clearFun() {
  document.querySelector(".current-output").innerHTML = "";
  document.querySelector(".final-output").innerHTML = "";
}
// Delete Function
function deleteFun() {
  str = document.querySelector(".final-output").innerHTML;
  strLength = str.length;
  newStr = str.slice(0, parseInt(strLength) - 1);
  document.querySelector(".final-output").innerHTML = newStr;
}
// Adding Event Listeners To Print The Numbers On The Calculator Screen On Click
let numbers = document.querySelectorAll(".numbers button");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    output = document.getElementsByClassName("final-output");
    oldStr = output[0].innerHTML;
    number = numbers[i].innerHTML;
    output[0].innerHTML = oldStr + number;
  });
}
// Adding Event Listeners To Print The Operations On The Calculator Screen On Click
let operations = document.querySelectorAll(".operations button");
/*let operationsArray = ["+", "-", "*", "/"];*/
for (let i = 0; i < operations.length - 1; i++) {
  operations[i].addEventListener("click", function() {
    output = document.getElementsByClassName("final-output");
    oldStr = output[0].innerHTML;
    operation = operations[i].innerHTML;
    if (output[0].innerHTML.slice(-1) != operation) {
      output[0].innerHTML = oldStr + operation;
    }
  });
}
// Calculate Function
function calculate() {
  output = document.getElementsByClassName("final-output");
  x = output[0].innerHTML;
  let y = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "+") {
      y += " + ";
    } else if (x[i] == "-") {
      y += " - ";
    } else if (x[i] == "*") {
      y += " * ";
    } else if (x[i] == "/") {
      y += " / ";
    } else {
      y += x[i];
    }
  }
  z = y.split(" ");
  while (z.indexOf("*") != -1) {
    let i = z.indexOf("*");
    let n1 = z[i - 1];
    let n2 = z[i + 1];
    w = n1 * n2;
    z.splice(i - 1, 3, w);
  }
  while (z.indexOf("/") != -1) {
    let i = z.indexOf("/");
    let n1 = z[i - 1];
    let n2 = z[i + 1];
    w = n1 / n2;
    z.splice(i - 1, 3, w);
  }
  while (z.indexOf("+") != -1) {
    let i = z.indexOf("+");
    let n1 = z[i - 1];
    let n2 = z[i + 1];
    w = n1 + n2;
    z.splice(i - 1, 3, w);
  }
  while (z.indexOf("-") != -1) {
    let i = z.indexOf("-");
    let n1 = z[i - 1];
    let n2 = z[i + 1];
    w = n1 - n2;
    z.splice(i - 1, 3, w);
  }
  result = document.getElementsByClassName("current-output");
  result[0].innerHTML = z;
  output[0].innerHTML = "";
}
