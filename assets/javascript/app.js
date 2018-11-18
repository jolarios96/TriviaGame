
var questionData = [
    {
        question: 'THIS IS QUESTION 1',
        answer: 'btn-1'
    },

    {
        question: 'THIS IS QUESTION 2',
        answer: 'btn-2'
    },
    {
        question: 'THIS IS QUESTION 3',
        answer: 'btn-3'
    }
]


$('#start').on('click', function () {
    startGame();
})


function startGame() {
    console.log("It's alive!");
    var usrInput;
    var index;

    $('#start').remove();
    $('#title').remove();

    // TIMER FUNCTIONS HERE

    ////

    index = Math.floor(Math.random() * questionData.length);
    console.log(questionData[index].question);
    $('#question').text(questionData[index].question);

    getButtons();

    // on-click events
    $('#button-container').on('click', '#btn-1', function () {
        console.log($(this).attr('id'));
        buttonID = $(this).attr('id');
        console.log('id = ' + buttonID);
        checkAnswer(buttonID, index);
    });

    $('#button-container').on('click', '#btn-2', function () {
        console.log($(this).attr('id'));
        buttonID = $(this).attr('id');
        console.log('id = ' + buttonID);
        checkAnswer(buttonID, index);
    });

    $('#button-container').on('click', '#btn-3', function () {
        console.log($(this).attr('id'));
        buttonID = $(this).attr('id');
        console.log('id = ' + buttonID);
        checkAnswer(buttonID, index);
    });

    $('#button-container').on('click', '#btn-4', function () {
        console.log($(this).attr('id'));
        buttonID = $(this).attr('id');
        console.log('id = ' + buttonID);
        checkAnswer(buttonID, index);
    });

}

// RE-STYLE THIS:
// make it so buttons have no background, and change color on hover.
function getButtons() {
    console.log('Calling getButtons() -- --')
    var newBtn;

    for (var i = 0; i < 4; i++) {
        console.log('Generating button-' + (i + 1));
        newBtn = $('<button>');
        newBtn.addClass('app-buttons centered');
        newBtn.attr('id', 'btn-' + (i + 1));
        newBtn.attr('data-index', i);
        newBtn.text('Button-' + (i + 1));
        $('#button-container').append(newBtn);
    }

    console.log('-- Buttons Created --')
}




// UNFINISHED
function checkAnswer(buttonID, index) {
    console.log(questionData[index].answer);
    if (buttonID === questionData[index].answer) {
        console.log('answer correct');
    }
    else {
        console.log('incorrect')
    }
}