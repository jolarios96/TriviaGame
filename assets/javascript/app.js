// This Script asks the user a random question from a list.
// After the question is answered (right/wrong), remove that question from the list. 
// to make resettable, replace splice with push in some way
// push questions into backup array 'backupData[]'

// ------------------------
// ----- MAIN DRIVER --------
// ------------------------
var questionData = [
    {
        question: 'THIS IS QUESTION 1',
        answer: 'btn-1',
        img: 'https://via.placeholder.com/400x300'
    },

    {
        question: 'THIS IS QUESTION 2',
        answer: 'btn-2',
        img: 'https://via.placeholder.com/400x300'
    },
    {
        question: 'THIS IS QUESTION 3',
        answer: 'btn-3',
        img: 'https://via.placeholder.com/400x300'
    },
    {
        question: 'THIS IS QUESTION 4',
        answer: 'btn-4',
        img: 'https://via.placeholder.com/400x300'
    },
    {
        question: 'THIS IS QUESTION 5',
        answer: 'btn-1',
        img: 'https://via.placeholder.com/400x300'
    },
    // {
    //     question: 'THIS IS QUESTION 6',
    //     answer: 'btn-2',
    //     img: 'https://via.placeholder.com/400x300'
    // },
    // {
    //     question: 'THIS IS QUESTION 7',
    //     answer: 'btn-3',
    //     img: 'https://via.placeholder.com/400x300'
    // },
    // {
    //     question: 'THIS IS QUESTION 8',
    //     answer: 'btn-4',
    //     img: 'https://via.placeholder.com/400x300'
    // },
    // {
    //     question: 'THIS IS QUESTION 9',
    //     answer: 'btn-1',
    //     img: 'https://via.placeholder.com/400x300'
    // },
    // {
    //     question: 'THIS IS QUESTION 10',
    //     answer: 'btn-2',
    //     img: 'https://via.placeholder.com/400x300'
    // },
]

var backupData = [];

var usrInput;
var index;
var time = 100;



if (time === 0) {
    // INSERT TIMEOUT TEXT
    showAnswer(index);
}

$('#start').on('click', function () {
    $('#start').remove();
    $('#title').empty();

    // note: this function will constantly repeat itself.
    // due to ASYNCHRONOUS nature of js
    startGame();


})

$('#button-container').on('click', '#btn-1', function () {
    buttonID = $(this).attr('id');
    console.log('Button Pushed: ' + buttonID);
    checkAnswer(buttonID, index);
});

$('#button-container').on('click', '#btn-2', function () {
    buttonID = $(this).attr('id');
    console.log('Button Pushed: ' + buttonID);
    checkAnswer(buttonID, index);
});

$('#button-container').on('click', '#btn-3', function () {
    buttonID = $(this).attr('id');
    console.log('Button Pushed: ' + buttonID);
    checkAnswer(buttonID, index);
});

$('#button-container').on('click', '#btn-4', function () {
    buttonID = $(this).attr('id');
    console.log('Button Pushed: ' + buttonID);
    checkAnswer(buttonID, index);
});

// proceed to next question
$('#button-container').on('click', '#next-btn', function () {
    $('#answer-img').remove();

    $('#next-btn').remove();

    $('#question').removeAttr('style');

    questionData.splice(index, 1);
    console.log(questionData);

    if (questionData.length > 0) {
        // pick next question
        index = Math.floor(Math.random() * questionData.length);

        // render new question
        $('#question').text(questionData[index].question);

        // render new buttons
        getButtons();
    }

    else {
        $('#question').text('THE END');
    }
});

// ---------------------------
// ------ END OF DRIVER --------
// ---------------------------

// ---------------------------
// ------- FUNCTIONS -----------
// ---------------------------
function startGame() {
    console.log("It's alive!");
    // TIMER FUNCTIONS HERE
    //start timer?
    ////

    // pick question
    index = Math.floor(Math.random() * questionData.length);

    // render question
    $('#question').text(questionData[index].question);

    // render buttons
    getButtons();
    console.log('Question: ' + questionData[index].question);
    console.log('Waiting for button push . . .');
    console.log('Actual Answer Is: ' + questionData[index].answer);
}

// RE-STYLE THIS:
// make it so buttons have no background, and change color on hover.
function getButtons() {
    console.log('Calling getButtons() -- --')
    $('#button-container').empty();
    var newBtn;

    for (var i = 0; i < 4; i++) {
        newBtn = $('<button>');
        newBtn.addClass('app-button centered');
        newBtn.attr('id', 'btn-' + (i + 1));
        // newBtn.attr('data-index', i);
        newBtn.text('Button-' + (i + 1));
        $('#button-container').append(newBtn);
    }

    console.log('-- Buttons Created --')
}

function checkAnswer(buttonID, index) {
    console.log('buttonID = ' + buttonID);
    console.log('answer: ' + questionData[index].answer);
    console.log(questionData);
    if (buttonID === questionData[index].answer) {
        console.log('answer correct');
        showAnswer(index);
    }
    else {
        console.log('incorrect');
        showAnswer(index);
    }
}

function showAnswer(index) {
    var newElement;

    // empty relevent elements
    $('#question').empty();
    $('#button-container').empty();

    // create new heading
    $('#question').text('Yohhhhhh');
    $('#question').css('line-height', '170px');

    // create new image
    newElement = $('<img>')
    newElement.attr('id', 'answer-img');
    newElement.attr('src', questionData[index].img)
    $('#app').append(newElement);

    // create new button
    newElement = $('<button>').text('Next Question!');
    newElement.attr('id', 'next-btn')
    newElement.addClass('app-button centered')
    $('#button-container').append(newElement);
}