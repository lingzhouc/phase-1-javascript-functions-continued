// saturdayFun activity w/ default roller-skate
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

// mondayWork activity w/ default go to the office
function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// wrapAdjective("%")("a dedicated programmer"); 
//=> "You are %a dedicated programmer%!"
function wrapAdjective (flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}