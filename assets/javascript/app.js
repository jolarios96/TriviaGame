
var questionData = [
    {
        question: 'THIS IS QUESTION 1',
        answer: ''
    },

    {
        question: 'THIS IS QUESTION 2',
        answer: ''
    },
    {
        question: 'THIS IS QUESTION 3',
        answer: ''
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

    // TIMER FUNCTIONS HERE
    
    ////

    index = Math.floor(Math.random() * questionData.length);
    console.log(questionData[index].question);
    $('#question').text(questionData[index].question);
    
    getButtons();
    usrInput = getUserInput();
    // checkAnswer(usrInput);
    // OR
    // checkAnswer(getUserInput());
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
        newBtn.text('Button-' + (i + 1));
        $('#button-container').append(newBtn);
    }

    console.log('-- Buttons Created --')
}


// OPTIMIZE THIS:
// make it so the buttons call a 'checkAnswer()' function
function getUserInput(id) {
    console.log('Calling getUserInput')
    $('#button-container').on('click', '#btn-1', function () {
        console.log($(this).attr('id'));
        id = $(this).attr('id');
        console.log('id = ' + id);
    });

    $('#button-container').on('click', '#btn-2', function () {
        console.log($(this).attr('id'));
        id = $(this).attr('id');
        console.log('id = ' + id);
    });

    $('#button-container').on('click', '#btn-3', function () {
        console.log($(this).attr('id'));
        id = $(this).attr('id');
        console.log('id = ' + id);
    });

    $('#button-container').on('click', '#btn-4', function () {
        console.log($(this).attr('id'));
        id = $(this).attr('id');
        console.log('id = ' + id);
    });

    return id;
    // alternatively, call checkAnswer() from here directly?
    // checkAnswer(id);
}

// UNFINISHED
function checkAnswer() {

}