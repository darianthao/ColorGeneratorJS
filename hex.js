const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A",
"B",
"C",
"D",
"E",
"F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
let hexValue = '#';
for(let i=0; i<6; i++)
// Generates 6 values to create a random HexValue ex. #FFFFFF
{
    hexValue += hex[getRandomNumber()];
}
color.textContent = hexValue;
document.body.style.backgroundColor = hexValue;
});

// Generates random index value for hex[]
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}