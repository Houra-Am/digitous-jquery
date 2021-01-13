$(document).ready(function() {
    $("button").click(function() {
        $("input").val(function(n, c) {
            return c + " https://restcountries.eu/rest/v2/name/usa";
        });

        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/usa",
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