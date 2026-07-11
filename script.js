// DigitaleHulpWijzer - basis scripts


// Zoekfunctie

function zoekHulp() {

    let zoekwoord = document.querySelector(".zoek input").value;


    if (zoekwoord.trim() === "") {

        alert("Vul eerst in waar je hulp bij zoekt.");

        return;

    }


    alert(
        "Je zoekt naar: " + zoekwoord +
        "\n\nDe zoekfunctie wordt binnenkort uitgebreid met slimme oplossingen."
    );

}



// Knop koppelen aan zoekfunctie

document.addEventListener("DOMContentLoaded", function() {


    const knop = document.querySelector(".zoek button");


    if (knop) {

        knop.addEventListener("click", zoekHulp);

    }


});



// Welkomstmelding (later eventueel verwijderen)

console.log("DigitaleHulpWijzer is geladen.");
