// Creating first dice number
let firstRandomNumber = Math.floor(Math.random() * 6) + 1;

// Creating second dice number
let secondRandomNumber = Math.floor(Math.random() * 6) + 1;

// Get images
let first_image = document.querySelectorAll("img")[0];
let second_image = document.querySelectorAll("img")[1];

// Changing the src of the images
first_image.setAttribute("src", `images/dice${firstRandomNumber}.png`);
second_image.setAttribute("src", `images/dice${secondRandomNumber}.png`);

// Change the title 
const title = document.getElementById("title");
if (firstRandomNumber > secondRandomNumber) title.innerHTML = "🌟Player 1 Wins!";
else {
    if (firstRandomNumber < secondRandomNumber) title.innerHTML = "Player 2 Wins!🌟";
    else title.innerHTML = "Draw!";
}