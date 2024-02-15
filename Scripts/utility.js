// Declaring functions in this page

function addClass(elementId){

    // Hidding home page by adding the class "hidden"
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

// To add a class in section
function removeClass(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}

function generateRandomAlpha(elementId){


    // Making an array from a string
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArray = alpha.split('');

    // Generating a random number
    const random = Math.random()*25;
    const generateRandomNum = Math.round(random);

    // Making the random number and alphabet sync
    const alphabet = alphaArray[generateRandomNum];

    const currentAlpha = document.getElementById('current-alpha');
    currentAlpha.innerText = alphabet;

    return alphabet;
    
}


/* Adding a function for detecting keyboard button press and comparing results*/

function handleKbKeyPress(event){  // event is a parameter that takes what sort of event is going on and shows the details is console.
    const playerPressed = event.key ;
      // key is the value from the console that "event" gives.


    //brought current alpha again to check if player is clicking the right key or not
    const currentAlpha = document.getElementById('current-alpha');
    const output = currentAlpha.innerText;

    // Checking
    if(playerPressed === output){

        // Update the score:
        // 1. Get the current score
        // 2. Add +1 to the current score if players wins
        // 3. Display the current score
        const currentScore = document.getElementById('current-score');
        const extractText = currentScore.innerText;
        const stringToNumber = parseInt(extractText);

        // Update score by 1
        const updateScore = stringToNumber + 1;
        
        // Displaying the score
        currentScore.innerText = updateScore;
        
        // Play another round
        removeBgOfKeys(output);     // if player is right then removes the bg color from the previous keys
        play();                     // Calling this function helps the player to keep playing until they makes a mistake
    }else{

        // Updating the game life
        const currentLife = document.getElementById('current-life');
        const getText = currentLife.innerText;
        const converting = parseInt(getText);
        

        const updateLife = converting - 1;
        currentLife.innerText = updateLife;

        if(updateLife === 0){
            addClass('playing-screen');
            removeClass('score-screen');
        }
        removeBgOfKeys(output); 
    }



}

// from the document adding evenlistener and "KEYUP" function and calling the function to show the output
document.addEventListener('keyup', handleKbKeyPress);



// adding a color on the random generated keys
function bgOfKeys(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// After keypress the color of the previous button needs to change
function removeBgOfKeys(elementId){
   const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}



function setTextValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
    

    
