function rps() {
    var userChoice=document.getElementById("r_p_s");
    var computerChoice = Math.random();
    if (computerChoice <= 0.33) {computerChoice="R";}
    else if (computerChoice <= 0.66) {computerChoice="P";}
    else {computerChoice="S";}
	document.getElementById("pc").src = "pictures/".concat(userChoice.value, ".png")
	document.getElementById("cc").src = "pictures/".concat(computerChoice, ".png")
    console.log(userChoice.value, computerChoice);
    document.getElementById("output").innerHTML = compare(userChoice.value, computerChoice)};

var compare=function(p,c) {
    if(p===c){return("It's a tie!")}
    if(p==="P"){
        if(c==="R"){return("You win!")}
        else{return("You lose!")}}
    if(p==="R"){
        if(c==="S"){return("You win!")}
        else{return("You lose!")}}
    if(p==="S"){
        if(c==="P"){return("You win!")}
        else{return("You lose!")}}};
