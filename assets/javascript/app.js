



$('#start').on('click', function () {
    startGame();
})


function startGame() {
    console.log("It's alive!");
    var usrInput;

    $('#start').remove();
    createButtons();
    usrInput = getUserInput();
}

function createButtons() {
    console.log('Calling createButtons() -- --')
    var newBtn;

    for (var i = 0; i < 3; i++) {
        console.log('Generating button-' + (i + 1));
        newBtn = $('<button>');
        newBtn.addClass('app-buttons');
        newBtn.attr('id', 'btn-' + (i + 1));
        newBtn.text('Button-' + (i + 1));
        $('#button-container').append(newBtn);
    }

    console.log('-- Buttons Created --')
}

function getUserInput(id) {
    console.log('Calling getUserInput')
    $('#button-container').on('click', '#btn-1', function () {
        console.log($(this).attr('id'));
        id = $(this).attr('id');
        console.log('id = ' + id);
    })

    $('#button-container').on('click', '#btn-2', function () {
        console.log($(this).attr('id'));
        id = $(this).attr('id');
        console.log('id = ' + id);
    })

    $('#button-container').on('click', '#btn-3', function () {
        console.log($(this).attr('id'));
        id = $(this).attr('id');
        console.log('id = ' + id);
    })

    return id;
}