const container = document.getElementById('container');
container.setAttribute(
  'style',
  'display: grid',
  'grid-column-template: repeat(16,1fr)'
);

// set row number
function makeRow(number) {
  for (i = 0; i < number; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
  }
}

makeRow(16 * 16);
