const tableBody = document.getElementById("table-body");

let rows = "";
for (let i = 0; i <= 9; i++) {
  rows += "<tr>";
  rows += `<th>${i}</th>`;
  for (let j = 0; j <= 9; j++) {
    let result = i * j;
    rows += `<td>${result}</td>`;
  }
  rows += "</tr>";
}

tableBody.innerHTML = rows;
