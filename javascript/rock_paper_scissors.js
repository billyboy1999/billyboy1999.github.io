function rps() {
    var output=document.getElementById("output");
    var userChoice=document.getElementById("r_p_s");
    var computerChoice = Math.random();
    output.innerHTML="Test"
    if (computerChoice <= 0.33) {computerChoice="R";}
    else if (computerChoice <= 0.66) {computerChoice="P";}
    else {computerChoice="S";}
    
    output.innerHTML = compare(userChoice, computerChoice);

var compare=function(p,c) {
    if(p===c){return("The result is a tie!")}
    if(p==="P"){
        if(c==="R"){return("You win!")}
        else{return("You lose!")}}
    if(p==="R"){
        if(c==="S"){return("You win!")}
        else{return("You lose!")}}
    if(p==="S"){
        if(c==="P"){return("You win!")}
        else{return("You lose!")}}};
