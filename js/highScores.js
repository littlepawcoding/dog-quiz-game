function addScore() {
  var table = document.getElementById("tableScore");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = "New cell 1";
  cell2.innerHTML = "New cell 2";
  cell3.innerHTML = "New cell 3";
}
function removeScore() {
  document.getElementById("tableScore").deleteRow(1);
}
