$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/france",
            success: function(data, status, response) {
                console.log(response.status);
                $("#country").html(data.map(function(country) {
                    console.log(country.name)
                    return country.name;
                }).join("-"));

                $("#capital").html(data.map(function(country) {
                    console.log(country.capital)
                    return country.capital;
                }).join("-"));
            },
        });
    });
});