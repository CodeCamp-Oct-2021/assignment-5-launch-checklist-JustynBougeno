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
    // let digitsInString = testInput.match(/[\d]/g);
    if (!testInput || testInput === null || testInput.length === 0) {

        return "Empty";
    } else
    if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    };


    // validateInput(string);
    // return "Empty", "Not a Number", or "Is a Number";

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log(list);
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required!");
        // event.preventDefault()
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Pilot and Copilot must be valid names");
        // event.preventDefault()
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo and fuel must be a number");
        // event.preventDefault()
    } else {
        // wrapped this in else block so it doesn't run if inputs aren't valid
        document.getElementById("pilotStatus").innerHTML = `Pilot Ready: ${pilot}`;
        document.getElementById("copilotStatus").innerHTML = `Copilot Ready: ${copilot}`;
        // right now we are only testing 1 case, and that is if fuelLevel is less than 10000
        // OR cargoLevel is greater than 10000
        // but there's many cases have to test

        //done  if fuelLevel is less than 10000 AND cargoLevel is less than 10000
        // not ready to launch, we need to update the fuelStatus and cargoStatus accordingly

        // doneelse if fuelLevel AND cargoLevel are greater than 10000
        // not ready to launch, fuelStatus fuel is good, cargoStatus not good

        //this one is good to go
        // else if fuelLevel is less than 10000 AND cargoLevel is greater than 10000
        // not ready to launch, fuelStatus is not good, cargoStatus also not good

        // done else if fuelLevel is greater than 10000 and cargoStatus is less than 10000
        // ready for launch, fuelStatus is good and cargoStatus is also good
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            list.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Fuel too low to launch!";
            document.getElementById("cargoStatus").innerHTML = "Cargo to heavy to launch!";
        } else if (fuelLevel < 10000 && cargoLevel < 10000) {
            list.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Fuel too low to launch!";
            document.getElementById("cargoStatus").innerHTML = "Cargo ready to launch!";
        } else if (fuelLevel > 10000 && cargoLevel > 10000) {
            list.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Fuel ready to launch!";
            document.getElementById("cargoStatus").innerHTML = "Cargo not ready to launch!";
        }  else if (fuelLevel > 10000 && cargoLevel < 10000) {
            list.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("fuelStatus").innerHTML = "Fuel ready to launch!";
            document.getElementById("cargoStatus").innerHTML = "Cargo is ready to launch!";
        }
    }
}
// My fetch created here already.
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json()
    });

    return planetsReturned;
}

// this pickPlanet function will take an array of planet objects
// select a random element from that array and return
// we can use bracket notation to access indexes of an array
// create a random index number, and then use it to select an element
// from our array
function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;