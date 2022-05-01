const container = document.getElementById('container');

// change dimensions button
const outer = document.getElementById('outer-container');
const button = document.createElement('button');
button.textContent = 'Change Dimensions';
outer.appendChild(button);

button.addEventListener('click', doAsk);

// prompt to change grid dimensions
function doAsk() {
  let count = prompt('Enter desired grid dimensions');

  if (count == '' || count == null) {
    return;
  } else if (count < 1) {
    alert("that won't work, too small"); // that won't work, too small
  } else if (count >= 1 && count <= 100) {
    deleteRows();
    makeRow(count * count);
    container.style = `grid-template-columns: repeat(${count}, 1fr)`;
    changeColor();
  } else if (count > 100) {
    alert('too high'); // that won't work, too high
  } else {
    alert('invalid bro'); // invalid; enter a number 1-100
  }
}

// delete function
function deleteRows() {
  const container = document.getElementById('container');
  container.textContent = ' ';
}

// set row number
function makeRow(number) {
  for (i = 0; i < number; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
  }
}

makeRow(16 * 16);

// hover effect
function changeColor() {
  const row = document.querySelectorAll('.row');
  row.forEach((row) => {
    row.addEventListener('mouseover', function () {
      row.style.backgroundColor = 'white';
    });
  });
}

changeColor();
