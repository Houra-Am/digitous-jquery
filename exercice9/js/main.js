function myFunction() {
    $('#text').css({ 'display': 'block' });
}

$(document).ready(function() {

    $('button').click(function() {
        myFunction();
    });
});