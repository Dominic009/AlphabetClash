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



// Adding key bg color
function keyColor(elementId){
    const randomAlphabet = generateRandomAlphabet();
    const element = document.getElementById(elementId);
    element.innerText = randomAlphabet;
    addClass(randomAlphabet, 'bg-orange-400');
}




// Recognizing player input with a function and passing the "event" with "addEventListener"
setDisplayText('player-score', 0);
function playerInput(event){
    const input = event.key;

    const displayAlphabet = document.getElementById('display-screen').innerText;

    if(input === displayAlphabet){

        const score = document.getElementById('player-score');
        const text = score.innerText;
        const currentScore = parseInt(text);
      
        const totalScore = currentScore + 1;
        score.innerText = totalScore;
        
        removeClass(displayAlphabet, "bg-orange-400");
        componentSet();  // if matched, repeating the process with this function

    }
    else{ 
        const currentLife = document.getElementById('life-point');
        const innerText = currentLife.innerText;
        const convertStringToNum = parseInt(innerText);
        
        let playerRemainingLife = convertStringToNum - 1;
        currentLife.innerText = playerRemainingLife;
        
        
        if(playerRemainingLife === 0){
        setDisplayText('player-score', 0);
        setDisplayText('life-point', 3);
        addClass('game-screen', 'hidden');
        removeClass('end-screen', 'hidden');
        removeClass(displayAlphabet, "bg-orange-400");
    }
    
}
  
}
document.addEventListener('keyup', playerInput);




// Setting the life point with function instead of hard code
function setDisplayText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

