let columnCount = 16;
const container = document.getElementById('container');
container.setAttribute(
  'style',
  `display: grid; grid-template-columns: repeat(${columnCount}, 1fr)`
);

// change dimensions button
const outer = document.getElementById('outer-container');
const button = document.createElement('button');
button.textContent = 'Change Dimensions';
outer.appendChild(button);

button.addEventListener('click', doAsk);

// prompt to change grid dimensions
function doAsk() {
  let popUp = prompt('Enter desired grid dimensions');

  if (popUp < 1) {
    alert("that won't work, too small"); // that won't work, too small
  } else if (popUp >= 1 && popUp <= 100) {
    columnCount = popUp;
    makeRow(popUp * popUp); // enter working function
    changeColor();
  } else if (popUp > 100) {
    alert('too high'); // that won't work, too high
  } else {
    alert('invalid bro'); // invalid; enter a number 1-100
  }
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
