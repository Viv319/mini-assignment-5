// frame9 script
function redirectToHomePage() {
    // Change the URL to the desired HTML page
    window.location.href = 'index.html';
  }

//temprary changes ends here
var close = document.querySelector('#display');
var rockDisplay = document.querySelector('#newDisplay');
var openRuleDiv = document.querySelector('.closable-div');
var winMessage = document.querySelector('#win');
var tieMessage = document.querySelector('#tie');
var looseMessage = document.querySelector('#looseMessage');
// var resultBox = document.querySelector('#resultBox');
var rockWin = document.querySelector('#rockWin');
var paperWin =document.querySelector('#paperWin');
var scissorWin = document.querySelector('#scissorWin');
var rockloose = document.querySelector('#rockloose');
var paperloose = document.querySelector('#paperloose');
var scissorloose= document.querySelector('#scissorloose');
var common =document.querySelector('#common');
var playAgain = document.querySelector('#playAgain');
var min =document.querySelector('#min');

var userCount=parseInt(localStorage.getItem('userWon'))||0;
var computerCount=parseInt(localStorage.getItem('compWon'))||0;

function hurrayPage() {
    window.location.href= 'frame9.html';
}
function userValues() {
    const userElement = document.getElementById('userS');
    conststoredValue = localStorage.getItem('userWon');
    userElement.value = userCount;

    const compElement = document.getElementById('computerS');
    conststoredValue = localStorage.getItem('compWon');
    compElement.value = computerCount;
}
window.onload = userValues;
winMessage.style.display='none';
rockWin.style.display='none';
paperWin.style.display='none';
scissorWin.style.display='none';
rockloose.style.display='none';
paperloose.style.display='none';
scissorloose.style.display='none';
tieMessage.style.display='none';
looseMessage.style.display='none';
common.style.display='none';

function closeDiv() {
    var closableDiv = document.querySelector('.closable-div');
    closableDiv.style.display = 'none';
  }

function openRuleBox() {
    openRuleDiv.style.display = 'flex';
 }

  function showDiv() {
    document.getElementById('rockWin').style.display = 'inline-flex';
  }

// frame9 script ends here
// close.style.display = 'none';
//temprary changes

function reset(){
    winMessage.style.display='none';
}

function rock() {
    // rock =1 scissor =2 paper =3

    close.style.display = 'none';

    const min = 1;
    const max = 3;
    const randomInteger =  Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Random Integer:', randomInteger);

    if(2 === randomInteger) //2
    {
        console.log("you won");
        userCount+=1;

        setTimeout(showDiv, 3000);

        localStorage.setItem('userWon',userCount);
        const storedValue = localStorage.getItem('userWon');
        document.getElementById('userS').value = storedValue;

        winMessage.style.display='inline';
        rockWin.style.display ='inline-flex';
        scissorloose.style.display = 'inline';
        common.style.display='flex';
        
    }
    else if(1 === randomInteger) //1
    {
        console.log("tie");
        tieMessage.style.display='flex';
        common.style.display='flex';
        playAgain.innerHTML='REPLAY';

    }
    else if(3 === randomInteger) //3
    {
        console.log("loose");
        computerCount+=1;
        localStorage.setItem('compWon',computerCount);
        
        const storedValue = localStorage.getItem('compWon');
        document.getElementById('computerS').value = storedValue;
        looseMessage.style.display='flex';
        common.style.display='flex';
    }
}

function scissor() {
    // var select = document.querySelector('.imgclass');
    close.style.display = 'none';
    // min.style.display = 'none';

    const min = 1;
    const max = 3;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Random Integer:', randomInteger);

    if(3 === randomInteger) //3
    {
        console.log("you won");
        userCount+=1;
        localStorage.setItem('userWon',userCount);
        const storedValue = localStorage.getItem('userWon');
        document.getElementById('userS').value = storedValue;
        winMessage.style.display='flex';
        common.style.display='flex';
    }
    else if(2 === randomInteger) //2
    {
        console.log("tie");
        tieMessage.style.display='flex';
        playAgain.innerHTML='REPLAY';
    }
    else if(1 === randomInteger) //1
    {
        console.log("loose");
        computerCount+=1;
        localStorage.setItem("compWon",computerCount);

        const storedValue = localStorage.getItem('compWon');
        document.getElementById('computerS').value = storedValue;
        looseMessage.style.display='flex';
        common.style.display='flex';
    }
}

function paper() {
    // var select = document.querySelector('.imgclass');
    close.style.display = 'none';
    // min.style.display = 'none';
    
    const min = 1;
    const max = 3;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Random Integer:', randomInteger);

    if(1 === randomInteger) //1
    {
        console.log("you won");
        userCount+=1;
        localStorage.setItem('userWon',userCount);
        const storedValue = localStorage.getItem('userWon');
        document.getElementById('userS').value = storedValue;
        winMessage.style.display='flex';
        common.style.display='flex';
    }
    else if(3 === randomInteger) //3
    {
        console.log("tie");
        tieMessage.style.display='flex';
        playAgain.innerHTML='REPLAY';
    }
    else if(2 === randomInteger) //2
    {
        console.log("loose");
        computerCount+=1;
        localStorage.setItem("compWon",computerCount);

        const storedValue = localStorage.getItem('compWon');
        document.getElementById('computerS').value = storedValue;
        looseMessage.style.display='flex';
        common.style.display='flex';
    }
}