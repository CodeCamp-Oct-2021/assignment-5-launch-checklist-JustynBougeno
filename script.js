// Write your JavaScript code here!

window.addEventListener("load", function() {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by 
    // // calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function(result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function() {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper
    //     // functions to pick a planet fom the list of planets
    //     // and add that information to your destination.
    // })
    // represented the form HTML element in our js file as an object
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        let faultyItems = document.getElementById("faultyItems")
        let pilotName = document.getElementById("pilotName").value;
        let copilotName = document.getElementById("copilotName").value;
        let fuelLevel = document.getElementById("fuelLevel").value;
        let cargoLevel = document.getElementById("cargoLevel").value;
        // all code in here will only run after we submit the form
        // are any of the fields empty?
        // do all files have valid data inputted?
        // formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoLevel, event);
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
        // we are submitting this alert after we click submit
        alert("Form submitted");
        // then we preventDefault to make sure the page doesn't refresh (I know it's annoying)
        event.preventDefault();
    })
});