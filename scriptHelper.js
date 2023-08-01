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
    let form = document.querySelector('[data-testid="testForm"]');
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotnameInput = document.querySelector("[name='pilotName']");
        let copilotnameInput = document.querySelector("[name='copilotName']");
        let fuellevelInput = document.querySelector("[name='fuelLevel']");
        let cargomassInput = document.querySelector("[name='cargoMass']");
        if (pilotusernameInput.value == "" || copilotnameInput.value == "" || fuellevelInput.value == "" || cargomassInput.value == "") {
        alert("All fields are required.");
        console.log(alert);
        return false;
        }
       })
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
