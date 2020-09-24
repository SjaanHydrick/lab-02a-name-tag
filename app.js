// user inputs value
const userInput = document.getElementById('userInput');
console.log('userInput');

// when button pressed, value replaces flex-center
const name = document.getElementById('name');

callButton.addEventListener('click', () => {
    console.log(userInput.value)
    name.textContent = userInput.value
    userInput.value = '';
})

// color change to pink

const pink = document.getElementById('pink');

pink.addEventListener('click', () => {
    document.getElementById("colorWheel").style.backgroundColor = "pink";
})

// color change to light blue

const lightBlue = document.getElementById('lightblue');

lightBlue.addEventListener('click', () => {
    document.getElementById("colorWheel").style.backgroundColor = "lightblue";
})

// color change to light green

const lightGreen = document.getElementById('lightgreen');

lightGreen.addEventListener('click', () => {
    document.getElementById("colorWheel").style.backgroundColor = "lightgreen";
})

// revert color to red

const red = document.getElementById('original');

red.addEventListener('click', () => {
    document.getElementById("colorWheel").style.backgroundColor = "red";
})

// animate - how about a button that triggers animation!? on click, 
// the nametag starts dancing, and you can click it again to make 
// it stop and you can choose multiple animations
// classList.add() and classList.remove() will be helpful

// what will move
const colorWheel = document.getElementById('colorWheel');

// what makes it move
const dontTouch = document.getElementById('touch');


dontTouch.addEventListener('click', () => {
    colorWheel.classList.toggle('howDare');
    dontTouch.textContent = "How Dare????";
    dontTouch.style.backgroundColor = "firebrick";
})


