let playerSymbol;
let computerSymbol;

const square = [];

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


let winningSymbol;

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
        }else{
            alert('Please Choose an Empty Square')
        }
        
        // gameArea.style.pointerEvents = 'none';


        
    })

})

//function to randomly select computer square









