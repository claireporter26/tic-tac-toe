let playerSymbol;
let computerSymbol;

const square = [];

const alert = document.querySelector('.alert-text');
const gameArea = document.getElementById("gameArea")
const gameSquare = document.querySelectorAll('.gameSquare')

const square1 = document.getElementById("gameSquare1");
const square2 = document.getElementById("gameSquare2");
const square3 = document.getElementById("gameSquare3");
const square4 = document.getElementById("gameSquare4");
const square5 = document.getElementById("gameSquare5");
const square6 = document.getElementById("gameSquare6");
const square7 = document.getElementById("gameSquare7");
const square8 = document.getElementById("gameSquare8");
const square9 = document.getElementById("gameSquare9");

const chooseSideBtns = document.querySelectorAll(".btn-chooseside")
const chooseSideX = document.getElementById("chooseSideX");
const chooseSideO = document.getElementById("chooseSideO");

chooseSide = document.querySelector('.choose-side');
playInstruction = document.querySelector('.play-instruction');

playerSymbolX = `<img class="gameSquare_icon" src="./images/close.png" alt="Cross">`;
playerSymbolO = `<img class="gameSquare_icon" src="./images/rec.png" alt="Nought">`;

const endGameModal = document.getElementById('endGameModal');

let winningSymbol;
let wonGame = false;

let winningText = document.querySelector('.winning-text')

//player choose side

chooseSideBtns.forEach(function(button){
    button.addEventListener('click', function(e){

        const item = e.target;

        if (item.classList.contains('chooseSideX')){
            
            playerSymbol = playerSymbolX;
            computerSymbol = playerSymbolO ;
            

        } else if (item.classList.contains('chooseSideO')){
            
            playerSymbol = playerSymbolO;
            computerSymbol = playerSymbolX;
        } else {
            alert('Error')
        }

        console.log('player symbol is ' + playerSymbol);
        console.log('computer symbol is ' + computerSymbol);


        chooseSide.style.display = 'none';
        playInstruction.style.display = 'block';

        gameArea.style.pointerEvents = 'auto';
    })
});

//add symbols to grid

gameSquare.forEach(function(square){
    square.addEventListener('click', function(e){
        item = e.target;
        
        if (item.innerHTML === ""){
            item.innerHTML = playerSymbol;

            gameArea.style.pointerEvents = 'none';

            playerHasWon();

            if (wonGame == false){
                setTimeout(randomComputerSquare, 650);  
                setTimeout(function(){
                gameArea.style.pointerEvents = 'auto';
                }, 650);
            }

        }else{
            alert.style.display = 'block';
            setTimeout(function(){
                alert.style.display = 'none';
                }, 1700);
            
            
        }
        
    })

})

//function to randomly select computer square



function randomComputerSquare(){

    const randomNumber = Math.floor((Math.random()*9)+1);
    const squareNumber = document.getElementById("gameSquare" + randomNumber);
    
    if (squareNumber.innerHTML == "") {
        squareNumber.innerHTML = computerSymbol;

        playerHasWon();

    } else if (squareNumber.innerHTML !== ""){
        randomComputerSquare();
    };

    
};

//check if game has been won

function playerHasWon(){

    
        if (square1.innerHTML === playerSymbolX && square2.innerHTML === playerSymbolX && square3.innerHTML === playerSymbolX || square4.innerHTML === playerSymbolX && square5.innerHTML === playerSymbolX && square6.innerHTML === playerSymbolX || square7.innerHTML === playerSymbolX && square8.innerHTML === playerSymbolX && square9.innerHTML === playerSymbolX || square1.innerHTML === playerSymbolX && square4.innerHTML === playerSymbolX && square7.innerHTML === playerSymbolX || square2.innerHTML === playerSymbolX && square5.innerHTML === playerSymbolX && square8.innerHTML === playerSymbolX || square3.innerHTML === playerSymbolX && square6.innerHTML === playerSymbolX && square9.innerHTML === playerSymbolX || square1.innerHTML === playerSymbolX && square5.innerHTML === playerSymbolX && square9.innerHTML === playerSymbolX || square3.innerHTML === playerSymbolX && square5.innerHTML === playerSymbolX && square7.innerHTML === playerSymbolX){
          
            winningSymbol = `<img class="gameSquare_icon" src="./images/close.png" alt="Cross">`;
            wonGame = true;
            endGame();
            // endGame = true;
            gameArea.style.pointerEvents = 'none';
            console.log("player X won");
            winText();
        } else if (
            square1.innerHTML === playerSymbolO && square2.innerHTML === playerSymbolO && square3.innerHTML === playerSymbolO || 
            square4.innerHTML === playerSymbolO && square5.innerHTML === playerSymbolO && square6.innerHTML === playerSymbolO || 
            square7.innerHTML === playerSymbolO && square8.innerHTML === playerSymbolO && square9.innerHTML === playerSymbolO || 
            square1.innerHTML === playerSymbolO && square4.innerHTML === playerSymbolO && square7.innerHTML === playerSymbolO || 
            square2.innerHTML === playerSymbolO && square5.innerHTML === playerSymbolO && square8.innerHTML === playerSymbolO || 
            square3.innerHTML === playerSymbolO && square6.innerHTML === playerSymbolO && square9.innerHTML === playerSymbolO || 
            square1.innerHTML === playerSymbolO && square5.innerHTML === playerSymbolO && square9.innerHTML === playerSymbolO || 
            square3.innerHTML === playerSymbolO && square5.innerHTML === playerSymbolO && square7.innerHTML === playerSymbolO){
        
            winningSymbol = `<img class="gameSquare_icon" src="./images/rec.png" alt="Nought">`;
            console.log("player O won")
            wonGame = true;
            endGame();
            // endGame = true;
            winText();
        } else {
            
            if (square1.innerHTML !== "" && square2.innerHTML !== "" && square3.innerHTML !== "" && square4.innerHTML !== "" && square5.innerHTML !== "" && square6.innerHTML !== "" && square7.innerHTML !== "" && square8.innerHTML !== "" && square9.innerHTML !== ""){
                 
                wonGame = true;
                winningSymbol == null;
                winText();
                // endGame = true;
            };
        };
    
    
}

function endGame(){
    
    gameArea.style.pointerEvents = 'none';
    
    console.log('end game working')
}


function winText(){
    playInstruction.style.display = "none";

    
    $('#endGameModal').modal('show');

    if (winningSymbol == playerSymbol){
        winningText.innerText = "Congratulations, you won the game!"
    }else if (winningSymbol == computerSymbol){
        winningText.innerText = "Sorry, you have not won this time!"
    }else{
        winningText.innerText = "No one won this time!"
    }

    const playAgain = document.getElementById("play-again");

    playAgain.addEventListener('click', function(){
        location.reload();
        
    })


    // document.getElementById("play-again"). = function(){
    // document.location.reload;
    // };
    
    // document.getElementById("winningText").innerHTML = 'Player ' + winningSymbol + ' has Won!!';
    // document.getElementById("winningTextBtn").style.display = "block";

   
};









