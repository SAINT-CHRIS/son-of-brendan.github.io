const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/alexander-grey-rItGZ4vquWk-unsplash.jpg") {
    myImage.setAttribute("src", "images/mohammad-rahmani-oXlXu2qukGE-unsplash.jpg");
  } else {
    myImage.setAttribute("src", "images/alexander-grey-rItGZ4vquWk-unsplash.jpg");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'moeney is an ideal reason for everything to be in existence, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}