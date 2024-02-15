// Calling functions on this page

function play(){
    addClass('home-page');
    removeClass('playing-screen');
    
    addClass('score-screen')

    
    // Displaying the random generated alphabet on the screen 
    const alpha = generateRandomAlpha();
    const currentAlpha = document.getElementById('current-alpha');
    currentAlpha.innerText = alpha;


    // Calling the function on the alpha value
    bgOfKeys(alpha);



    handleKbKeyPress();


}

