// Your code here
function saturdayFun(defaultActivity = "roller-skate") {
    return `This Saturday, I want to ${defaultActivity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(character) {
    return function(phrase) {
        return `You are ${character}${phrase}${character}!`;
    }
}
console.log(wrapAdjective("*")("a hard worker"));

console.log(wrapAdjective("||")("a dedicated programmer"));


//Calculator
let Calculator = {add, subtract, multiply, divide};

function add() {
    return 1+3;
}

function subtract() {
    return 1-3;
}

function multiply() {
    return 1*3;
}

function divide() {
    return 10/5;
}


function actionApplyer(startingInteger, arrayOfTransforms) {
    let returnVal = startingInteger;
    for (let i = 0; i < arrayOfTransforms.length; i++) {
        if (i === 0) {
            returnVal = arrayOfTransforms[i](startingInteger);
        } else {
            returnVal = arrayOfTransforms[i](returnVal);
        }
    }
    return returnVal;

}

arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]