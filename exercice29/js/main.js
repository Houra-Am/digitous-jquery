$(document).ready(function() {
    $("button").click(function() {
        if ($("input").val().length > 5) {
            $("input").addClass('is-valid');
        } else {
            $("input").addClass('is-invalid');
        }
    });
});