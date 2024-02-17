/* Inside if this COMPONENT FUNCTION, we will be calling other FUNCTIONS */

function componentSet(){
    
/*------------------------------------- Task 1  -------------------------------------*/
addClass('home-page', 'hidden');                      // Calling the function with the id of the element that i want to add the class to.
removeClass('game-screen', 'hidden');
/*------------------------------------- Task 2  -------------------------------------*/
generateRandomAlphabet(); 
displayElement('display-screen');

keyColor('display-screen');
/*------------------------------------- Task 3  -------------------------------------*/
playerInput();
addClass('game-screen', 'hidden');
removeClass('end-screen', 'hidden');

}
setDisplayText('player-score', 0);

/*------------------------------------- Task 4  -------------------------------------*/
setDisplayText('life-point', 3);


 function playAgain(){
     keyColor('display-screen')
     addClass('end-screen', 'hidden');
     removeClass('game-screen', 'hidden');
    }

/** */
// function continueGame(){
//     const randomAlphabet = generateRandomAlphabet();
//     console.log(randomAlphabet);
//     const curentAlphabet = document.getElementById('display-screen');
//     curentAlphabet.innerText = randomAlphabet;
//     displayElement('display-screen');
//     keyColor('display-screen');
// }
