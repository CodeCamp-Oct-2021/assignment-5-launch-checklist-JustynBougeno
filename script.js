// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by 
    // calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        // listedPlanets is a listed array of objects with planet data.
        // Below this comment call the appropriate helper
        // functions to pick a planet fom the list of planets
        // and add that information to your destination.
       let randomPlanet = pickPlanet(listedPlanets);
       console.log(randomPlanet.name);
       let missionTarget = document.getElementById("missionTarget")
       console.log(missionTarget);
       missionTarget.innerHTML = `<h2>Mission Destination</h2>
       <ol>
           <li>Name: ${randomPlanet.name} </li>
           <li>Diameter: ${randomPlanet.diameter} </li>
           <li>Star: ${randomPlanet.star}</li>
           <li>Distance from Earth: ${randomPlanet.distance} </li>
           <li>Number of Moons: ${randomPlanet.moons} </li>
       </ol>
       <img src="${randomPlanet.image}">`
    })
    // represented the form HTML element in our js file as an object
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let faultyItems = document.getElementById("faultyItems")
        let pilotName = document.querySelector("input[name='pilotName']").value;
        let copilotName = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoLevel = document.querySelector("input[name='cargoMass']").value;
        // all code in here will only run after we submit the form
        // are any of the fields empty?
        // do all files have valid data inputted?
        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoLevel, event);
       
        // we are submitting this alert after we click submit
        // alert("Form submitted");
        // then we preventDefault to make sure the page doesn't refresh (I know it's annoying)
    })
});

