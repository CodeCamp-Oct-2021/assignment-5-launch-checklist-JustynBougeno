// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    let digitsInString = testInput.match(/[\d]/g);
    if (!testInput || testInput === null || testInput.length === 0) {

        return "Empty";
    } else
    if (typeof testInput === "string" && digitsInString.length === 0) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    };


    // validateInput(string);
    // return "Empty", "Not a Number", or "Is a Number";

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel, event) {
    console.log(list);
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required!");
        event.preventDefault()
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Pilot and Copilot must be valid names");
        event.preventDefault()
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo and fuel must be a number");
        event.preventDefault()
    }

    document.getElementById("pilotStatus").innerHTML += `: ${pilot}`;
    document.getElementById("copilotStatus").innerHTML += `: ${copilot}`;
    if (parseInt(fuelLevel) < 10000 || parseInt(cargoLevel) > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
        document.getElementById("launchStatus").style.color = "red";
    } else {
        document.getElementById("faultyItems").style.visibility = "hidden";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
        document.getElementById("launchStatus").style.color = "green";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function(response) {});

    return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;