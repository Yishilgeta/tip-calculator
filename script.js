let tipPercent = 0;

function setTip(value) {
  tipPercent = value;
  calculate();
}

document.getElementById("customTip").addEventListener("input", function () {
  tipPercent = parseFloat(this.value) || 0;
  calculate();
});

document.getElementById("bill").addEventListener("input", calculate);
document.getElementById("people").addEventListener("input", calculate);

function calculate() {
  const bill = parseFloat(document.getElementById("bill").value);
  const people = parseInt(document.getElementById("people").value);

  if (!bill || !people) return;

  const tipTotal = (bill * tipPercent) / 100;
  const tipPerPerson = tipTotal / people;
  const totalPerPerson = (bill + tipTotal) / people;

  document.getElementById("tipAmount").textContent =
    "$" + tipPerPerson.toFixed(2);

  document.getElementById("total").textContent =
    "$" + totalPerPerson.toFixed(2);
}

function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("people").value = "";
  document.getElementById("customTip").value = "";
  tipPercent = 0;

  document.getElementById("tipAmount").textContent = "$0.00";
  document.getElementById("total").textContent = "$0.00";
}
