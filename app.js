
const colors = ["blue", "red", "rgba(133,122,200)",
"#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // gets a random number between 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


    // Math.Floor() rounds the index number
    // Math.random() generates the random number in decimals 0-1
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}