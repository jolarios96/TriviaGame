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
        img: 'https://via.placeholder.com/400x300',

        choices: [
            'Q1 - Choice 1',
            'Q1 - Choice 2',
            'Q1 - Choice 3',
            'Q1 - Choice 4',
        ],
    },

    {
        question: 'THIS IS QUESTION 2',
        answer: 'btn-2',
        img: 'https://via.placeholder.com/400x300',

        choices: [
            'Q2 - Choice 1',
            'Q2 - Choice 2',
            'Q2 - Choice 3',
            'Q2 - Choice 4',
        ],
    },
    {
        question: 'THIS IS QUESTION 3',
        answer: 'btn-3',
        img: 'https://via.placeholder.com/400x300',

        choices:[
            'Q3 - Choice 1',
            'Q3 - Choice 2',
            'Q3 - Choice 3',
            'Q3 - Choice 4',
        ],
    },
    {
        question: 'THIS IS QUESTION 4',
        answer: 'btn-4',
        img: 'https://via.placeholder.com/400x300',

        choices:[
            'Q4 - Choice 1',
            'Q4 - Choice 2',
            'Q4 - Choice 3',
            'Q4 - Choice 4',
        ],
    },
    {
        question: 'THIS IS QUESTION 5',
        answer: 'btn-1',
        img: 'https://via.placeholder.com/400x300',

        choices:[
            'Q5 - Choice 1',
            'Q5 - Choice 2',
            'Q5 - Choice 3',
            'Q5 - Choice 4',
        ],
    },
    // {
    //     question: 'THIS IS QUESTION 6',
    //     answer: 'btn-2',
    //     img: 'https://via.placeholder.com/400x300',
    //
    //      
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
var backupData = questionData.slice();
var usrInput;
var index;
var time = 100;



if (time === 0) {
    // INSERT TIMEOUT TEXT
    showAnswer(index);
}

$('#button-container').on('click', '#start', function () {
    $('#app').remove('#start');
    $('#title').empty();

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

    if (questionData.length > 0) {
        // pick next question
        index = Math.floor(Math.random() * questionData.length);

        // render new question
        $('#question').text(questionData[index].question);

        // render new buttons
        getButtons(index);
    }

    else {
        $('#question').text('THE END');

        var newElement = $('<button>');
        newElement.attr('id', 'reset-btn');
        newElement.addClass('centered');
        newElement.text('Play Again?');

        $('#button-container').append(newElement);

        console.log('No More Questions!')
    }

    //reset data, go back to start
    $('#app').on('click', '#reset-btn', function () {
        console.log('resetting')
        questionData = backupData.slice();
        console.log(questionData);
        console.log(backupData);
        $('#question').empty();
        $('#button-container').empty();

        var newElement = $('<button>');
        newElement.attr('id', 'start');
        newElement.addClass('centered');
        newElement.text('Start');

        $('#button-container').append(newElement);

    });
});

// ####### ##     ## ######     ####### #######    #######  #######  #### ##    ## ####### #######  
// ##      ###    ## ##    ##   ##   ## ##         ##     # ##   ##   ##  ##    ## ##      ##    ## 
// #####   ## ##  ## ##    ##   ##   ## #####      ##     # ######    ##  ##    ## #####   ######  
// ##      ##   #### ##    ##   ##   ## ##         ##     # ##   ##   ##   ##  ##  ##      ##   ##  
// ####### ##     ## ######     ####### ##         #######  ##    ## ####   ####   ####### ##    ##                                                                    

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
    getButtons(index);
    console.log('Question: ' + questionData[index].question);
    console.log('Waiting for button push . . .');
}

// RE-STYLE THIS:
// make it so buttons have no background, and change color on hover.
function getButtons(index) {
    console.log('Calling getButtons() -- --')
    $('#button-container').empty();
    var newBtn;

    for (var i = 0; i < 4; i++) {
        newBtn = $('<button>');
        newBtn.addClass('app-button centered');
        newBtn.attr('id', 'btn-' + (i + 1));

        // newBtn.attr('data-index', i);
        newBtn.text(questionData[index].choices[i]);
        $('#button-container').append(newBtn);
    }

    console.log('-- Buttons Created --')
}

function checkAnswer(buttonID, index) {
    console.log('buttonID = ' + buttonID);
    console.log('answer was: ' + questionData[index].answer);
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
