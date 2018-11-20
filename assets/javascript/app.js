// This Script asks the user a random question from a list.
// After the question is answered (right/wrong), remove that question from the list. 

var questionData = [
    {
        question: 'How many cards are there in a brand new deck?',
        answer: 'btn-1',
        answerID: 0,
        img: 'assets/images/www.maxpixel.net-Joker-Bicycle-Deck-Magic-Cards-Card-Magic-913191.jpg',

        choices: [
            '54',
            '52',
            '53',
            '48',
        ],
    },

    {
        question: "Which of these is NOT a mammal?",
        answer: 'btn-2',
        answerID: 1,
        img: 'assets/images/tenor.gif',

        choices: [
            'Dolphin',
            'Sponge',
            'Whale',
            'Seal',
        ],
    },
    {
        question: 'Which of the following does not exist?',
        answer: 'btn-3',
        answerID: 2,
        img: 'assets/images/1778904004_4229768fc6_z.jpg',

        choices: [
            'Dormouse',
            'Narwhal',
            'Jackalope',
            'Fennec Fox',
        ],
    },
    {
        question: 'The answer is Coffee!',
        answer: 'btn-4',
        answerID: 3,
        img: 'assets/images/black-coffee-1509456493isC.jpg',

        choices: [
            'Not Coffee',
            'Not Coffee',
            'Not Coffee',
            'Coffee',
        ],
    },
    // {
    //     question: 'THIS IS QUESTION 5',
    //     answer: 'btn-1',
    //     answerID: 0,
    //     img: 'https://via.placeholder.com/400x300',

    //     choices: [
    //         'Q5 - Choice 1',
    //         'Q5 - Choice 2',
    //         'Q5 - Choice 3',
    //         'Q5 - Choice 4',
    //     ],
    // },
]

var backupData = questionData.slice();

var timerInterval;
var barInterval;

var timer = {
    time: 9,

    start: function () {
        var started = false;
        timer.time = 9;

        timerInterval = setInterval(function () {
            console.log(timer.time);
            $('#timer').text(timer.time);
            if (!started) {
                started = true;
                timer.displayBar();
            }
            if (timer.time > 0) {
                timer.time--
            }
            else {
                showTimeout();
                timer.stop();
            }
        }, 1000);
    },

    displayBar: function () {
        var length = 1000;
        barInterval = setInterval(function () {
            length--;
            $('#progress-bar').css('width', length);
        }, 8);
    },

    stop: function () {
        $('#timer').text('');
        clearInterval(timerInterval);
        clearInterval(barInterval);
        $('#progress-bar').css('width', '100%');
        timer.time = 9;
    },
};

var usrInput;
var index;
var correctCounter = 0;

$('#button-container').on('click', '#start-btn', function () {
    $('#app').remove('#start-btn');
    $('#question').empty();

    timer.start();
    startGame();

});

$('#button-container').on('click', '#btn-1', function () {
    buttonID = $(this).attr('id');
    console.log('Button Pushed: ' + buttonID);
    checkAnswer(buttonID, index);
    timer.stop();
});

$('#button-container').on('click', '#btn-2', function () {
    buttonID = $(this).attr('id');
    console.log('Button Pushed: ' + buttonID);
    checkAnswer(buttonID, index);
    timer.stop();
});

$('#button-container').on('click', '#btn-3', function () {
    buttonID = $(this).attr('id');
    console.log('Button Pushed: ' + buttonID);
    checkAnswer(buttonID, index);
    timer.stop();
});

$('#button-container').on('click', '#btn-4', function () {
    buttonID = $(this).attr('id');
    console.log('Button Pushed: ' + buttonID);
    checkAnswer(buttonID, index);
    timer.stop();
});

// proceed to next question
$('#button-container').on('click', '#next-btn', function () {
    $('#answer-img').removeAttr('src');

    $('#next-btn').remove();

    $('#question').removeAttr('style');

    // remove used question from questionData[]
    questionData.splice(index, 1);

    if (questionData.length > 0) {
        // pick next question
        index = Math.floor(Math.random() * questionData.length);

        // render new question
        $('#question').text(questionData[index].question);

        // render new buttons
        getButtons(index);

        // start timer
        timer.start();
    }

    else {
        $('#question').text('You got ' + correctCounter + ' of ' + backupData.length + ' correct!');

        var newElement = $('<button>');
        newElement.attr('id', 'reset-btn');
        newElement.addClass('centered');
        newElement.text('Return to Menu');

        $('#button-container').append(newElement);

        console.log('No More Questions!');
    };
});

$('#button-container').on('click', '#timeout-btn', function () {
    showAnswer(index);
});


//reset data, go back to start
$('#button-container').on('click', '#reset-btn', function () {
    console.log('resetting');

    correctCounter = 0;

    questionData = backupData.slice();

    console.log(questionData);
    console.log(backupData);

    $('#question').empty();

    $('#question').text('Open-ended Trivia!');

    $('#button-container').empty();

    var newElement = $('<button>');
    newElement.attr('id', 'start-btn');
    newElement.addClass('centered');
    newElement.text('Start Game');

    $('#button-container').append(newElement);
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

    // pick question
    index = Math.floor(Math.random() * questionData.length);

    // render question
    $('#question').text(questionData[index].question);

    // render buttons
    getButtons(index);
    console.log('Question: ' + questionData[index].question);
    console.log('Waiting for button push . . .');
};

function getButtons(index) {
    console.log('Calling getButtons() -- --');
    $('#button-container').empty();
    var newBtn;

    for (var i = 0; i < 4; i++) {
        newBtn = $('<button>');
        newBtn.addClass('app-button centered');
        newBtn.attr('id', 'btn-' + (i + 1));

        // get choices for buttons
        newBtn.text(questionData[index].choices[i]);
        $('#button-container').append(newBtn);
    };

    console.log('-- Buttons Created --')
};

function checkAnswer(buttonID, index) {
    console.log('buttonID = ' + buttonID);
    console.log('answer was: ' + ' '+ questionData[index].answer);
    
    if (buttonID === questionData[index].answer) {
        console.log('answer Counter = 0');
        correctCounter++;
        showAnswer(index);
    }
    else {
        console.log('incorrect');
        showAnswer(index);
    };
};

function showTimeout() {
    var newElement;

    // empty relevent container elements
    $('#question').empty();
    $('#button-container').empty();

    $('#question').text("Time's Up!");
    $('#question').css('line-height', '170px');

    // create new button
    newElement = $('<button>').text('See Answer');
    newElement.attr('id', 'timeout-btn')
    newElement.addClass('app-button centered')
    $('#button-container').append(newElement);
};

function showAnswer(index) {
    var newElement;

    // empty relevent container elements
    $('#question').empty();
    $('#button-container').empty();

    // create new heading
    $('#question').text('Answer Was: ' + questionData[index].choices[questionData[index].answerID]);
    $('#question').css('line-height', '170px');

    $('#answer-img').attr('src', questionData[index].img)

    // create new button
    newElement = $('<button>').text('Next Question!');
    newElement.attr('id', 'next-btn')
    newElement.addClass('app-button centered')
    $('#button-container').append(newElement);
};
