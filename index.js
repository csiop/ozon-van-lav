const inputValue = document.getElementById('inputNum');
const minHalfBox = document.querySelector('.minHalfBox');
const maxHalfBox = document.querySelector('.maxHalfBox');
const maxHalf = document.querySelector('.maxHalf');

const mainBox = document.querySelector('.mainBox');

const toggleSwitch = document.getElementById('toggleSwitch');
const toggleMainBox = document.getElementById('toggleMainBox');

const blue = 'rgb(22, 14, 255)';
const lightViolet = 'rgb(208, 227, 253)';

inputValue.addEventListener('input', function () {
  let num = parseInt(this.value);

  if (isNaN(num)) {
    this.value = '';
  } else if (num < 0) {
    this.value = 0;
  } else if (num > 100) {
    this.value = 100;
  }

  updateCircle(num);
});

function updateCircle(value) {
  let degree = (value / 100) * 360;

  minHalfBox.style.transform = `rotate(${degree}deg)`;
  if (degree <= 180) {
    maxHalfBox.style.transform = `rotate(${180}deg)`;
    maxHalf.style.backgroundColor = lightViolet;
  } else {
    maxHalfBox.style.transform = `rotate(${0}deg)`;
    maxHalf.style.backgroundColor = blue;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateCircle(0);
});

toggleSwitch.addEventListener('change', function () {
  if (toggleSwitch.checked) {
    mainBox.style.animation = 'progressAnimate 4s infinite linear';
  } else {
    mainBox.style.animation = '';
  }
});

toggleMainBox.addEventListener('change', function () {
  if (toggleMainBox.checked) {
    mainBox.classList.add('hidden');
    console.log('mainBox скрыт');
  } else {
    mainBox.classList.remove('hidden');
    console.log('mainBox показан');
  }
});
