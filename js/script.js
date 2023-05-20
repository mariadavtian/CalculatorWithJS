let display = document.getElementById("display");
let value = "";

function insertValue(val) {
  value += val;
  display.value = value;
}

function clearDisplay() {
  value = "";
  display.value = value;
}

function deleteChar() {
  value = value.substring(0, value.length - 1);
  display.value = value;
}

function calculate() {
  try {
    value = eval(value);
    display.value = value;
  } catch (err) {
    alert("Invalid expression!");
  }
}
function del(){
  value = "";
  display.value = value;
}
