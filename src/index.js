import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready.");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("The document has been downloaded.");
  });
}
document.getElementById("submit-data").addEventListener("click", checkUsername);
function checkUsername() {
  let table = document.getElementById("table");
  let rowCount = table.rows.length;
  let checkedBox = document.getElementById("input-admin");
  let n = 0;
  for (var i = rowCount - 1; i > 0; i--) {
    if (
      table.rows[i].cells[0].innerHTML ===
      document.getElementById("input-username").value
    ) {
      n++;
      table.rows[i].cells[1].innerHTML = document.getElementById(
        "input-email"
      ).value;
      table.rows[i].cells[2].innerHTML = document.getElementById(
        "input-address"
      ).value;
      if (checkedBox.checked === true) {
        table.rows[i].cells[3].innerHTML = document.getElementById(
          "input-admin"
        ).value;
      } else {
        table.rows[i].cells[3].innerHTML = "-";
      }
    }
  }
  if (n === 0) {
    newRow();
    console.log("Uusi Username. Lisätään listaan.");
  } else {
    console.log("Duplikaatti löytyi. Muokataan riviä.");
  }
}

function newRow() {
  let table = document.getElementById("table");
  let checkedBox = document.getElementById("input-admin");
  let newRow = table.insertRow(table.length);
  let cell0 = newRow.insertCell(0);
  let cell1 = newRow.insertCell(1);
  let cell2 = newRow.insertCell(2);
  let cell3 = newRow.insertCell(3);
  let cell4 = newRow.insertCell(4);
  cell0.innerHTML = document.getElementById("input-username").value;
  cell1.innerHTML = document.getElementById("input-email").value;
  cell2.innerHTML = document.getElementById("input-address").value;
  cell4.innerHTML = document.getElementById("input-image").value;
  if (checkedBox.checked === true) {
    cell3.innerHTML = document.getElementById("input-admin").value;
  } else {
    cell3.innerHTML = "-";
  }
}

document.getElementById("empty-table").addEventListener("click", deleteRws);
function deleteRws() {
  let table = document.getElementById("table");
  let rowCount = table.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}
