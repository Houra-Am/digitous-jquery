$(document).ready(function() {
    $("button").click(function() {
        $("#exercise").append("<div id='countries'></div>")

        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/france",
            success: function(data, status, response) {
                console.log(response.status);
                $("#countries").text(data.map(function(country) {
                    console.log(`Country name: ${country.name}, Country capital: ${country.capital}`)
                    return country.name;
                }).join("-"));
            },
            /*method: "GET",
            error: function(data, status, response) {
                $("#countries").text("Error");
            },
            dataType: "json"*/
        });
    });
});