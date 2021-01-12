$(document).ready(function() {
    $("button").click(function() {
        $("#bg").css({
            position: "absolute",
        });
        $("#bg").animate({
            left: "100px",
            //marginLeft: '100px',
        });
    });


});