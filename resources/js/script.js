const iPilotPerformance = document.querySelector("#pilot-performance")
const iUnitPerformance = document.querySelector("#unit-performance")
const iWeaponPerformance = document.querySelector("#weapon-performance")
const iUnitSize = document.querySelector("#unit-size")
const iAttackDistance = document.querySelector("#attack-distance")
const iCommandDistance = document.querySelector("#command-distance")

const pilotOutput = document.getElementById("pilot-output")
const unitOutput = document.getElementById("unit-output")
const totalOutput = document.getElementById("total-output")
const adjustmentOutput = document.getElementById("adjustment-output")

iPilotPerformance.addEventListener('input', function(e){
    const inputText = iPilotPerformance.value
    var total = 0
    var unitValue = parseInt(unitOutput.innerText)
    var adjustment = 0.0
    if (isNaN(unitValue)){
        unitValue = 0
    }
    var outputValue = 0
    switch (inputText){
        case "S":
            outputValue = 4;
            break;
        case "A":
            outputValue = 3;
            break;
        case "B":
            outputValue = 2;
            break;
        case "C":
            outputValue = 1;
            break;
        case "D":
            outputValue = 0;
            break;
    }
    total = outputValue + unitValue

    if (total > 6){
        adjustment = 1.1
    }
    else if (total == 6){
        adjustment = 1.0
    }
    else if (total > 3){
        adjustment = 0.9
    }
    else if (total > 1){
        adjustment = 0.8
    }
    else{
        adjustment = 0.4
    }
    adjustmentOutput.innerText = adjustment
    pilotOutput.innerText = outputValue
    totalOutput.innerText = total
})

iUnitPerformance.addEventListener('input', function(e){
    const inputText = iUnitPerformance.value
    var outputValue = 0
    var total = 0
    var pilotValue = parseInt(pilotOutput.innerText)
    if (isNaN(pilotValue)){
        pilotValue = 0
    }
    switch (inputText){
        case "S":
            outputValue = 4;
            break;
        case "A":
            outputValue = 3;
            break;
        case "B":
            outputValue = 2;
            break;
        case "C":
            outputValue = 1;
            break;
        case "D":
            outputValue = 0;
            break;
    }

    total = outputValue + pilotValue

    if (total > 6){
        adjustment = 1.1
    }
    else if (total == 6){
        adjustment = 1.0
    }
    else if (total > 3){
        adjustment = 0.9
    }
    else if (total > 1){
        adjustment = 0.8
    }
    else{
        adjustment = 0.4
    }
    adjustmentOutput.innerText = adjustment
    
    unitOutput.innerText = outputValue
    totalOutput.innerText = total
})


