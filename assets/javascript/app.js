



$('#start').on('click', function () {
    startGame();
    getAnswer();
})


function startGame() {
    $('#start').remove();
    console.log("It's alive!");

    var newBtn;

    for (var i = 0; i < 3; i++) {
        newBtn = $('<button>');
        newBtn.addClass('app-buttons');
        newBtn.attr('id', 'btn-' + (i+1));
        newBtn.text('Button-' + (i+1));
        $('#button-container').append(newBtn);
    }
}

function getAnswer(id) {

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