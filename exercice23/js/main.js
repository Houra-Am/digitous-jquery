$(document).ready(function() {
    $("button").click(function() {
        $("#square").animate({
                "bottom": "-=110px",
                "left": "+=960px"
            },

            "slow")

    });
});