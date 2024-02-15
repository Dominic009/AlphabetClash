// Global Function for add/ remove class to use with any class and any id
// Target the id and add the value with parameter   

function addClass(elementId, value){
    const element = document.getElementById(elementId);
    element.classList.add(value);           // Making the function more usuable for various classes!
}


function removeClass(elementId, value){
    const element = document.getElementById(elementId);
    element.classList.remove(value);
}



// RANDOM ALPHABET
function generateRandomAlphabet(){

    const stringOfAlphabets = "abcdefghijklmnopqrstuvwxyz"
    const arrayOfAlphabets = stringOfAlphabets.split('');

    const randomNumber = Math.random() * 25;
    const roundedRandomNumber = Math.round(randomNumber);
    
    const alphabetRandom = arrayOfAlphabets[roundedRandomNumber];

    return alphabetRandom;
}


// Display function
function displayElement(elementId){
const element = document.getElementById(elementId);
const randomAlphabet = generateRandomAlphabet();
element.innerText = randomAlphabet;
}


// Recognizing player input with a function and passing the "event" with "addEventListener"
function playerInput(event){
    const input = event.key;
    console.log(input);

    const displayAlphabet = document.getElementById('display-screen').innerText;
    console.log(displayAlphabet);

    if(input === displayAlphabet){
        componentSet();  // if matched, repeating the process with this function
    }else{
        addClass('game-screen', 'hidden');
        removeClass('end-screen', 'hidden');
    }
}
document.addEventListener('keyup', playerInput);