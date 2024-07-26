const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());

  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const randomIndex = getRandomIndex();
  const color = darkColorsArr[randomIndex];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

changeBackgroundColor();

const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;

//------------------------------------------------------------

/* function changeBackgroundColor() {
  const randomIndex = getRandomIndex();
  body.style.backgroundColor = darkColorsArr[randomIndex];
} */

/* // function changeBackgroundColor on set interval
function startChangingBackgroundColor() {
  setInterval(changeBackgroundColor, 3000);
}

startChangingBackgroundColor(); */
/* 
  function getRandomIndex() {
    return Math.floor(Math.random() * darkColorsArr.length);
  } */

//------------------------------------------------------------
