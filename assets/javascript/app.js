// This Script asks the user a random question from a list.
// After the question is answered (right/wrong), remove that question from the list. 
// Removal method @ checkAnswer()

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


$('#start').on('click', function () {
    $('#start').remove();
    $('#title').empty();
    startGame();
})


function startGame() {
    console.log("It's alive!");
    var usrInput;
    var index;

    // TIMER FUNCTIONS HERE

    ////
    index = Math.floor(Math.random() * questionData.length);
    console.log(questionData[index].question);
    $('#question').text(questionData[index].question);


    getButtons();

    // on-click events
    console.log('Waiting for button push . . .');
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
    console.log('Actual Answer: ' + questionData[index].answer);
    if (buttonID === questionData[index].answer) {
        console.log('answer correct');
        


        showAnswer(index);

        // Remove question from questionData[]
        questionData.splice(index, 1);
        console.log(questionData);
    }
    else {
        console.log('incorrect');


        showAnswer(index);

        // Remove question from questionData[]
        questionData.splice(index, 1);
        console.log(questionData);
    }
}

function showAnswer(index){
    $('#question').empty();
    $('#button-container').empty();

    var newImg = $('<img>')
    newImg.attr('id', 'answer-img');
    newImg.attr('src', questionData[index].img)
    $('#app').append(newImg);
}