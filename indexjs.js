// frame9 script
function redirectToAnotherPage() {
    // Change the URL to the desired HTML page
    window.location.href = 'index.html';
  }

//temprary changes ends here
var close = document.querySelector('#display');
// var clickrock = document.querySelector('#rock');
// var clickscissor = document.querySelector('#scissor');
// var clickscissori =document.querySelector('#scissori');
// var clickpaper = document.querySelector('#paper');
// var rockout = document.querySelector('#rockout');
// var scissorout = document.querySelector('#scissorout');
// var paperout = document.querySelector('#paperout');
var rockDisplay = document.querySelector('#newDisplay');
var openRuleDiv = document.querySelector('.closable-div');
var winMessage = document.querySelector('#win');
// var resultBox = document.querySelector('#resultBox');
var rockWin = document.querySelector('#rockWin');

var userCount=parseInt(localStorage.getItem('userWon'));
var computerCount=parseInt(localStorage.getItem('compWon'));

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
resultBox.style.display='none';

function closeDiv() {
    var closableDiv = document.querySelector('.closable-div');
    closableDiv.style.display = 'none';
  }

function openRuleBox() {
    openRuleDiv.style.display = 'flex';
 }

  function showDiv() {
    document.getElementById('rockWin').style.display = 'block';
  }

// frame9 script ends here
// close.style.display = 'none';
//temprary changes

function reset(){
    winMessage.style.display='none';
}

function rock() {
    // rock =1 scissor =2 paper =3
    // var select = document.querySelector('.imgclass');

    close.style.display = 'none';
    // min.style.display = 'none';

    const min = 1;
    const max = 3;
    const randomInteger = 2;
    // Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Random Integer:', randomInteger);

    if(2 === randomInteger)
    {
        console.log("you won");
        userCount+=1;

        setTimeout(showDiv, 3000);

        localStorage.setItem('userWon',userCount);
        const storedValue = localStorage.getItem('userWon');
        document.getElementById('userS').value = storedValue;

        winMessage.style.display='flex';
        rockWin.style.display ='block';
    }
    else if(1 === randomInteger) //1
    {
        console.log("tie");
    }
    else if(3 === randomInteger) //3
    {
        console.log("loose");
        computerCount+=1;
        localStorage.setItem('compWon',computerCount);
        
        const storedValue = localStorage.getItem('compWon');
            document.getElementById('computerS').value = storedValue;
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
    }
    else if(2 === randomInteger) //2
    {
        console.log("tie");
    }
    else if(1 === randomInteger) //1
    {
        console.log("loose");
        computerCount+=1;
        localStorage.setItem("compWon",computerCount);

        const storedValue = localStorage.getItem('compWon');
            document.getElementById('computerS').value = storedValue;
        
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
    }
    else if(3 === randomInteger) //3
    {
        console.log("tie");
    }
    else if(2 === randomInteger) //2
    {
        console.log("loose");
        computerCount+=1;
        localStorage.setItem("compWon",computerCount);

        const storedValue = localStorage.getItem('compWon');
            document.getElementById('computerS').value = storedValue;
    }
}