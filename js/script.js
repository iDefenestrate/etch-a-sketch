const container = document.getElementById('container');

// change dimensions button
const btnBox = document.getElementById('btn-container');
const button = document.createElement('button');
button.textContent = 'Change Grid Dimensions';
button.className = 'btn';
btnBox.appendChild(button);

button.addEventListener('click', doAsk);

// prompt to change grid dimensions
function doAsk() {
  let count = prompt(
    'Enter your desired number of squares on each side. \n Min: 1 \n Max: 100.'
  );

  let realCount = Math.trunc(count);

  const dimensions = document.querySelector('.dimensions');

  if (realCount == '' || realCount == null) {
    return;
  } else if (realCount < 1) {
    alert("That's too small! Please enter a number between 1 and 100");
  } else if (realCount >= 1 && realCount <= 100) {
    deleteRows();
    makeRow(realCount * realCount);
    dimensions.innerText = `${realCount} x ${realCount}`;
    container.style = `grid-template-columns: repeat(${realCount}, 1fr)`;
    changeColor();
  } else if (realCount > 100) {
    alert("That's too large! Please enter a number between 1 and 100");
  } else {
    alert('Invalid.\n Please enter a number between 1 and 100');
  }
}

// delete 16x16 to make way for new grid
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

const btnContainer = document.getElementById('btn-container');
const newBtn = document.createElement('button');
newBtn.innerText = 'Reset Grid';
newBtn.className = 'reset';
btnContainer.appendChild(newBtn);

// reset the Grid

function resetGrid() {
  const row = document.querySelectorAll('.row');
  row.forEach((row) => {
    row.style.backgroundColor = 'black';
  });
  changeColor();
}

newBtn.onclick = resetGrid;
