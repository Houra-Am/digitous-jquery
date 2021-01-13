$(document).ready(function() {
    $("button").click(function() {

        var input = $("input").val().toString();
        var url = "https://restcountries.eu/rest/v2/name/" + input;

        $.ajax({
            url: url,
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