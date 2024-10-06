function calculateTranspose() {
  const rows = parseInt(document.getElementById("rows").value);
  const cols = parseInt(document.getElementById("cols").value);

  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const element = parseInt(
        prompt(`Enter element at row ${i + 1}, column ${j + 1}:`)
      );
      row.push(element);
    }
    matrix.push(row);
  }

  const transpose = [];
  for (let i = 0; i < cols; i++) {
    const col = [];
    for (let j = 0; j < rows; j++) {
      col.push(matrix[j][i]);
    }
    transpose.push(col);
  }

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  const matrixTable = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    const row = matrixTable.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = matrix[i][j];
    }
  }
  resultElement.appendChild(matrixTable);

  const transposeTable = document.createElement("table");
  for (let i = 0; i < cols; i++) {
    const row = transposeTable.insertRow();
    for (let j = 0; j < rows; j++) {
      const cell = row.insertCell();
      cell.textContent = transpose[i][j];
    }
  }
  resultElement.appendChild(transposeTable);
}
