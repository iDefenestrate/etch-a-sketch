const container = document.getElementById('container');

// change dimensions button
const btnBox = document.getElementById('btn-container');
const button = document.createElement('button');
button.textContent = 'Change Grid Dimensions';
btnBox.appendChild(button);

button.addEventListener('click', doAsk);

// prompt to change grid dimensions
function doAsk() {
  let count = prompt(
    'Enter your desired number of squares on each side. \n Min: 1 \n Max: 100.'
  );

  if (count == '' || count == null) {
    return;
  } else if (count < 1) {
    alert("That's too small! Please enter a number between 1 and 100.");
  } else if (count >= 1 && count <= 100) {
    deleteRows();
    makeRow(count * count);
    container.style = `grid-template-columns: repeat(${count}, 1fr)`;
    changeColor();
  } else if (count > 100) {
    alert("That's too large! Please enter a number between 1 and 100.");
  } else {
    alert('Invalid.\n Please enter a number between 1 and 100.'); // invalid; enter a number 1-100
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
